import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WarningSignService as  Warning } from './../../services/WarningSigns.service';
import { PrioritySignService as Priority } from './../../services/PrioritySigns.service';
import { ProhibitionSignService as Prohibition } from './../../services/ProhibitionSigns.service';
import { ZonalValiditySignService as ZonalValidity } from './../../services/ZonalValidity.service';
import { MandatorySignsService as Mandatory } from './../../services/MandatorySigns.service';
import { PointingSignsService as Pointing } from './../../services/PointingSigns.service';
import { TheBoardSignsService as TheBoard } from './../../services/TheBoardSigns.service';
import { ServiceFacilitySignsService as ServiceFacility } from './../../services/ServiceFacilitySigns.service';
import { AdditionalPanelsService as AdditionalPanels } from './../../services/AdditionalPanels.service';
import { RoadMarkingsService as RoadMarkings } from './../../services/RoadMarkings.service';
import { IdentificationBadgesService as IdentificationBadges } from './../../services/IdentificationBadges.service';
import { RegulatorAlertsService as RegulatorAlerts } from './../../services/RegulatorAlerts.service';

@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
  providers: [
    Warning,
    Priority,
    Prohibition,
    ZonalValidity,
    Mandatory,
    Pointing,
    TheBoard,
    ServiceFacility,
    AdditionalPanels,
    RoadMarkings,
    IdentificationBadges,
    RegulatorAlerts,
  ],
})
export class SliderPage {
   item;
   slides;
   title;
   constructor( public navCtrl: NavController, params: NavParams, Warning: Warning,
     Priority: Priority, Prohibition: Prohibition, ZonalValidity: ZonalValidity, 
     Mandatory: Mandatory, Pointing: Pointing, TheBoard: TheBoard, ServiceFacility: ServiceFacility,
     AdditionalPanels: AdditionalPanels, RoadMarkings: RoadMarkings,
     IdentificationBadges: IdentificationBadges, RegulatorAlerts: RegulatorAlerts

    ) {
      this.item = params.data.item;
      this.title = params.data.item.title;
     switch (this.title) {
        case 'Hoiatusmärgid': 
          this.slides = Warning.getSigns();
        break;
        case 'Keelumärgid': 
          this.slides = Prohibition.getSigns();
        break;
        case 'Mõjualamärgid': 
          this.slides = ZonalValidity.getSigns();
        break;
        case 'Eesõigusmärgid': 
          this.slides = Priority.getSigns();
        break;
        case 'Kohustusmärgid': 
          this.slides = Mandatory.getSigns();
        break;
        case 'Osutusmärgid': 
          this.slides = Pointing.getSigns();
        break;
        case 'Teeninduskohamärgid': 
          this.slides = ServiceFacility.getSigns();
        break;
        case 'Juhatusmärgid': 
          this.slides = TheBoard.getSigns();
        break;
        case 'Lisateadetetahvlid': 
          this.slides = AdditionalPanels.getSigns();
        break;
        case 'Teemärgistus': 
          this.slides = RoadMarkings.getSigns();
        break;
        case 'Tunnusmärgid': 
          this.slides = IdentificationBadges.getSigns();
        break;
         case 'Reguleerija märguanded': 
          this.slides = RegulatorAlerts.getSigns();
        break;
     }
   }
}