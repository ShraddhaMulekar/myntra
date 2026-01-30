import { ProductModel } from "../../models/product.model.js"

export const getProductById  = async(req, res)=>{
    try {
        const product = await ProductModel.findById(req.params.id)
        return res.status(200).json({message:"check your product!", product})
    } catch (error) {
        return res.status(400).json({message: "something went wrong!"})
    }
}