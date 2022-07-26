import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserService } from './loginser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkstatus();
  }
  constructor(private myserve:LoginserService , private route:Router){

  }
  

checkstatus(){
  if(this.myserve.logincred==true){
return this.myserve.logincred
}
else{

  return this.route.navigateByUrl('/login')
}

}}
