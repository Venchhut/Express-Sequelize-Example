import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

// *get all contacts
const getContacts = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findAll();
    const count = await Contact.count();
    res.status(200).json({ count, contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get contacts" });
  }
});

// *create contact
const createContact = asyncHandler(async (req, res) => {
  console.log("the request ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("We need to complete all fields!");
  }

  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// *update contact
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});
export { getContacts, createContact, updateContact, getContact, deleteContact };
