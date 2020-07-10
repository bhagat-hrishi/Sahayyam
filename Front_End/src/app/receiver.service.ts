import { Injectable } from '@angular/core';
import { Receiverdata} from 'Models/receiverdata.model';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ReceiverService {
  receiver:Receiverdata

  constructor(private http:HttpClient) { }
  private receiversignupURL = 'http://localhost:3000/receiver/signup';
  private receiversigninURL = 'http://localhost:3000/receiver/signin';
  private getallreceiversURL ='http://localhost:3000/receiver/getallreceivers'
  private delparticularreceiverURL = 'http://localhost:3000/receiver/delete';
  private recoverpassURL = 'http://localhost:3000/receiver/recoverpass';
  private deletebypermissionURL = 'http://localhost:3000/receiver/deletebypermission';

  //to submit data 
  postReceiver(receiver: Receiverdata) 
  {
    console.log('inside receiver.ts')
    return this.http.post(this.receiversignupURL,receiver)
  }
  //to get all receivers
  getReceivers()
  {
    return this.http.get(this.getallreceiversURL);
  }

  //to check
  checkReceiver(receiver:Receiverdata)
  {
    console.log('inside checkdata');
    return this.http.post(this.receiversigninURL,receiver);
  }

  //delete by permission of donor
  deleteByPermission(receiver:Receiverdata) {
    return this.http.post(this.deletebypermissionURL,receiver);
  }

  //to delte receiver
  deleteReceiver(receiver:Receiverdata) {
    return this.http.post(this.delparticularreceiverURL, receiver);

  }

  //to recover password
  recoverPass(receiver: Receiverdata) {
    console.log('inside reocver service of receiver')
    console.log(receiver);
    return this.http.post(this.recoverpassURL, receiver)
  }
}
