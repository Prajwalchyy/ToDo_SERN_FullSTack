import React, { createContext, useContext, useState } from "react";
import { myContext } from "./TodoUi";

const PopAdd = () => {
  const { pop, setPop, todoTasks, setTodoTask } = useContext(myContext);
  // const [taskValue, settaskValue] = useState({
  //   title: "",
  //   description: "",
  // });

  // const handleValue = (e) => {
  //   settaskValue({ ...taskValue, [e.target.name]: e.target.value });
  // };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   const newTask = {
  //     id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  //     ...taskValue,
  //   };
  //   setTodoTask([...todoTasks, newTask]);
  //   setPop(false);
  // };

  const data = { title: "", description: "" };
  const [task, settask] = useState(data);
  const handleValue = (e) => {
    settask({ ...task, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const newtask = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...task,
    };
    setTodoTask([...todoTasks, newtask]);
    setPop(false);
  };

  // const [taskid, setTaskid] = useState(null);
  // const viewFunhandle = (id) => {
  //   return setTaskid(todoTasks.find((task) => task.id === id));
  // };
  return (
    <div className="h-100 w-130 bg-yellow-100 absolute top-[25%] left-[35%] flex justify-center shadow-2xl">
      <div
        className="absolute top-2 right-2 text-xl font-bold cursor-pointer h-10 w-10 flex justify-center items-center hover:text-2xl"
        onClick={() => {
          setPop(false);
        }}
      >
        X
      </div>
      <div className="mt-10 m-5 px-10 w-full">
        <form
          action=""
          className="space-y-5 text-gray-700"
          onSubmit={handleAdd}
        >
          <div className="flex flex-col items-center gap-y-2">
            <label htmlFor="" className="uppercase text-xl">
              Title
            </label>
            {/* //logic to switch acording to condition */}
            {pop === "view" ? (
              <div className="px-2 py-0.5 h-10 w-full text-center outline-none border border-green-400 text-xl">
                this is title
              </div>
            ) : (
              <input
                type="text"
                name="title"
                id=""
                placeholder="Title"
                className="bg-white px-2 py-0.5 h-10 w-full text-center outline-none border border-green-400 text-xl"
                onChange={handleValue}
              />
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="">Description</label>
            {pop === "view" ? (
              <div className="w-full h-30 outline-none border border-green-400 p-2 px-4 text-md">
                Here is discription
              </div>
            ) : (
              <textarea
                className="w-full h-30 bg-white outline-none border border-green-400 p-2 px-4 text-md"
                placeholder="Enter your text here..."
                name="description"
                onChange={handleValue}
              ></textarea>
            )}
          </div>

          {pop === "view" ? (
            <></>
          ) : (
            <div className="flex justify-center  py-2">
              <button className="self-center text-2xl w-full h-10 bg-green-300 hover:bg-green-500 cursor-pointerp">
                Add
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopAdd;
