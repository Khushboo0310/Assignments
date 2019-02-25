function add(a,b){
    let p = new Promise((resolve,reject)=>{
        if(a<0 || b<0)
            reject("Invalid No.");
        else{
            let res = a+b;
            resolve(res);
        }
    });
    return p;
}

add(-3,20).then((r)=>console.log(r),(err)=>console.log(err));