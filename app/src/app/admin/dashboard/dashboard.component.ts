import { Component, OnInit } from '@angular/core';
import { topcard, topcards } from '../../models/topcard.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {

  topcards:topcard[];

  constructor() {

    this.topcards=topcards;
  }

  ngOnInit(): void {
  }
}
