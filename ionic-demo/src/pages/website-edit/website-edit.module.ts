import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebsiteEditPage } from './website-edit';

@NgModule({
  declarations: [
    WebsiteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(WebsiteEditPage),
  ],
})
export class WebsiteEditPageModule {}
