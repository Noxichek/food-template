import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupen',
  templateUrl: './coupen.component.html',
  styleUrls: ['./coupen.component.scss']
})
export class CoupenComponent implements OnInit {

  @Input()
  public couponImgSrc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
