import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div style="margin:80px">
      <co-container-picker [(ngModel)]="selectedValue"> </co-container-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class ContainerPickerBasicComponent implements OnInit {

  selectedValue = [2];

  constructor() { }

  ngOnInit(): void {
  }

}
