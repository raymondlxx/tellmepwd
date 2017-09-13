import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Category } from '../../models/data-model';
import { CategoryProvider } from '../../providers/providers';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
 	currentCategories: Category[];

	constructor(public navCtrl: NavController, public navParams: NavParams, public categoryProvider:CategoryProvider,public translateService:TranslateService) {
		this.currentCategories = this.categoryProvider.query();
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad CategoriesPage');
	}

	addItem(){
		console.log('addItem CategoriesPage');
	}
	openItem(){
		console.log('openItem CategoriesPage');
	}
	deleteItem(){
		console.log('deleteItem CategoriesPage');
	}
	itemSelected(category:Category){
		console.log('itemSelected CategoriesPage');	
		this.navCtrl.push("ListWebsitePage",{category:category});
	}


}
