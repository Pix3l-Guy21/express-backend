import { Router } from "express";
import {addOrder, deleteOrder, getAllOrders, getOrderById, updateOrder} from "../controllers/orderController.js";

const router = Router();

router.post("/", addOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;