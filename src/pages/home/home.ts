import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SliderPage } from '../slider/slider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  constructor(public nav: NavController) {
    this.items = [
       {
        title: 'Hoiatusmärgid',
      },
      {
        title: 'Keelumärgid',
      },
       {
        title: 'Mõjualamärgid',
      },
      {
        title: 'Eesõigusmärgid',
      },
      {
        title: 'Kohustusmärgid',
      },
      {
        title: 'Osutusmärgid',
      },
      {
        title: 'Juhatusmärgid',
      },
      {
        title: 'Teeninduskohamärgid',
      },
      {
        title: 'Lisateadetetahvlid',
      },
      {
        title: 'Teemärgistus',
      },
      {
        title: 'Tunnusmärgid',
      },
      {
        title: 'Reguleerija märguanded',
      },
    ];
  }
  
  OpenSliderPage(item) {
    this.nav.push(SliderPage, { item: item });
  }
}
