function square(a){
    let p = new Promise((resolve,reject)=>{
        
            let res = a.map(n => n*n);
            resolve(res);
        
    });
    return p;
}

function inc(a){
    let p = new Promise((resolve,reject)=>{
        
            let res = a.map(n => n+1);
            resolve(res);
        
    });
    return p;
}

var f = [2,3,6,3];
square(f).then((x)=>inc(x).then((r)=>console.log(r)));

// var f = [2,3,6,3];
// inc(f).then((r)=>console.log(r),(err)=>console.log(err));