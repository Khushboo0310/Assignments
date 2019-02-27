function square(n){
    let p = new Promise((resolve,reject)=>{
        if(n.length<1)
            reject("Array is empty");
        else{
            let res = n.map(n => n+1);
            resolve(res);
        }
    });
    return p;
}
var f = [2,3,6,3];
square(f).then((r)=>console.log(r),(err)=>console.log(err));