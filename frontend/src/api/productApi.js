import api from "./api"

export const getProducts = async(query="")=>{
    try {
        const res = await fetch(`${api}/products${query}`)
        return res.json()
    } catch (error) {
        console.log("error in get products api:", error)
    }
}

export const getProductsById = async(id)=>{
    try {
        const res = await fetch(`${api}/products/${id}`)
        return res.json()
    } catch (error) {
        console.log("error in get products api:", error)
    }
}