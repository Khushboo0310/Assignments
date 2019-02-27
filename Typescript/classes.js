"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
    Product.prototype.show = function () {
        console.log("code : " + this.code + " , name : " + this.name + " , price : " + this.price);
    };
    return Product;
}());
exports.Product = Product;
// var obj : Product = new Product("A10155","Khushboo",30000);
// obj.show();
