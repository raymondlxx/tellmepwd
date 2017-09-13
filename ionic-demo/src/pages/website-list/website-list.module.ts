import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebsiteListPage } from './website-list';

@NgModule({
  declarations: [
    WebsiteListPage,
  ],
  imports: [
    IonicPageModule.forChild(WebsiteListPage),
  ],
})
export class WebsiteListPageModule {}
