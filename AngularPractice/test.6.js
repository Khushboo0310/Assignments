function greet(){
    return function(){
        return "Hello";
    }
}

var msg = greet()();    //var msg = greet();
console.log(msg);       //console.log(msg());

//---------------------------------------------------

function greet1(a){
    return function(b){
        return a+b;
    }
}

var ans = greet1(10)(20);
console.log(ans);