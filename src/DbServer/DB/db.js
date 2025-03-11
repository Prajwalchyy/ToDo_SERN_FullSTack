import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "todo_db",
});
db.connect((err) => {
  if (err) {
    return console.log(err, "Error not connected");
  } else {
    console.log("Db connected successfully");
  }
});

export default db;
