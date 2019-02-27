export class Contact {
    constructor(private name:string, private email:string){
        //by specifying private keyword before any variable it will automatically become the member variables of that class
        //hence no need to write this.name = name 
    }
    public display(){
        console.log(`name : ${this.name} , email : ${this.email}`);
    }
}

let contact = new Contact('khush','khushboobhasne@gmail.com');

contact.display();