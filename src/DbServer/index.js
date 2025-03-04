import { configDotenv } from "dotenv";
import express from "express";
import route from "./Router/TodoRoute.js";
import cors from "cors";

const app = express();

configDotenv();

const port = process.env.PORT;
app.use(cors());
app.use(express.json());

//route of todo
app.use("/", route);

app.listen(port, () => {
  console.log(`Server is started at port ${port}`);
});
