import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListGroupPage } from './list-group';

@NgModule({
  declarations: [
    ListGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(ListGroupPage),
  ],
})
export class ListGroupPageModule {}
