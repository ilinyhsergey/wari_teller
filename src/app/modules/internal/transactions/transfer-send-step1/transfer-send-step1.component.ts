import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {StorageService} from '../../../../services/storage.service';
import {ProcessSendMoneyRequest} from '../../../../api/generated/model/ProcessSendMoneyRequest';
import {GeoZone} from '../../../../api/generated/model/GeoZone';

@Component({
  selector: 'app-transfer-send-step1',
  templateUrl: './transfer-send-step1.component.html',
  styleUrls: ['./transfer-send-step1.component.scss']
})
export class TransferSendStep1Component implements OnInit {

  private sendMoneyRequest: ProcessSendMoneyRequest;

  private allCountries: GeoZone[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private storage: StorageService) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.allCountries = data.allCountries || [];
    });

    let model: ProcessSendMoneyRequest = this.storage.get('processSendMoneyRequest') as ProcessSendMoneyRequest;
    if (!model) {
      model = {
        sender: {},
        receiver: {}
      };
    }

    this.sendMoneyRequest = model;
  }

  goStep2() {
    this.storage.set('processSendMoneyRequest', this.sendMoneyRequest);
    this.router.navigate(['/transactions/send/step2']);
  }

}
