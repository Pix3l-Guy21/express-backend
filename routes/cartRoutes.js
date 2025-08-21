import { Router } from "express";
import { createCart, deleteCart, getAllCarts, getCartById, updateCart } from "../controllers/cartController.js";

const router = Router ();

router.get("/", getAllCarts);
router.get("/:id", getCartById);
router.post("/", createCart);
router.patch("/:id", updateCart);
router.delete("/:id", deleteCart);

export default router;