import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { interval } from 'rxjs';

import { IFood } from './interfaces/food.interface';
import { foods } from './consts/food';

@Component({
  selector: 'app-food-preview',
  templateUrl: './food-preview.component.html',
  styleUrls: ['./food-preview.component.scss'],
})
export class FoodPreviewComponent implements AfterViewInit, OnInit {

  @ViewChild('foodImg')
  private _foodImg!: ElementRef;

  public currentOption: IFood = foods[0];
  public foodsList: IFood[] = foods;
  public toggleImg = true;
  private _changeFoodItem$ = interval(5000);
  private _counter = 1;

  public ngOnInit(): void {
    this._changeFoodItem$.subscribe(() => {
      if (this._counter === this.foodsList.length) {
        this._counter = 0;
      }

      this.changeFood(this._counter);
      this._counter++;
    })
  }

  public ngAfterViewInit(): void {
    this._foodImg.nativeElement.style.backgroundImage = `url(${this.currentOption.imgSrc})`;
  }

  public changeFood(id: number) : void {
    this._counter = id;

    foods.forEach((el) => {
      el.checked = el.id === id;
    })

    const newCurrentOption = foods.find((el: IFood) => el.checked)
    if (newCurrentOption) {
      this.currentOption = newCurrentOption;
    }

    this._foodImg.nativeElement.style.backgroundImage = `url(${this.currentOption.imgSrc})`;
  }



}
