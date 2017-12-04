import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageService} from '../../../../services/storage.service';
import {GeoZone} from '../../../../api/generated/model/GeoZone';
import {ProcessSendMoneyRequest} from '../../../../api/generated/model/ProcessSendMoneyRequest';
import {SendMoneyContext} from '../../../../api/generated/model/SendMoneyContext';
import ReceptionModeEnum = SendMoneyContext.ReceptionModeEnum;
import {Collection} from '../../../../app.declaration';
import * as _ from 'lodash';

@Component({
  selector: 'app-transfer-send-step2',
  templateUrl: './transfer-send-step2.component.html',
  styleUrls: ['./transfer-send-step2.component.scss']
})
export class TransferSendStep2Component implements OnInit {

  sendMoneyRequest: ProcessSendMoneyRequest;
  allCountries: GeoZone[];
  partnerInfo: Collection<string[]>;
  partnerCodes: string[] = [];
  partnerCode: string;
  partnerNames: string[];
  partnerName: string;
  receptionModes: ReceptionModeEnum[];

  ACCOUNT: string = ReceptionModeEnum[ReceptionModeEnum.ACCOUNT];
  CASH: string = ReceptionModeEnum[ReceptionModeEnum.CASH];
  WALLET: string = ReceptionModeEnum[ReceptionModeEnum.WALLET];
  CARD: string = ReceptionModeEnum[ReceptionModeEnum.CARD];


  constructor(private router: Router,
              private route: ActivatedRoute,
              private storage: StorageService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.allCountries = data.allCountries || [];
      this.partnerInfo = data.partnerInfo || {};
      this.partnerCodes = _.keys(data.partnerInfo);
    });

    this.initModel();

    this.initReceptionModes();
  }

  initReceptionModes() {
    this.receptionModes = [
      ReceptionModeEnum.ACCOUNT,
      ReceptionModeEnum.CASH,
      ReceptionModeEnum.WALLET,
      ReceptionModeEnum.CARD
    ];
    this.sendMoneyRequest.receptionMode = null; // deselect if it is
  }

  onPartnerCodeSelected(partnerCode: string) {
    this.partnerCode = partnerCode;
    this.partnerNames = this.partnerInfo[partnerCode];
  }

  isReceptionModeAccount() {
    return this.sendMoneyRequest.receptionMode === ReceptionModeEnum.ACCOUNT;
  }

  isReceptionModeWallet() {
    return this.sendMoneyRequest.receptionMode === ReceptionModeEnum.WALLET;
  }

  isReceptionModeCard() {
    return this.sendMoneyRequest.receptionMode === ReceptionModeEnum.CARD;
  }


  initModel() {
    let model: ProcessSendMoneyRequest = this.storage.get('processSendMoneyRequest') as ProcessSendMoneyRequest;
    if (!model) {
      model = {
        sender: {},
        receiver: {}
      };
    }
    this.sendMoneyRequest = model;

  }

  onReceptionModeChange(mode: string) {
    const receptionMode = ReceptionModeEnum[mode];
    this.sendMoneyRequest.receptionMode = receptionMode;

    switch (receptionMode) {
      case ReceptionModeEnum.CASH:
        this.goStep3();
        break;
      case ReceptionModeEnum.ACCOUNT:
      case ReceptionModeEnum.WALLET:
      case ReceptionModeEnum.CARD:
      default:
        break;
    }
  }

  goStep3() {
    this.storage.set('processSendMoneyRequest', this.sendMoneyRequest);
    this.router.navigate(['/transactions/send/step3']);
  }


}
