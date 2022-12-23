const ProductManager = require("./Desafio2");
const [PC] = require("./products.js")

const newProductManager = new ProductManager('db.json')
// newProductManager.getProducts()
// newProductManager.addProducts(PC)
// newProductManager.getId(1)
newProductManager.update(3, {stock:20})