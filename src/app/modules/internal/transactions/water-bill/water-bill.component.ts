import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {CanComponentDeactivate} from '../../../../model/CanComponentDeactivate';

@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.scss']
})
export class WaterBillComponent implements OnInit, CanComponentDeactivate {

  states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  states2 = ['Alabama', 'Alaska', 'American Samoa', 'Arizona'];

  entreprises = ['SDE', 'SDE 1', 'SDE 2'];

  country: string;
  country2: string = this.states2[0];
  entreprise: string = this.entreprises[0];

  constructor() {
  }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true; // todo check unsaved changes
  }


  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  }

}
