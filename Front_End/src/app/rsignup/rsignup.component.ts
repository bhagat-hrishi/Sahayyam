import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form, Validators/**for validatio  purpose */ } from '@angular/forms'
import {ReceiverService} from '../receiver.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-rsignup',
  templateUrl: './rsignup.component.html',
  styleUrls: ['./rsignup.component.css']
})
export class RsignupComponent implements OnInit {

  rsignupform:FormGroup;
  validation:String;
  ngoname:String;
  email:String;
  password:String;
  address:String;
  contact:Number;
  ngourl:String;

  constructor(private fb:FormBuilder,public receiverservice:ReceiverService,public router:Router) { 
    this.rsignupform=fb.group({
      ngoname:['',Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      address:['',Validators.required],
      contact: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      ngourl:new FormControl()
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('status', 'signup');
  }

    //to submit data
    submitData(rsignupform:any)
    {
      console.log(this.rsignupform.value);
      this.receiverservice.postReceiver(rsignupform.value).subscribe((res)=>{
        console.log(res);
        if(res==true)
        {
          this.validation = "Data All ready exist";
          window.alert('Your Entered data allready exist');
        }
        else if(res==false)
        {
          this.validation = "data successfully inserted";
          console.log('data inserte success ')
          this.gotosignin();
        }
          
        this.resetForm()

      })
    }
    //to reset form
    resetForm()
    {
      this.rsignupform.reset();

    }


  get f() {
    return this.rsignupform.controls;
  }

    //to go to receiver signin
  gotosignin() 
  {
    this.router.navigate(['rsignin']);
  }
}
