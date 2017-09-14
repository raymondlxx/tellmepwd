import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { Password, WebsiteProvider } from '../../providers/providers';

/**
 * Generated class for the WebsiteCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-website-create',
  templateUrl: 'website-create.html',
})
export class WebsiteCreatePage {
	isReadyToSave: boolean;
  form: FormGroup;
  passwordInputType: string = "password";
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera,
    public passwordProvider: Password,
    public websiteProvider: WebsiteProvider) {

    this.form = formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      url: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebsiteCreatePage');
  }

  createItem() {

  }
  cancel() {
    this.viewCtrl.dismiss();
  }
  done() {
    if (!this.form.valid) { return; }
    var website = this.form.value;

    this.websiteProvider.save(website);

    this.viewCtrl.dismiss();

  }

  showOrHidePwd() {
    if (this.passwordInputType == "password") {
      this.passwordInputType = "text";
    } else {
      this.passwordInputType = "password";
    }
  }

  generatePassword() {
    this.form.value.password = this.passwordProvider.generatePassword();
  }
}
