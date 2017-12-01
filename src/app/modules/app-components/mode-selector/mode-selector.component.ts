import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Collection} from '../../../app.declaration';

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.scss']
})
export class ModeSelectorComponent implements OnInit {

  @Input()
  modes: string[];

  @Input()
  mode: string;

  @Output()
  modeChange: EventEmitter<string> = new EventEmitter<string>();

  cssByMode: Collection<string> = {};

  constructor() {
  }

  ngOnInit() {
  }

  onModeChange(mode: string) {
    this.modeChange.emit(mode);
  }

}
