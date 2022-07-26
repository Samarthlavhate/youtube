import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserService } from '../loginser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logserve:LoginserService ,private router:Router) { }

  ngOnInit(): void {
  }
  
  login(code:string){
  this.logserve.validlogin(code)
  this.router.navigateByUrl('/')
  }

}
