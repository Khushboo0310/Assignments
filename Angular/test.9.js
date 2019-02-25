function add(a,b){
    let p = new Promise((resolve,reject)=>{
        let res = a+b;
        resolve(res);
    });
    return p;
}

add(10,20).then((r)=>console.log(r));