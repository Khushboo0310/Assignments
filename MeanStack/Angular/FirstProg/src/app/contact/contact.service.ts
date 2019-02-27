import { Contact } from 'src/app/contact/contact';
import { contacts } from 'src/app/contact/store';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs/internal/Observable';
// import { setInterval } from 'timers';

@Injectable()
export class ContactService{
    private contacts : Array<Contact>;
    constructor(){
        this.contacts = contacts;
    }

    public findAll(): Array<Contact>{
        // return this.contacts;
        let c:Array<Contact> ;
        setInterval(()=>{
            c=this.contacts;
        },5000);
        return c;
    }
    public findAllO():Observable<Array<Contact>>{
        var obs = Observable.create((o)=>{
            o.next(this.contacts);

        //     setTimeout(()=>{
        //         o.next([new Contact("A","B","1")]);
        //     },3000);

        //    // o.complete();

        //     setTimeout(()=>{
        //         o.next([new Contact("C","D","2")]);
        //     },4000);
        });
        return obs;
    }

    public findAllP(): Promise<Array<Contact>>{
        let p:Promise<Array<Contact>> = new Promise((resolve,reject)=>{
            resolve(this.contacts);
        })
        return p;
    }

    public getObj(name:string,email:string,cell:string){
        this.contacts.push(new Contact(name,email,cell));
    }

    public del(c:Contact){
        let index = this.contacts.indexOf(c);
        this.contacts.splice(index,1);
    }
}