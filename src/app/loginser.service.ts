import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserService {
logincred=false;
  constructor() { }
 

  validlogin(cade:string){
    if(cade.startsWith('samar')){
      this.logincred=true;

    }
    else{
      this.logincred=false;
    }
  }


}
