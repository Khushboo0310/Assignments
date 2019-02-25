var add = function(a,b,cb){
    let res=a+b;
    cb(res);
}

add(100,300, function(r){
    console.log(r);
});