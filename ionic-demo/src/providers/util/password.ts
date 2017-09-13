
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

@Injectable()
export class Password {
	private passwordLength: number = 8;
	private includeLowner: boolean =true;
	private includeUpper: boolean =true;
	private includeNumber: boolean =true;
	private includeSpecial: boolean =false;
	private ALL_LETTERS:string ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&()_[]{},.;:";
	private LOWER_LETTERS:string ="abcdefghijklmnopqrstuvwxyz";
	private UPPER_LETTERS:string ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private NUMBER_LTTERS:string ="0123456789";
	private SPECIAL_LTTERS:string ="!@#$%^&()_[]{},.;:";

	generatePassword(){
		var typeCount = 0;
		var allLetters = "";
		if(this.includeLowner) {typeCount++;allLetters+=this.LOWER_LETTERS;}
		if(this.includeUpper) {typeCount++;allLetters+=this.UPPER_LETTERS;}
		if(this.includeNumber) {typeCount++;allLetters+=this.NUMBER_LTTERS;}
		if(this.includeSpecial) {typeCount++;allLetters+=this.SPECIAL_LTTERS;}

		if(allLetters==""){
			allLetters = this.ALL_LETTERS;
		}

		allLetters = allLetters.split("").sort(this.random_comp).join("");
		var result = "";
		var l = allLetters.length-1;

		for(var i=0;i<this.passwordLength;i++){
			var index = Math.floor(Math.random()*l);
			result += allLetters[index];
		}
		return result;

	}

	random_comp(strA, strB) {
	    return Math.random()>Math.random()?1:-1;
	}

}

