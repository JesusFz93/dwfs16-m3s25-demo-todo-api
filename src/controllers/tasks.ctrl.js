const Task = require("../models/task");

const obtenerTareas = async (req, res) => {
  try {
    const tasks = await Task.find();

    return res.json({
      ok: true,
      msg: "Tareas obtenidas",
      tasks: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      tasks: [],
    });
  }
};

const obtenerTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        ok: true,
        msg: "No se encontro la tarea",
        task: {},
      });
    }

    return res.json({
      ok: true,
      msg: "Tarea obtenida",
      task: task,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      task: {},
    });
  }
};

const crearTarea = async (req, res) => {
  try {
    const { name } = req.body;

    const task = await Task.findOne({ name: name });

    if (task) {
      return res.status(400).json({
        ok: false,
        msg: "Esta tarea ya existe",
        task: {},
      });
    }

    const nueva_tarea = {
      name,
    };

    const tarea_creada = await Task(nueva_tarea).save();

    return res.json({
      ok: true,
      msg: "Tarea creada",
      task: tarea_creada,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      task: {},
    });
  }
};

const actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const informacion_nueva = {
      status: status,
    };

    const tarea_actualizada = await Task.findByIdAndUpdate(
      id,
      informacion_nueva,
      { new: true }
    );

    return res.json({
      ok: true,
      msg: "Tarea completada",
      task: tarea_actualizada,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      task: {},
    });
  }
};

const eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;

    const tarea_eliminada = await Task.findByIdAndRemove(id);

    return res.json({
      ok: true,
      msg: "Tarea eliminada",
      task: tarea_eliminada,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      task: {},
    });
  }
};

module.exports = {
  obtenerTareas,
  obtenerTarea,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
};
