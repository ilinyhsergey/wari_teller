import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {StorageService} from '../../../../services/storage.service';
import {ProcessSendMoneyRequest} from '../../../../api/generated/model/ProcessSendMoneyRequest';
import {GeoZone} from '../../../../api/generated/model/GeoZone';
import {SendMoneyContext} from '../../../../api/generated/model/SendMoneyContext';
import PaymentMeanEnum = SendMoneyContext.PaymentMeanEnum;
import {PieceType} from '../../../../api/generated/model/PieceType';
import {DateToNgbDateStructPipe} from '../../../app-components/date-to-ngb-date-struct.pipe';
import {NgbDateStructToDatePipe} from '../../../app-components/ngb-date-struct-to-date.pipe';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Customer} from '../../../../api/generated/model/Customer';

@Component({
  selector: 'app-transfer-send-step1',
  templateUrl: './transfer-send-step1.component.html',
  styleUrls: ['./transfer-send-step1.component.scss']
})
export class TransferSendStep1Component implements OnInit {

  sendMoneyRequest: ProcessSendMoneyRequest;
  allCountries: GeoZone[];
  allPieceTypes: PieceType[];
  paymentMeans: string[];
  identityEmissionDate: NgbDateStruct;
  identityExpirationDate: NgbDateStruct;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private storage: StorageService,
              private dateToNgbDateStructPipe: DateToNgbDateStructPipe,
              private ngbDateStructToDatePipe: NgbDateStructToDatePipe) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.allCountries = data.allCountries || [];
      this.allPieceTypes = data.allPieceTypes || [];
    });

    this.initPaymentMean();
    this.initModel();
  }

  private initPaymentMean() {
    this.paymentMeans = Object.keys(PaymentMeanEnum);
  }

  private initModel() {
    let model: ProcessSendMoneyRequest = this.storage.get('processSendMoneyRequest') as ProcessSendMoneyRequest;
    if (!model) {
      model = {
        sender: {},
        receiver: {}
      };
    }
    this.sendMoneyRequest = model;

    this.initIdentityDates(this.sendMoneyRequest);
  }

  private initIdentityDates(sendMoneyRequest: ProcessSendMoneyRequest): void {
    const sender: Customer = sendMoneyRequest.sender;
    this.identityEmissionDate = this.dateToNgbDateStructPipe.transform(sender.identityEmissionDate);
    this.identityExpirationDate = this.dateToNgbDateStructPipe.transform(sender.identityExpirationDate);
  }

  private assembleModel(sendMoneyRequest: ProcessSendMoneyRequest): ProcessSendMoneyRequest {
    const sender: Customer = sendMoneyRequest.sender;
    sender.identityEmissionDate = this.ngbDateStructToDatePipe.transform(this.identityEmissionDate);
    sender.identityExpirationDate = this.ngbDateStructToDatePipe.transform(this.identityExpirationDate);
    return sendMoneyRequest;
  }

  goStep2() {
    const sendMoneyRequest = this.assembleModel(this.sendMoneyRequest);
    this.storage.set('processSendMoneyRequest', sendMoneyRequest);
    this.router.navigate(['/transactions/send/step2']);
  }

  onPaymentModeChange(mode: string) {
    this.sendMoneyRequest.paymentMean = PaymentMeanEnum[mode];
  }

}
