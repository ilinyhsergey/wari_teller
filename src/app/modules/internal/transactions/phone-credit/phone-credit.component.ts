import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';

import {CanComponentDeactivate} from '../../../../model/CanComponentDeactivate';
import {Collection} from '../../../../app.declaration';

@Component({
  selector: 'app-phone-credit',
  templateUrl: './phone-credit.component.html',
  styleUrls: ['./phone-credit.component.scss']
})
export class PhoneCreditComponent implements OnInit, CanComponentDeactivate {

  partnerInfo: Collection<string[]>;

  partnerCodes: string[] = [];
  partnerCode: string;

  partnerNames: string[];
  partnerName: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const partnerInfo: Collection<string[]> = data.partnerInfo;
      this.partnerInfo = partnerInfo;

      this.partnerCodes = _.keys(partnerInfo);
      console.log('____ this.partnerCodes', this.partnerCodes); // todo
    });

  }


  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true; // todo
  }

  onPartnerCodeSelected(partnerCode: string) {
    this.partnerCode = partnerCode;
    this.partnerNames = this.partnerInfo[partnerCode];
  }

  onPartnerNameSelected(partnerName: string) {
    // this.partnerName = partnerName = '1221000747900'; // 1221000748507


  }

}
