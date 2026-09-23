import {Output, EventEmitter, Component} from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [

  ],
  templateUrl: './square.html',
  styleUrl: './square.scss',
})
export class Square {
  @Output() colorSelected: EventEmitter<string> = new EventEmitter();

  onClick(color:string) {
    this.colorSelected.emit(color);
  }

}
