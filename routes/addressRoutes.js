import { Router } from "express";
import { addAddress, deleteAddress, getAddressById, getAllAddresses, updateAddress } from "../controllers/addressController.js";

const router = Router();

router.post("/", addAddress);
router.get("/", getAllAddresses);
router.get("/:id", getAddressById);
router.patch("/:id", updateAddress);
router.delete("/:id", deleteAddress);

export default router;