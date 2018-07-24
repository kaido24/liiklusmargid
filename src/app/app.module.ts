import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { AboutPage } from '../pages/about/about';
//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
//import { SliderPage } from '../pages/slider/slider';
import { SearchPage } from '../pages/search/search';
import { ModalContentPage } from '../pages/modal/modal';

@NgModule({
  declarations: [
    MyApp,
   // AboutPage,
   // HomePage,
   // SliderPage,
  //  TabsPage,
    SearchPage,
    ModalContentPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    AboutPage,
 //   HomePage,
//    SliderPage,
 //   TabsPage,
    SearchPage,
    ModalContentPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
