async function add(a,b){
    return a+b;
}

async function test(){
    let res = await add(10,20);
    console.log(res);
}

test();

//this feature is present in ES7

//It will automatically creates the promise. it is the replacement for Promise 