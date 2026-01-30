import express from "express"
import { getProducts } from "../../pages/products/getProducts.page.js"
import { getProductById } from "../../pages/products/getProductById.page.js"
import { createProduct } from "../../pages/products/createProduct.page.js"
import { adminMiddleware } from "../../middleware/admin.middleware.js"
import { updateProduct } from "../../pages/products/updateProduct.page.js"

export const productRouter = express.Router()

productRouter.get("/", getProducts)                              // GET /products/
productRouter.get("/:id", getProductById)                        // GET /products/:id
productRouter.post("/create", adminMiddleware, createProduct)    // POST /products/create
productRouter.put("/update/:id", adminMiddleware, updateProduct)     // PUT /products/update
