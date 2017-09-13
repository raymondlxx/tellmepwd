import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryCreatePage } from './category-create';

@NgModule({
  declarations: [
    CategoryCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryCreatePage),
  ],
})
export class CategoryCreatePageModule {}
