
    import { AbstractControl } from "@angular/forms";

export function Validateemail(c:AbstractControl){
   validemail:false
    if(c.value.endsWith("@gmail.com")){
        return null;

    }
    else{
        return{
  Validateemail:true
        }
    }
}

