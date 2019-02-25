var nums = [1,2,3,4,5,4,2,5,4,5,4];

var sqnums = nums.map(n => n*n); 

console.log(sqnums);

//map takes an array and returns an array as a result

var srch = nums.find(n =>  n==3);       //searching for number 3
console.log(srch);

//filter returns an array of how many occurance of any number

var fil = nums.filter(n => n==4);
console.log(fil);