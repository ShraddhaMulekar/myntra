import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerPage = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      if (existingUser.role === "admin") {
        return res.status(409).json({
          message: "Admin already exists",
        });
      }

      return res.status(409).json({
        message: "User already exists",
      });
    }

    bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS),
      async (err, hash) => {
        if (err) {
          return res.status(500).json({ message: "Error hashing password" });
        }

        if (role && role === "admin") {
          const newUser = new UserModel({ name, email, password: hash, role });
          console.log({ newUser });
          await newUser.save();
          return res
            .status(201)
            .json({ message: "Admin registered successfully" });
        } else {
          const newUser = new UserModel({ name, email, password: hash });
          console.log({ newUser });
          await newUser.save();
          return res
            .status(201)
            .json({ message: "User registered successfully" });
        }
      },
    );
  } catch (error) {
    console.log({ error });
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
