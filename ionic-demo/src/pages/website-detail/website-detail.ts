import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Website } from '../../models/data-model';

/**
 * Generated class for the WebsiteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-website-detail',
  templateUrl: 'website-detail.html',
})
export class WebsiteDetailPage {

	currentWebsite:Website;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.currentWebsite = navParams.get("item");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebsiteDetailPage');
  }

}
