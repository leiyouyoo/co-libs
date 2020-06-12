import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@co/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() {
  }

}
