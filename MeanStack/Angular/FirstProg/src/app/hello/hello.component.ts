import { Component } from '@angular/core';
import { HelloService } from 'src/app/hello/hello.service';

@Component({
    selector:'app-hello',
    templateUrl:'./hello.component.html',
    styleUrls:['./hello.component.css']
    // template:`<h1>Helloooooooooooooo Nagpur</h1>        
    
    // <h3>{{msg}}</h3>
    
    // <h4>{{loc}}</h4>
    // <h4>{{schedule}}</h4>`

})
//this is inline template
//and if you want to separate this then use templateURL and create separate html file

export class HelloComponent{
    constructor(private hs:HelloService){}      //constructor injection
    msg:string = "Welcome to Angular Class";
    loc:string = "PSL,Nagpur";
    schedule = '25 Feb -1 Mar';
    isButtonDisabled:boolean = false;
    display: boolean = true;
    isSpecial:boolean = true;
    canSave:boolean = false;
    stylename:string = "s1";
    txt:string ='';
    public handleClick(e:Event):void{
        console.log("Clicked . . . . .");
        this.canSave = !this.canSave;
        //let hs:HelloService = new HelloService();       //creating new instance hich is not a good practice
        alert(this.hs.greet());
        // alert(e.type);
        // alert(e.target.textContent);
    }

    public showText(msg):void{
        console.log(msg);
        this.txt = msg;
    }
}