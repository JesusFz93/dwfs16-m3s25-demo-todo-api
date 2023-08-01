const { Router } = require("express");

const {
  obtenerTareas,
  obtenerTarea,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
} = require("../controllers/tasks.ctrl");

const router = Router();

router.get("/", obtenerTareas);
router.get("/:id", obtenerTarea);
router.post("/", crearTarea);
router.put("/:id", actualizarTarea);
router.delete("/:id", eliminarTarea);

module.exports = router;
