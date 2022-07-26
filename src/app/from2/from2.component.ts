import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-from2',
  templateUrl: './from2.component.html',
  styleUrls: ['./from2.component.css']
})
export class From2Component implements OnDestroy {


  myuser=new User("","","");

  newarry=["option1", "option2" , "option3"]




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
  alert("submission done");
 this.router.navigateByUrl('/')
}
}
