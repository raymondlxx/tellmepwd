import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Website,Category } from '../../models/data-model';
/*
  Generated class for the WebsiteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebsiteProvider {

  constructor(public http: Http) {
    console.log('Hello WebsiteProvider Provider');
  }

  query(category:Category){

  	var currentWebsites :Website[] = new Array();

	currentWebsites.push(new Website("1","google of "+category.name,"leo","leopassword123qwe"));
	currentWebsites.push(new Website("2","baidu of "+category.name,"leo","johnpassqwe123"));
	currentWebsites.push(new Website("3","163 of "+category.name,"leo","321654rfr5s"));
	currentWebsites.push(new Website("4","sina of "+category.name,"leo","asdf"));

	return currentWebsites;
  }

}
