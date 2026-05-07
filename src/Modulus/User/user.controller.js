import { Router } from "express";
import { createUser, confirmEmail, loginUser } from "./user.services.js";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: "Signup successful", user });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

router.post("/verify-email", async (req, res) => {
  try {
    const result = await confirmEmail(req.body);
    res.json(result);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await loginUser(req.body, res);
    res.json({ message: "Login success", ...result });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

export default router;
