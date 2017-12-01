import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'dateToNgbDateStruct'
})
export class DateToNgbDateStructPipe implements PipeTransform {

  transform(date: Date): NgbDateStruct {
    if (!date) {
      return null;
    }
    const m: Moment = moment(date);
    return {
      year: m.year(),
      month: m.month() + 1,
      day: m.date()
    };
  }

}
