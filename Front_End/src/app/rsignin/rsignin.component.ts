import { Component, OnInit } from '@angular/core';
import {ReceiverService} from '../receiver.service';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Form, Validators/**for validatio  purpose */ } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
  selector: 'app-rsignin',
  templateUrl: './rsignin.component.html',
  styleUrls: ['./rsignin.component.css']
})
export class RsigninComponent implements OnInit {
  success: String ;
  display: boolean = false;
  error:boolean=false;
  recoverpassdisplay: boolean = false;
  recoverform: FormGroup;//to reset password
  rsigninform:FormGroup;//to signin form
  ngoname: String;
  email: string;
  password: String;
  constructor(private fb:FormBuilder,public receiverservice:ReceiverService,public router:Router) { 
    //singin form 
    this.rsigninform=fb.group({
      ngoname:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    })

    //password recover form
    this.recoverform = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmpassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

    })
  }

  ngOnInit(): void {
      sessionStorage.setItem('status', 'signin');
  }

  viewAllDonors()
  {
    this.router.navigate(['receiver1']);
  }
  checkData(rsigninform:any)
  {
    // console.log(rsigninform.value)
    this.display = true;
    console.log('making display true')
    this.receiverservice.checkReceiver(rsigninform.value).subscribe((res) => {
      console.log(res);
      if (res == true)
      { 
        this.error=false;
        this.success = "Login successfully"
        this.viewAllDonors()
        this.email=rsigninform.get('email').value;
        // console.log(this.email);
        localStorage.setItem('email', this.email);

      }
      else if(res==false)
      {
        this.success = 'Incorrect email or password'
        this.error=true;
        
      }
        
    })
    console.log('making display false')
    this.display = false;

  }
  
  gotosignup()
  {
    this.router.navigate(['rsignup']);
  }

  //to display recove passwod part
  recoverPass() {
    this.recoverpassdisplay = true;

  }

  //to update password
  updatePass(recoverform: any) {
    // console.log(this.recoverform)
    if (this.recoverform.controls['password'].value != this.recoverform.controls['confirmpassword'].value) {
      alert(' Your both passwords must match')
      this.recoverform.controls['password'].setValue('');
      this.recoverform.controls['confirmpassword'].setValue('');
    }
    else {
      this.receiverservice.recoverPass(recoverform.value).subscribe((res) => {
        if (res == true) {
          console.log('updated');
          this.recoverpassdisplay = false;
          //to set again all values to blank
          this.recoverform.controls.email.setValue('');
          this.recoverform.controls.password.setValue('');
          this.recoverform.controls.confirmpassword.setValue('');
        }
        else
          console.log('email not exist');
      })
    }

  }


}
