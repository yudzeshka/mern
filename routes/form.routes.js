const { Router } = require("express");
const router = Router();
const Form = require("../models/Form");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, async (req, res) => {
  try {
    const { recipient, inn, kpp, recipientAcc, bik, checkbox, date } = req.body;

    const form = new Form({
      recipient,
      inn,
      kpp,
      recipientAcc,
      bik,
      checkbox,
      owner: req.user.userId,
      date,
    });
    await form.save();

    res.status(201).json({ message: "Данные загружены" });
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const formData = await Form.find({ owner: req.user.userId });
    res.json(formData);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});

module.exports = router;
