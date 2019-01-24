self.onmessage = function(evt){
    console.log(typeof(parseInt(evt.data)));
    Odd(parseInt(evt.data));
}

function Odd(n){
    for(var i=n ; i>0 ; i--){
        if(i%2!=0){
            postMessage(i);
        }
    }
}