import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await userService.register(username, email, password);
    res.cookie("auth", result, { httpOnly: true });
    res
      .status(201)
      .json({ message: "User registered successfully!", token: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await userService.login(email, password);

    res
      .status(200)
      .cookie("auth", result, { httpOnly: true })
      .send(result.user)
      .end();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

userController.post("/logout", async (req, res) => {
  try {
    res.clearCookie("auth-cookie");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default userController;
