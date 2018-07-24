import { Component, ViewChild } from '@angular/core';
import { Platform, ToastController, Nav, IonicApp } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SearchPage } from '../pages/search/search';
//import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 // rootPage = TabsPage;
 rootPage = SearchPage;
 backButtonPressed: boolean = false;
 @ViewChild('myNav') nav: Nav;

  constructor(public ionicApp: IonicApp, public platform: Platform, public toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
       this.registerBackButtonAction();
    });
  }
   registerBackButtonAction() {
     this.platform.registerBackButtonAction(() => {
       let activePortal = this.ionicApp._modalPortal.getActive();
       if (activePortal) {
         activePortal.dismiss();
         return;
       }
       let activeVC = this.nav.getActive();
       let tabs = activeVC.instance.tabs;
       let activeNav = tabs.getSelected();
       return activeNav.canGoBack() ? activeNav.pop() : this.showExit()
     }, 1);
   }
   showExit() {
     if (this.backButtonPressed) { 
       this.platform.exitApp();
     } else {
       this.toastCtrl.create({
         message: 'Vajuta 2 korda järjest väljumiseks!',
         duration: 2000,
         position: 'top'
       }).present();
       this.backButtonPressed = true;
       setTimeout(() => this.backButtonPressed = false, 2000);
     }
   }

}
