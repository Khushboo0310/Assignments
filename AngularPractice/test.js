var arr = ["java","angular"];

var [j,a] = arr;

console.log(a);

//--------------------

var person = {
    name: "Khush", email: "khushboobhasne@gmail.com"
};

console.log(person.name+" "+person.email);

//------------object destructuring--------------------
const{name,email} = person;

console.log(name+" "+email);