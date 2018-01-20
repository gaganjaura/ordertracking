import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DataService } from '../service/data-service'
import { User } from '../model/user';
 
const MODEL_NAME = "Customers";
const REQUIRED_MESSAGE = "Please insert credentials";

@Injectable()
export class AuthService {
  private currentUser: User;
  
  constructor(private service: DataService){
    this.service.setModel(MODEL_NAME);
  }

  public login(credentials) {
    if (credentials.emailOrMobile === null || credentials.password === null) {
      return Observable.throw(REQUIRED_MESSAGE);
    } else {
      return Observable.create(observer => {
        this.service
        .getByQueryString("checkCredentials?emailOrMobile=" + credentials.emailOrMobile + "&password=" + credentials.password)
        .subscribe((data: any) => {
          let access = false;
          if(data && data.length > 0){
            access = true;
            this.currentUser = new User(data[0].full_name, data[0].email, data[0].mobile, data[0].id, data[0].role);            
          }  
          observer.next(access);
          observer.complete();       
        },
        error => () => {
          console.log('Error');
        });        
      });
    }
  }
 
  public register(registerCredentials) {
    if (registerCredentials.mobile === null || registerCredentials.password === null) {
      return Observable.throw(REQUIRED_MESSAGE);
    } else {
      return Observable.create(observer => {
        this.service
        .add(registerCredentials)
        .subscribe((data:any) => {       
          console.log(data);   
          observer.next(true);
          observer.complete();
        },
        error => () => {
          observer.next(false);
          observer.complete();
        });        
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}