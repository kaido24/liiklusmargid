import {Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalContentPage } from '../modal/modal';
import { SignTypes as Types } from './../../services/SignTypes.service';
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
  templateUrl: 'search.html',
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
    Types,
  ],
})
export class SearchPage {
  items = [];
  signcollection = [];
  signtypes = [];

  constructor( public modalCtrl: ModalController, Types: Types, Warning: Warning,
     Priority: Priority, Prohibition: Prohibition, ZonalValidity: ZonalValidity, 
     Mandatory: Mandatory, Pointing: Pointing, TheBoard: TheBoard, ServiceFacility: ServiceFacility,
     AdditionalPanels: AdditionalPanels, RoadMarkings: RoadMarkings,
     IdentificationBadges: IdentificationBadges, RegulatorAlerts: RegulatorAlerts) {

    let signs = {
      warning: Warning.getSigns(),
      priority: Priority.getSigns(),
      prohibition: Prohibition.getSigns(),
      zonalvalidity: ZonalValidity.getSigns(),
      mandatory: Mandatory.getSigns(),
      pointing: Pointing.getSigns(),
      theboard: TheBoard.getSigns(),
      servicefacility: ServiceFacility.getSigns(),
      additionalpanels: AdditionalPanels.getSigns(),
      roadmarkings: RoadMarkings.getSigns(),
      identificationbadges: IdentificationBadges.getSigns(),
      regulatoralerts: RegulatorAlerts.getSigns()
    };

    let types = Types.getTypes();
    for (let type in types) {
      this.signtypes.push(types[type]);
    }
     for (let key in signs) {
       for (let nr = 0; nr < signs[key].length; nr++) {
         signs[key][nr]['search'] = signs[key][nr].id + signs[key][nr].name + types[key];
         signs[key][nr]['type'] = types[key];
          this.signcollection.push(signs[key][nr]);
       }
     }
    this.initializeItems();
  }

  initializeItems() {
    this.items = this.signcollection;
  }
  typeChange(ev, input) {
    let selected = { target: {value: ev}};
    input.value = ev;
    this.getItems(selected);
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.search.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  openModal(item) {
    let modal = this.modalCtrl.create(ModalContentPage, item);
    modal.present();
  }
}
