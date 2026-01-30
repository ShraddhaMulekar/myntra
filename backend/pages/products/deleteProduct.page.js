import { ProductModel } from "../../models/product.model.js"

export const deleteProduct = async(req, res)=>{
    try {
        const deleted = await ProductModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"product deleted successful!", deleted})
    } catch (error) {
        return res.status(403).json({message:"something went wrong!", error})
    }
}