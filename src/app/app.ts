import { Component } from '@angular/core';
import { Square } from './square/square';
@Component({
  selector: 'app-root',
  imports: [Square],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public selectedColor:string = "";

  handleColorSelected(color: string) {
    this.selectedColor = color;
  }
}
