import { Product } from "./classes";
import { products } from "./store";

export class ProductService{
    public add(p:Product):boolean{
        products.push(p);
        return true;
    }

    public findAll():Array<Product>{
        return products;
    }

    public findByCode(code:string):any{
        products.forEach(element => {
            console.log(element);
            if(element.code === code){
                console.log(element);
                return element;
            }
        });
    }
    public remove(code:string):boolean {
        products.forEach(element => {
            
        });
        return null;
    }

}

let obj : ProductService = new ProductService();
console.log(obj.findByCode('3'));
console.log(products);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             