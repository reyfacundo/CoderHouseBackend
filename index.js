class ProductManager {
    constructor(title,description,price,thumbnail,code,stock) {
        this.products = []
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    getProducts() {
        return this.products;
    }
    addProduct(product) {
        if (this.getProducts().find((prod) => prod.code == product.code)) return console.log(`A product with the code ${product.code} already exists`);
        else {
            product.id = this.getProducts().length + 1; 
            this.products.push(product);
        }   
    }
    getProductById(productId){
        let MyProduct = null;
        if (this.getProducts().find((prod) => prod.code == productId.code)){
            MyProduct = productId;
        } 
        if ( MyProduct === null){
            return console.log ("Not found.");
        }
        else {
            return MyProduct;
    }
}}

const list = new ProductManager();

const Asus = new ProductManager ('Asus', 'Asus Laptop', 5000, '#', 10, 5);
list.addProduct(Asus);
console.log(list.getProducts())
