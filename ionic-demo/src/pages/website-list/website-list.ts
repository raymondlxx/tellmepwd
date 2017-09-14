import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Website } from '../../models/data-model';
import { WebsiteProvider } from '../../providers/providers';

/**
 * Generated class for the WebsiteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-website-list',
  templateUrl: 'website-list.html',
})
export class WebsiteListPage {

	currentWebsites: Website[];

	title: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public websiteProvider: WebsiteProvider
  ) {
    var category = navParams.get("category");
    if (category != null) {
      this.title = category.name;
    } else {
      this.title = "Website List";
    }


    this.websiteProvider.query(category).then(websites => {

      this.currentWebsites = websites;
    });


  }

  ionViewDidLoad(item: Website) {
    console.log('ionViewDidLoad WebsiteListPage');

  }

  itemSelected(selectedItem: Website) {
    console.log("itemSelected WebsiteListPage:" + JSON.stringify(selectedItem));
    this.navCtrl.push("WebsiteDetailPage", { item: selectedItem });
  }

  addItem() {
    console.log("addItem clicked WebsiteListPage");
    this.navCtrl.push("WebsiteCreatePage", null);
  }


  onInput() {

  }
  onCancel() {

  }

}
