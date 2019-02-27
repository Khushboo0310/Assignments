async function upper(str){
    if(str.length<1)
        throw new Error("Invalid No.");
    var res = str.map(n=>n.toUpperCase());
    return res;
}

async function test(){
    var str = ["Khush","Astha"];
    try{
    let res = await upper(str);
    console.log(res);
    }catch(e){
        console.log(e);
    }

}

test();

//this feature is present in ES7

//It will automatically creates the promise. it is the replacement for Promise 