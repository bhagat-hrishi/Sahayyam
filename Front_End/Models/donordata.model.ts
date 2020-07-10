export class Donordata {
    _id: String;
    hname:String;
    email:String;
    password:String;
    address:String;
    contact:Number;
    food:boolean;
    cloth:boolean;
    money:boolean;
    other:boolean;
    count:number;
    
    constructor(demail: String, remail: String, f: boolean, c: boolean, m: boolean, o: boolean) {
        this.email = demail;
        this.address = remail;
        this.food=f;
        this.cloth=c;
        this.money=m;
        this.other=o;
        this.count=0;
    }
    
}
