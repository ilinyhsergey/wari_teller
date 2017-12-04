import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageService} from '../../../../services/storage.service';
import {GeoZone} from '../../../../api/generated/model/GeoZone';
import {ProcessSendMoneyRequest} from '../../../../api/generated/model/ProcessSendMoneyRequest';
import {SendMoneyContext} from '../../../../api/generated/model/SendMoneyContext';
import ReceptionModeEnum = SendMoneyContext.ReceptionModeEnum;

@Component({
  selector: 'app-transfer-send-step2',
  templateUrl: './transfer-send-step2.component.html',
  styleUrls: ['./transfer-send-step2.component.scss']
})
export class TransferSendStep2Component implements OnInit {

  sendMoneyRequest: ProcessSendMoneyRequest;
  allCountries: GeoZone[];
  receptionModes: ReceptionModeEnum[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private storage: StorageService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.allCountries = data.allCountries || [];
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

  goStep3() {
    this.storage.set('processSendMoneyRequest', this.sendMoneyRequest);
    this.router.navigate(['/transactions/send/step3']);
  }


}
