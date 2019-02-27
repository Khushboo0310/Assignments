"use strict";
exports.__esModule = true;
var Contact = /** @class */ (function () {
    function Contact(name, email) {
        this.name = name;
        this.email = email;
        //by specifying private keyword before any variable it will automatically become the member variables of that class
        //hence no need to write this.name = name 
    }
    Contact.prototype.display = function () {
        console.log("name : " + this.name + " , email : " + this.email);
    };
    return Contact;
}());
exports.Contact = Contact;
var contact = new Contact('khush', 'khushboobhasne@gmail.com');
contact.display();
