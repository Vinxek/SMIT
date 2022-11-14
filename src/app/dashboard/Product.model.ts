export class Product {

    constructor(code:number, name:string, price:number, size:string){

        this.code=code;
        this.name=name;
        this.price=price;
        this.size=size;
        
    }

    code:number = 0;
    name:string = "";
    price:number = 0;
    size:string = "";

}