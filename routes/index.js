var express = require("express");
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const customers = await db.getAll();
    res.render("index", {
      title: "Sistema de Cadastro de Clientes",
      customers: customers,
    });
  } catch (error) {
    next(error);
  }
});

/* POST save new customer */
router.post("/save", async function (req, res, next) {
  try {
    const customer = {
      name: req.body.name,
      age: parseInt(req.body.age),
    };
    await db.insert(customer);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

/* POST update customer */
router.post("/update/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const customer = {};

    // Only update provided fields
    if (req.body.name) customer.name = req.body.name;
    if (req.body.age) customer.age = parseInt(req.body.age);

    await db.update(id, customer);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

/* GET delete customer */
router.get("/delete/:id", async function (req, res, next) {
  try {
    await db.remove(req.params.id);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
