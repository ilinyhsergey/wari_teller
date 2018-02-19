import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  onModeChange(mode: string) {
    this.mode = mode;
    this.modeChange.emit(this.mode);
  }

}
