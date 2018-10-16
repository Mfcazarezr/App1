import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LamparaPage } from '../lampara/lampara';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lamparas=LamparaPage;
  bocinas= BocinaPage;
  tvs = TvPage;
  smartphones =SmartphonePage;

  constructor(public navCtrl: NavController) {

  }
  lampara()
  {
    this.navCtrl.push (this.lamparas);
  }

  bocina()
  {
    this.navCtrl.push (this.bocinas);
  }

  
  tv()
  {
    this.navCtrl.push (this.tvs);
  }
  
  smartphone()
  {
    this.navCtrl.push (this.smartphones);
  }

  }


