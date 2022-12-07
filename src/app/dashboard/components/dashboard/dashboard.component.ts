import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('searchInput')
  private _searchInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public openSearchInput(): void {
    this._searchInput.nativeElement.focus();
  }
}
