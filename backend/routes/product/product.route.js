import express from "express"
import { getProducts } from "../../pages/products/getProducts.page.js"

export const productRouter = express.Router()

productRouter.get("/", getProducts)