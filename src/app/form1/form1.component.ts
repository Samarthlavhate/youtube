import { MediaMatcher } from '@angular/cdk/layout';

import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validateemail } from '../emailvalidate';



@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnDestroy{
  
 

currentdate:any=new Date();




  profileForm = new FormGroup({
    title: new FormControl("",[Validators.maxLength(102),Validators.required],),
    startdate:new FormControl("",Validators.required),
    starttime:new FormControl("",Validators.required),
    enddate:new FormControl("",Validators.required),
    endtime:new FormControl("",Validators.required),
    guestemail:new FormControl("",[Validators.required, Validateemail]),
  })

  gettitle(){
    return this.profileForm.controls.title
  }
  getstartdate(){
    return this.profileForm.controls.startdate
  }
  getstarttime(){
    return this.profileForm.controls.starttime
  }
  getenddate(){
    return this.profileForm.controls.enddate
  }
  getendtime(){
    return this.profileForm.controls.endtime
  }
  getguestemail(){
    return this.profileForm.controls.guestemail
  }






mobileQuery: MediaQueryList;
newArray=["one" ,"two"]
  fillerNav = Array.from(this.newArray );

  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onsubmit(){
    alert("form submitted welldone")
   this.router.navigateByUrl('/')
  }
}
