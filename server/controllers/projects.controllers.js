import { pool } from "../db.js";
export const getProjects = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM projects ORDER BY createdAt ASC"
    );

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM projects WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "proyecto no encontrado" });
    }
    res.json([result]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const [result] = await pool.query("CALL Add_project(?, ?,? );", [
      name,
      priority,
      description,
    ]);
    res.json({
      id: result.insertId,
      name,
      priority,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const result = await pool.query("UPDATE projects SET ? where id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const [date] = await pool.query(
      "SELECT * FROM projects ORDER BY createdAt ASC"
    );
    const [result] = await pool.query("call DELETEPRO(?, ?)", [
      date[0].done,
      req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "project no fount" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from tasks where project_id = ? ;",
      [req.params.id]
    );
    res.json([result]);
  } catch (error) {
    console.log(error);
  }
};
