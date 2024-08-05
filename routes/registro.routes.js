const { Router } = require("express");
const {
  registrar,
  listar,
  id,
  deletes,
} = require("../controllers/registro.controller");

const router = Router();
router.post("/", registrar);
router.get("/", listar);
router.get("/:id", id);
router.delete("/:id", deletes);

module.exports = { registro: router };
