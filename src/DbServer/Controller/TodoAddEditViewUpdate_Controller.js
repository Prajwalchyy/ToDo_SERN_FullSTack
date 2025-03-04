import db from "../DB/db.js";

//insert

export const InsertTask = (req, res) => {
  const { title, description } = req.body;

  if (title.length === 0) {
    return res.send({ message: "Title is required", status: 0 });
  }

  const q = `INSERT INTO todotask (title, description) VALUES (?, ?)`;

  db.query(q, [title, description], (err, result) => {
    if (err) return res.send(err);
    return res.send({ result, message: "task inserted successfully" });
  });
};

//fetch all tasks
export const FetchTask = (req, res) => {
  const q = "SELECT * FROM todotask";

  db.query(q, (err, result) => {
    if (err) return res.send(err);
    return res.send(result);
  });
};

//fetch specific task
export const ViewspecificTaskDetail = (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM todotask WHERE id=?";

  db.query(q, [id], (err, result) => {
    if (err) return send(err);
    return res.send(result[0]);
  });
};

//update task
export const updateTodoTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const q = "UPDATE todotask SET title=?, description=? WHERE id=?";

  db.query(q, [title, description, id], (err, result) => {
    if (err) return res.send(err);
    return res.send({ result, message: "Task updated Sucessfully" });
  });
};

//Update Toggle Checked
export const updateCheckToggle = (req, res) => {
  const { id } = req.params;
  const { checked } = req.body;
  const q = "UPDATE todotask SET checked=? WHERE id=?";

  db.query(q, [checked, id], (err, result) => {
    if (err) return res.send(err);
    return res.send(result);
  });
};

//delete task
export const DeleteTask = (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM todotask WHERE id = ?";
  db.query(q, [id], (err, result) => {
    if (err) return send(err);
    return res.send({ message: "Task deleted successfully" });
  });
};
