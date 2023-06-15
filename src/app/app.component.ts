import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TI_Gaps';
  data = 'Some data';
  constructor() {
    setInterval(() => {
        this.changeData2();
    }, 1000)
  }

  changeData() {
    this.title = this.title.split('').sort(function(){return 0.5-Math.random()}).join('');
  }

  changeData2() {
    this.data = this.data.split('').sort(function(){return 0.5-Math.random()}).join('');
  }
}
