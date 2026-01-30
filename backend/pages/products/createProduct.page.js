import { ProductModel } from "../../models/product.model.js"

export const createProduct = async(req, res)=>{
    try {
        if(req.user.role !== "admin"){
            return res.status(403).json({message:"Admin only"})
        }

        const product = await ProductModel.create(req.body)

        return res.status(201).json({message:"new product created successful!", product})
    } catch (error) {
        return res.status(404).json({message:"something went wrong!", error})
    }
}