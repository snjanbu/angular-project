import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

  constructor() { }

  printArgument(arg:string){
    console.log('Hello Everyone '+arg);
  }
}
