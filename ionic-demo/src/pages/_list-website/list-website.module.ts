import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListWebsitePage } from './list-website';

@NgModule({
  declarations: [
    ListWebsitePage,
  ],
  imports: [
    IonicPageModule.forChild(ListWebsitePage),
  ],
})
export class ListWebsitePageModule {}
