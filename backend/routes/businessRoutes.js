const express = require("express");
const router = express.Router();
const Business = require("../models/Business");

// CREATE
router.post("/", async (req, res) => {
  const business = new Business(req.body);
  await business.save();
  res.json(business);
});

// READ
router.get("/", async (req, res) => {
  const data = await Business.find();
  res.json(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Business.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Business.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
