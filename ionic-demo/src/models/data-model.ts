export class Category {

	public id:string;
	public name:string;
	public createTime:number;
	public updateTime:number;
	public itemCount:number;

	constructor(id:string,name:string,itemCount:number){
		this.id = id;
		this.name = name;
		this.createTime = new Date().getTime();
		this.updateTime = new Date().getTime();
		this.itemCount = itemCount;
	}

}

export class Website {

	public id:string;
	public name:string;
	public url:string;
	public username:string;
	public password:string;
	public createTime:number;
	public updateTime:number;

	constructor(id:string,name:string,username:string,password:string){
		this.id = id;
		this.name = name;
		this.username = username;
		this.password = password;
		this.createTime = new Date().getTime();
		this.updateTime = new Date().getTime();
	}
}
