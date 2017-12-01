import {Component, OnInit} from '@angular/core';
import {ProcessSendMoneyRequest} from '../../../../api/generated/model/ProcessSendMoneyRequest';
import {StorageService} from '../../../../services/storage.service';
import {Router} from '@angular/router';
import {TransactionApi} from '../../../../api/generated/api/TransactionApi';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-transfer-send-step3',
  templateUrl: './transfer-send-step3.component.html',
  styleUrls: ['./transfer-send-step3.component.scss']
})
export class TransferSendStep3Component implements OnInit {

  sendMoneyRequest: ProcessSendMoneyRequest;

  constructor(private router: Router,
              private authService: AuthService,
              private transactionApi: TransactionApi,
              private storage: StorageService) {
  }

  ngOnInit() {
    this.initModel();
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

  validateTransaction() {

    const sessionId = this.authService.getSessionId();
    this.transactionApi.processSendMoney1(sessionId, this.sendMoneyRequest);

    // this.storage.set('processSendMoneyRequest', this.sendMoneyRequest);
    this.router.navigate(['/transactions/send/step4']);
  }


}
