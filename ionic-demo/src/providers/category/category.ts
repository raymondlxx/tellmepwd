import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Category } from '../../models/data-model';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

	constructor(public http: Http) {
		console.log('Hello CategoryProvider Provider');
	}


	query(){
		var categories :Category[] = new Array();
		categories.push(new Category("1","All Items",100));
		categories.push(new Category("2","Logins",23));
		categories.push(new Category("3","Credit Card",17));
		categories.push(new Category("4","Identity",60));
		
		return categories;
	}

}
