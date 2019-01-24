var x= "";
function tables(){
    for(var i=2 ; i<=100 ; i++){
        for(var j=1 ; j<=10 ; j++){
            x+=i*j+","
        }
        x+="\n";
    }
}

tables();

postMessage(x);