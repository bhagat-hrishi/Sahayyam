import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule, FormBuilder, Form, Validators/**for validatio  purpose */ } from '@angular/forms'
import { DonorService } from '../donor.service';//taking donor service
import {Router} from '@angular/router'
@Component({
  selector: 'app-dsignin',
  templateUrl: './dsignin.component.html',
  styleUrls: ['./dsignin.component.css']
})
export class DsigninComponent implements OnInit {
  success: String;
  display:boolean=false;
  recoverpassdisplay:boolean=false;//for display reset form
  dsigninform:FormGroup//to signig form
  recoverform:FormGroup;//to reset password
  hname:String;
  email:string;
  password:String;

  ngOnInit(): void {
 
    sessionStorage.setItem('status', 'signin');
  }
  constructor(private fb:FormBuilder,public donorservice:DonorService,private router:Router) {
    //singin form  
    this.dsigninform=fb.group({
        hname :['', Validators.required],
        email :['',Validators.compose([Validators.required,Validators.email])],
        password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
      })

      //password recover form
      this.recoverform=fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password:['',Validators.compose([Validators.required,Validators.minLength(6)])],
        confirmpassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

      })
    
    }
  
    //go to donor1 page
    gotoDonor1()
    {
     
      this.router.navigate(['donor1']);
    }

  checkData(dsigninform: any) {
    this.display = true;
    console.log('making display true')
    this.donorservice.checkDonor(dsigninform.value).subscribe((res) => {
      if (res == true)
      {
        this.email=this.dsigninform.get('email').value
        //email set to local storage 
        localStorage.setItem('email',this.email);
        this.gotoDonor1();
         
        this.success = "Login successfully";
        console.log('sign success');
       
      }
      else
      {
        this.success = "Incorrect email or password";
        console.log('signin unseccessufull')
        
      }
    })
    console.log('making display false')
    this.display = false;
  }

  
  gotosignup() 
  {
    this.router.navigate(['dsignup']);
  }

  recoverPass()
  {
    this.recoverpassdisplay=true;

  }
  //to update password
  updatePass(recoverform:any)
  {
    console.log(this.recoverform)
    if (this.recoverform.controls['password'].value != this.recoverform.controls['confirmpassword'].value)
    {
      alert(' Your both passwords must match')
      this.recoverform.controls['password'].setValue('');
      this.recoverform.controls['confirmpassword'].setValue('');
    }
    else
    {
      this.donorservice.recoverPass(recoverform.value).subscribe((res)=>{
        if(res==true)
        {
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
