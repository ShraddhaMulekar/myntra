import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../../models/user.model.js";

export const loginPage = async (req, res) => {
  const { email, password, role } = req.body;

  // Validate input
  if (!email || !password || !role) {
    return res
      .status(400)
      .json({ message: "Email, password, and role are required!" });
  }

  try {
    const existingUser = await UserModel.findOne({ email });

    // User not found
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: `Access denied! You are not registered as ${role}` });
    }

    // Role mismatch
    if (existingUser.role !== role) {
      return res.status(403).json({
        message: `Access denied! You are not registered as ${role}`,
      });
    }

    // Verify password
    bcrypt.compare(password, existingUser.password, async (err, result) => {
      if (err) {
        console.log({ err });
        return res
          .status(500)
          .json({ message: "Error while verifying password!" });
      }
      if (!result) {
        return res
          .status(401)
          .json({ message: "Invalid credentials. Password is incorrect!" });
      }

      // Generate JWT token
      const payload = {
        username: existingUser.name,
        userId: existingUser._id,
        role: existingUser.role,
      };

      // Sign the token
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
      return res
        .status(200)
        .json({
          message: "Welcome! Login successful!",
          user: existingUser,
          token,
        });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later!" });
  }
};
