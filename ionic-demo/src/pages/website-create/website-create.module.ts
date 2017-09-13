import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebsiteCreatePage } from './website-create';

@NgModule({
  declarations: [
    WebsiteCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(WebsiteCreatePage),
  ],
})
export class WebsiteCreatePageModule {}
