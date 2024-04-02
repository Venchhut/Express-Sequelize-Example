import express from "express";
import {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Route to get all contacts
router.get("/", getContacts);

// Route to create a new contact
router.post("/", createContact);

// Route to get a specific contact by ID
router.get("/:id", getContact);

// Route to update a specific contact by ID
router.put("/:id", updateContact);

// Route to delete a specific contact by ID
router.delete("/:id", deleteContact);

export default router;
