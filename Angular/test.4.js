function add(a,b,cb){
    let res=a+b;
    setTimeout(()=>{cb(res)},0);
    
}

add(100,300, function(r){
    console.log(r);
});

console.log("Khushboo");