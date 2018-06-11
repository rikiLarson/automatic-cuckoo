import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  hello(email: string, password: string){
    console.log(email, password)
  }
  constructor() { }
}