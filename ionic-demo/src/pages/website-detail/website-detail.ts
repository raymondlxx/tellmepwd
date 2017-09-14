import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Website } from '../../models/data-model';
import { UtilProvider } from '../../providers/providers'
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

	currentWebsite: Website;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public utilProvider:UtilProvider
    ) {

    this.currentWebsite = navParams.get("item");

    if (this.currentWebsite == null) {
      this.navCtrl.push("CategoriesPage");
      return;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebsiteDetailPage');
  }

  isReadonly() {
    return true;
  }

  edit(){
    this.navCtrl.push("WebsiteEditPage",{item:this.currentWebsite});
  }

}
