// // Create a class Product that represents a product sold online. A product has a price, quantity and name.
// The class should have a method that prints a product's information in the following format: 
// ``` Banana, price 1.1, amount 13```. Create two instances of the class and call the method created to print the product's details.

class Product {
    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    productMethod()
    {
        console.log(`${this.name} price: ${this.price} amount: ${this.quantity}`);
    }
};

function main(){
    let product1 = new Product('Flatscreen', '$400', 25);
    let product2 = new Product('soap', '$1', 200);

    product1.productMethod();
    product2.productMethod();
    // console.log(product1);
    // console.log(product2);
}

main();