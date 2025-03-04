import express from "express";
import {
  DeleteTask,
  FetchTask,
  InsertTask,
  updateCheckToggle,
  updateTodoTask,
  ViewspecificTaskDetail,
} from "../Controller/TodoAddEditViewUpdate_Controller.js";

const route = express.Router();

route.post("/insert", InsertTask);
route.get("/fetch", FetchTask);
route.get("/fetch/:id", ViewspecificTaskDetail);
route.patch("/update/:id", updateTodoTask);
route.patch("/updatecheck/:id", updateCheckToggle);
route.delete("/delete/:id", DeleteTask);

export default route;
