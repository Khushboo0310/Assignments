

var maxT = 1000;
function EvenNumberDoubler(num,Callback){
    var waitT = Math.floor(Math.random()*maxT);
    if(num%2){
        setTimeout(()=>Callback(new Error("Odd Number!!")),waitT);
    }
    else{
        setTimeout(()=>Callback(null,num*2),waitT);
    }
}
function processResult(err,result){
    if(err){console.log("Error : "+err.message);}
    else{console.log("result : "+result);}
}
EvenNumberDoubler(10,processResult);
EvenNumberDoubler(5,processResult);
EvenNumberDoubler(20,processResult);