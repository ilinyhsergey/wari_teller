import {Pipe, PipeTransform} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';


@Pipe({
  name: 'ngbDateStructToDate'
})
export class NgbDateStructToDatePipe implements PipeTransform {

  transform(value: NgbDateStruct): Date {
    if (!value) {
      return null;
    }
    const m = moment({
      year: value.year,
      month: value.month - 1,
      date: value.day
    });
    return m.isValid() ? m.toDate() : null;
  }

}
