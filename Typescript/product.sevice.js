"use strict";
exports.__esModule = true;
var store_1 = require("./store");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.add = function (p) {
        store_1.products.push(p);
        return true;
    };
    ProductService.prototype.findAll = function () {
        return store_1.products;
    };
    ProductService.prototype.findByCode = function (code) {
        store_1.products.forEach(function (element) {
            console.log(element);
            if (element.code === code) {
                console.log(element);
                return element;
            }
        });
    };
    ProductService.prototype.remove = function (code) {
        store_1.products.forEach(function (element) {
        });
        return null;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
var obj = new ProductService();
console.log(obj.findByCode('3'));
console.log(store_1.products);
