import { Router } from "express";
import {addOrderItem, deleteOrderItem, getAllOrderItems, getOrderItemById, updateOrderItem} from "../controllers/orderItemController.js";

const router = Router();

router.post("/", addOrderItem);
router.get("/", getAllOrderItems);
router.get("/:id", getOrderItemById);
router.patch("/:id", updateOrderItem);
router.delete("/:id", deleteOrderItem);

export default router;