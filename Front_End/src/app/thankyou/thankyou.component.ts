import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
  gotohome()
  {
      this.router.navigate(['home'])
  }

}
