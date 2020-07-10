import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form, Validators/**for validatio  purpose */ } from '@angular/forms'
import { DonorService } from '../donor.service';//taking donor service
import { Router } from '@angular/router'

@Component({
  selector: 'app-dsignup',
  templateUrl: './dsignup.component.html',
  styleUrls: ['./dsignup.component.css']
})
export class DsignupComponent implements OnInit {

  validation: string;
  dsignupform: FormGroup;


  constructor(private fb: FormBuilder, public donorservice: DonorService, public route: Router) {
    this.dsignupform = fb.group({
      hname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      address: ['', Validators.required],
      contact: ['', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])]
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('status', 'signup');
  }

  //submit data 
  submitData(dsignupform: any) {
    
    this.donorservice.postDonor(dsignupform.value).subscribe((res) => {
      if (res == true)//data found
      {
        this.validation = "Data All ready exist";
        window.alert('Your Entered data allready exist please signin');
      }
      else {
        console.log('donor signup success')
        this.validation = "Sucessfully inserted";
        this.resetform();
        this.route.navigate(['dsignin'])
      }

    });
  }
  get f() {
    return this.dsignupform.controls;
  }
  resetform() {
    this.dsignupform.reset();
  }

  gotosignin()//if all ready having account go to signin
  {
    this.route.navigate(['dsignin'])
  }

}
