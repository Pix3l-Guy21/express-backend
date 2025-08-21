import { Router } from "express";
import {createCartItem, deleteCartItem, getAllCartItems, getCartItemById, updateCartItem} from "../controllers/cartItemController.js";

const router = Router();

router.post("/", createCartItem);
router.get("/", getAllCartItems);
router.get("/:id", getCartItemById);
router.patch("/:id", updateCartItem);
router.delete("/:id", deleteCartItem);

export default router;