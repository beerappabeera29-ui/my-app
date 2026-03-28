import { AbstractControl } from "@angular/forms";

export function capgeminiEmail(controle:AbstractControl){

    if(controle.value.includes('@capgemini.com')||
    controle.value.includes('@google.com')){
        return null;
    }


    else{
        return{'capgeminiEmail':true}
    }
    
    


}