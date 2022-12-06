import { IFood } from '../interfaces/food.interface';

export const foods: IFood[] = [
  {
    id: 0,
    title: 'steak with tomato',
    radioBtnClass: '.block-buttons--btn',
    imgSrc: 'assets/images/pic1.png',
    couponImgSrc: './assets/images/pic2.png',
    color: '#A80000',
    checked: true,
  },
  {
    id: 1,
    title: 'salmon salad',
    radioBtnClass: 'colorGreen',
    imgSrc: 'assets/images/salmonSalad.png',
    couponImgSrc: './assets/images/couponImg2.png',
    color: '#00A839',
    checked: false,
  },
  {
    id: 2,
    title: 'chicken salad',
    radioBtnClass: 'colorYellow',
    imgSrc: 'assets/images/chickenSalad.png',
    couponImgSrc: './assets/images/pic2.png',
    color: '#FFA800',
    checked: false,
  },
  {
    id: 3,
    title: 'steak with potato',
    radioBtnClass: 'colorPink',
    imgSrc: 'assets/images/steakWithPotato.png',
    couponImgSrc: './assets/images/couponImg4.png',
    color: '#FF2B2B',
    checked: false,
  },
];
