import express from "express"
import { getProducts } from "../../pages/products/getProducts.page.js"
import { getProductById } from "../../pages/products/getProductById.page.js"

export const productRouter = express.Router()

productRouter.get("/", getProducts)         // GET /products/
productRouter.get("/:id", getProductById)   // GET /products/:id
