var no =0;
function Loops(){
    for(var i=0 ; i<1000000000 ; i++){
        no=i;
    }
}

Loops();

postMessage(no);