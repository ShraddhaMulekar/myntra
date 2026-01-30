import { ProductModel } from "../../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const { category, brand, minPrice, maxPrice, search } = req.query;

    let filter = {};

    if (category) return (filter.category = category);
    if (brand) return (filter.brand = brand);

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) return (filter.price.$gte = minPrice);
      if (maxPrice) return (filter.price.$lte = maxPrice);
    }

    if (search) {
      return (filter.title = { $regex: search, $options: "i" });
    }

    const product = await ProductModel.find(filter);
    return res.status(200).json({ message: "check all product list!", product });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later!" });
  }
};
