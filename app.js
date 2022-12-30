



const express = require("express");
const app = express();
const ProductManager = require("./ProductManager.js");

const productManager = new ProductManager ("./db.json")

app.get("/products", async (req , res) => {
  const products = await productManager.getProducts();
  const { limit } = req.query;
  if(limit) return res.json(products.slice(0, limit));
  else return res.json(products);
});

app.get("/products/:pid", async (req , res) => {
  const products = await productManager.getProducts();
  const { pid } = req.params;
  const product = products.find((product) => product.id === pid);

  if(product) return res.status(200).json(product);
  else return res.status(404).json({message: "Not Found"});
});

app.listen(8080);
