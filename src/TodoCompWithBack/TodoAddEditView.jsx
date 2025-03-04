import React, { createContext, useContext, useEffect, useState } from "react";
import TodoHome, { TodoContext } from "./TodoHome";
import axios from "axios";
import { toast } from "react-toastify";

export const TodoCRUDContext = createContext();

const TodoAddEditView = () => {
  const {
    pop,
    setPop,
    Taskid,
    taskValueHandle,
    addDataBtn,
    taskView,
    FetchSelectedTask,
    UpdateDataBtn,
    insertTask,
  } = useContext(TodoContext);

  // // insert data codes
  // const insertData = {
  //   title: "",
  //   description: "",
  // };
  // const [insertTask, setInsertTask] = useState(insertData);
  // const taskValueHandle = (e) => {
  //   setInsertTask({
  //     ...insertTask,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // // addbutton function
  // const addDataBtn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let result = await axios.post("http://localhost:0600/insert", insertTask);
  //     if (result.data.status === 0) {
  //       return toast.error(result.data.message);
  //     }
  //     setPop(false);
  //     toast.success(result.data.message);
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };

  // //specific task Fetch
  // const [taskView, setTaskView] = useState({});
  // const FetchSelectedTask = async () => {
  //   try {
  //     let result = await axios.get(`http://localhost:0600/fetch/${Taskid}`);
  //     // console.log(result);
  //     setTaskView(result.data);
  //     setInsertTask(result.data);
  //   } catch (error) {
  //     toast.error(error.response.data);
  //   }
  // };

  // console.log(taskView, "taskview");
  // console.log(insertTask, "1");

  //edit update
  // const UpdateDataBtn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let result = await axios.patch(
  //       `http://localhost:0600/update/${Taskid}`,
  //       insertTask
  //     );
  //     // console.log(insertTask, "2");
  //     console.log(result, "2");
  //     setPop(false);
  //     toast.success(result.data.message);
  //   } catch (error) {
  //     toast.error("update unsucessfull");
  //   }
  // };

  useEffect(() => {
    FetchSelectedTask();
  }, [Taskid]);
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-transparent backdrop-blur-sm flex justify-center items-center">
      <div className="h-100 w-130 bg-yellow-100 absolute flex justify-center shadow-2xl">
        <div
          className="absolute top-2 right-2 text-xl font-bold cursor-pointer h-10 w-10 flex justify-center items-center hover:text-2xl"
          onClick={() => {
            setPop(false);
          }}
        >
          X
        </div>
        <div className="mt-10 m-5 px-10 w-full">
          {/* form */}
          <form
            onSubmit={
              pop === "addTask"
                ? addDataBtn
                : pop === "edit"
                ? UpdateDataBtn
                : null
            }
            className="space-y-5 text-gray-700"
          >
            {/* title input */}
            <div className="flex flex-col items-center gap-y-2">
              <label htmlFor="" className="uppercase text-xl">
                Title
              </label>
              {/* //logic to switch acording to condition */}
              {pop === "view" ? (
                <div className="px-2 py-0.5 h-10 w-full text-center outline-none border border-green-400 text-xl">
                  {taskView.title}
                </div>
              ) : pop === "addTask" ? (
                <input
                  type="text"
                  name="title"
                  id=""
                  placeholder="Title"
                  className="bg-white px-2 py-0.5 h-10 w-full text-center outline-none border border-green-400 text-xl"
                  onChange={taskValueHandle}
                />
              ) : (
                //update
                <input
                  type="text"
                  name="title"
                  id=""
                  placeholder=""
                  className="bg-white px-2 py-0.5 h-10 w-full text-center outline-none border border-green-400 text-xl"
                  onChange={taskValueHandle}
                  value={insertTask.title}
                />
              )}
            </div>

            {/* textarea input */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="">Description</label>
              {pop === "view" ? (
                <div className="w-full h-30 outline-none border border-green-400 p-2 px-4 text-md">
                  {taskView.description}
                </div>
              ) : pop === "addTask" ? (
                <textarea
                  className="w-full h-30 bg-white outline-none border border-green-400 p-2 px-4 text-md"
                  placeholder="Enter your text here..."
                  name="description"
                  onChange={taskValueHandle}
                ></textarea>
              ) : (
                //update
                <textarea
                  className="w-full h-30 bg-white outline-none border border-green-400 p-2 px-4 text-md"
                  placeholder="Enter your text here..."
                  name="description"
                  onChange={taskValueHandle}
                  value={insertTask.description}
                  // value="ggg"
                ></textarea>
              )}
            </div>

            {pop === "view" ? (
              <></>
            ) : (
              <div className="flex justify-center  py-2">
                <button className="self-center text-2xl w-full h-10 bg-green-300 hover:bg-green-500 cursor-pointerp">
                  {pop === "edit" ? "Update" : "Add"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoAddEditView;
