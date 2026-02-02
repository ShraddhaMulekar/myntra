import React from "react";
import { addProduct } from "../../api/productApi";

const AddProduct = () => {
    const handleSubmit = async(e)=>{
        e.preventDefault()

        const form=e.target

        const product = {
            title:form.title.value,
            brand:form.brand.value,
            category:form.category.value,
            price:form.price.value,
            image:[form.image.value],
            sizes:form.sizes.value.split(","),
            stock:form.stock.value,
            description:form.description.value,
        }

        const token = localStorage.getItem("token")
        await addProduct(product, token)
        alert("Product Added 🎉");
    }
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" />
      <input name="brand" placeholder="Brand" />
      <input name="category" placeholder="Category" />
      <input name="price" placeholder="Price" />
      <input name="image" placeholder="Image URL" />
      <input name="sizes" placeholder="S,M,L" />
      <input name="stock" placeholder="Stock" />
      <textarea name="description" placeholder="Description" />
      <button>Add Product</button>
    </form>
  );
};

export default AddProduct;
