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
        console.log("error in get products by id api:", error)
    }
}

export const addProduct  = async(product, token)=>{
    try {
        const res = await fetch(`${api}/products/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization : `Bearer ${token}`
            },
            body : JSON.stringify(product)
        })
        return res.json()
    } catch (error) {
        console.log("error in create products api:", error)
    }
}