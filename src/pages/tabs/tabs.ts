import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
//import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
//import { SlidesPage } from '../slides/slides';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SearchPage;
  //tab2Root: any = SearchPage;
  //tab3Root: any = AboutPage;

  constructor() {

  }
}
