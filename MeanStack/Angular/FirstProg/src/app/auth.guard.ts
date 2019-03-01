import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/interfaces';
// import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // alert("You dont have permission to access this link!!")
    // return true;
    if(sessionStorage.getItem("pass") == "admin")
      return true;
    
    let pass = prompt("Passcode Please?")
    if(pass == "admin"){
      sessionStorage.setItem("pass",pass);
      return true;
    }
    else
      return false;
}
}
