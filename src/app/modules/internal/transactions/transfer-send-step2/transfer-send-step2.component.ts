import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageService} from '../../../../services/storage.service';
import {GeoZone} from '../../../../api/generated/model/GeoZone';
import {ProcessSendMoneyRequest} from '../../../../api/generated/model/ProcessSendMoneyRequest';

@Component({
  selector: 'app-transfer-send-step2',
  templateUrl: './transfer-send-step2.component.html',
  styleUrls: ['./transfer-send-step2.component.scss']
})
export class TransferSendStep2Component implements OnInit {

  private sendMoneyRequest: ProcessSendMoneyRequest;

  private allCountries: GeoZone[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private storage: StorageService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.allCountries = data.allCountries || [];
    });

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

  goStep3() {
    this.storage.set('processSendMoneyRequest', this.sendMoneyRequest);
    this.router.navigate(['/transactions/send/step3']);
  }


}
