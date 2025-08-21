import { Router } from "express";
import { addProductImage, deleteProductImage, getAllImages, getProductImageById, updateProductImage } from "../controllers/productImageController.js";

const router = Router();

router.post("/", addProductImage);
router.get("/", getAllImages);
router.get("/:id", getProductImageById);
router.put("/:id", updateProductImage);
router.delete("/:id", deleteProductImage);

export default router;