import { Injectable } from '@angular/core';
//it should always be imported by the angular/core
@Injectable()
export class HelloService{
    public greet(): string{
        return "heloooo...!";
    }
}