import { pool } from "../db.js";
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createdAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === -1) {
      return res.status(403).json({ message: "tarea no encontrada" });
    }
    res.json([result]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, project_id } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title,description, project_id) VALUES (?,?,?)",
      [title, description, project_id]
    );
    res.json({
      id: result.insertId,
      title,
      description,
      project_id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "task no fount" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
