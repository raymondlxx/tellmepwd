import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Website } from '../../models/data-model';
import { WebsiteProvider } from '../../providers/providers';
/**
 * Generated class for the ListWebsitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-website',
  templateUrl: 'list-website.html',
})
export class ListWebsitePage {

	currentWebsites: Website[];
	title:string;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public websiteProvider:WebsiteProvider
  	) {
  		var category = navParams.get("category");
  		this.title = category.name;
  		
  		this.currentWebsites = this.websiteProvider.query(category);
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ListWebsitePage');
  	}

}
