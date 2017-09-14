import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Website } from '../../models/data-model';
import { UtilProvider } from '../../providers/providers'

/**
 * Generated class for the WebsiteEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-website-edit',
	templateUrl: 'website-edit.html',
})
export class WebsiteEditPage {

	currentWebsite: Website;
	form: FormGroup;
	constructor(
		public navCtrl: NavController,
		formBuilder: FormBuilder,
		public navParams: NavParams
	) {
		this.currentWebsite = navParams.get("item");

		this.form = formBuilder.group({
			name: [this.currentWebsite.name, Validators.required],
			username: ['', Validators.required],
			password: ['', Validators.required],
			url: ['', Validators.required]
		});

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WebsiteEditPage');
	}

	isReadonly() {
		return false;
	}

}
