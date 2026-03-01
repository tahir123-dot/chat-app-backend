import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log("generate token", token);
    return token; // 🔹 string
  } catch (error) {
    console.log(error.message);
  }
};
