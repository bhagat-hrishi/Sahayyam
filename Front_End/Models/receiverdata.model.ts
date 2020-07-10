export class Receiverdata {
    _id: String;
    ngoname: String;
    email: String;
    password: String;
    address: String;
    contact: Number;
    ngourl:String;
    rating:Number

    //this constructor is used for delete account by permission only 
    constructor(remail: String) {
        this.email = remail;
        
      
    }
}
