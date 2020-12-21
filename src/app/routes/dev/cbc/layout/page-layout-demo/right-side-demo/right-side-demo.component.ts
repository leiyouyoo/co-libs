import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSideDrawerComponent } from '@co/cbc';
import { PageLayoutDemoComponent } from '../page-layout-demo.component';

@Component({
  selector: 'right-side-demo',
  templateUrl: './right-side-demo.component.html',
  styleUrls: ['./right-side-demo.component.css'],
})
export class RightSideDemoComponent implements OnInit {

  @ViewChild(PageSideDrawerComponent, { static: false }) sideDrawer?: PageSideDrawerComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  open(id?) {
    if (id) {
      this.sideDrawer?.open(PageLayoutDemoComponent, { id });
    } else {
      this.sideDrawer?.open();
    }
  }

  close() {
    this.sideDrawer?.close();
  }

}
