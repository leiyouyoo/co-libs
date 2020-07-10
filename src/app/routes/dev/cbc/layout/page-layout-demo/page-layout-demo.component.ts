import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-layout-demo',
  templateUrl: './page-layout-demo.component.html',
  styleUrls: ['./page-layout-demo.component.css'],
})
export class PageLayoutDemoComponent implements OnInit {

  customer = 2;
  container = [3, 9];
  advanced = false;
  cols = 5;
  size = 'small';
  width = 250;
  coMarginBottom = 8;
  coMarginRight = 12;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      customer: [3],
    });
  }

  ngAfterViewInit() {
  }

  submit() {
    console.log(this.form.value);
  }

}
