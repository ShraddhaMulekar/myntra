import { ProductModel } from "../../models/product.model.js"

export const updateProduct = async(req, res)=>{
    try {
        const updated = await ProductModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        return res.status(203).json({message:"product updated successful!", updated})
    } catch (error) {
        return res.status(403).json({message:"something went wrong!", error})
    }
}