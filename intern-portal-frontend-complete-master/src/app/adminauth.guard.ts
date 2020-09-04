import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AppService} from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {
  constructor(private service:AppService,private route:Router){ }
  canActivate():boolean{
    if(this.service.loggedIn()) {
      return true
    } else {
      this.route.navigate(['/adminlogin'])
      return false
    }
  }
} 
