import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact/contact';
import { ContactService } from 'src/app/contact/contact.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit , OnDestroy{
    cso =null;
   contacts:Array<Contact>;
  //  contactService: ContactService = new ContactService();

  constructor(private contactService: ContactService) { }    //constructor injection

  ngOnInit() {
    //this.contacts = this.contactService.findAll();

    //-------------Promise---------------

    // this.contactService.findAllP().then((data)=>{
    //   this.contacts=data;
    // })

    //--------------Observable------------
    this.cso = this.contactService.findAllO().subscribe((data)=>{
      this.contacts = data;
    });
  }

  public addRecords(name:any,email:any,cell:any){
      if(name!="" && email!="" && cell!=""){
        this.contactService.getObj(name,email,cell)
      }
      else
        alert("Please provide al the inputs....!");
      //this.contacts.push(this.contactService.getObj(name,email,cell));
      //this.contacts.push(new Contact(name,email,cell));
  }

  public delete(c:Contact){
    this.contactService.del(c);

  }

  ngOnDestroy(){
      this.cso.unsubscribe();
  }

}
