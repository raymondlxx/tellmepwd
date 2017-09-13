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
		categories.push(new Category("1","All Items(11)"));
		categories.push(new Category("2","Logins(10)"));
		categories.push(new Category("3","Credit Card(1)"));
		categories.push(new Category("4","Identity(0)"));
		
		return categories;
	}

}
