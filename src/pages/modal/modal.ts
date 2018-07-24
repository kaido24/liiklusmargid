import {Component } from '@angular/core';
import {NavParams, ViewController } from 'ionic-angular';


@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Detailid
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
    Sulge
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content padding>
   <img src="assets/signs/{{item.id}}.png" class="image"/>
      <h2 class="title">{{item.name}}</h2>
      <p><b>Märgi number:</b> {{item.id}}</p>
      <p><b>Märgi tüüp:</b> {{item.type}}</p>
      <p [innerHTML]="item.description"></p>
</ion-content>
`
})
export class ModalContentPage {
  item;
  constructor( public params: NavParams, public viewCtrl: ViewController) {
    this.item = this.params.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}