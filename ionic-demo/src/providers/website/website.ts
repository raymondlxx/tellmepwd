import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Website,Category } from '../../models/data-model';
import { Storage } from '@ionic/storage';
/*
  Generated class for the WebsiteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebsiteProvider {

  constructor(public http: Http,
    private storage: Storage) {
    console.log('Hello WebsiteProvider Provider');
  }

  query(category:Category){

    return this.storage.get("websites");
  	
  }

  save(website:Website){
    console.log(JSON.stringify(website));

    this.storage.get("websites").then(websites=>{
        if(websites==null){
            websites = new Array();
        }


        website.createTime = new Date().getTime();
        website.updateTime = new Date().getTime();

        websites.push(website);
        this.storage.set("websites",websites);
    });
   
  }

}
