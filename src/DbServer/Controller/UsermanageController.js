import db from "../DB/db.js";

export const UserRegister = (req, res) => {
  const { username, password } = req.body;

  const q = "INSERT INTO usertable (uname,upassword) VALUES (?,?)";

  db.query(q, [username, password], (err, result) => {
    if (err) return res.send(err);
    return res.send(result);
  });
};
