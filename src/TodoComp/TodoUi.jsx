import React, { createContext, useState } from "react";
import PopAdd from "./PopAdd";

export const myContext = createContext();

const TodoUi = () => {
  const [pop, setPop] = useState(null);

  const [todoTasks, setTodoTask] = useState([
    {
      id: "1",
      title: "hello",
      description: "world",
    },
  ]);
  const addtaskbtn = () => {
    setPop(true);
  };

  const handleDelete = (id) => {
    const deletetask = todoTasks.filter((task) => task.id !== id);
    setTodoTask(deletetask);
  };

  // for check logic
  const [checked, setchecked] = useState({});
  const lineThroughCheck = (id) => {
    setchecked((prev) => ({ ...prev, [id]: !prev[id] }));
    // let id 3 is passed here   const lineThroughCheck = (3) => {
    // setchecked((prev=3 only) => ({ ...prev=3 only, [3 true]: !prev[id=false] }));
    // now let id 1,2 is passed here const lineThrough=(1 or 2 one at a time)
    //setchecked((prev=1,2,3 only) => ({ ...prev=1,2,3 only, [id true]: !prev[id=false] }));
  };

  return (
    <myContext.Provider value={{ pop, setPop, todoTasks, setTodoTask }}>
      <div className=" relative  min-h-[100vh] bg-gray-200 overflow-hidden ">
        <div className="shadow-2xl m-5 mx-10 bg-red-50 flex flex-col h-full">
          <div>
            <div className="flex justify-center text-3xl my-4">
              <h1>ToDoList</h1>
            </div>
            <div className="flex justify-between">
              <div className="w-[40%]">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                  className="bg-white rounded-xl px-7 py-2  pr-10 my-4 w-full ml-[60%] "
                />
              </div>
              <div className="mr-[20%]">
                <button
                  className="m-4 bg-blue-200 px-6 py-2 rounded-xl hover:bg-blue-300 hover:cursor-pointer"
                  onClick={() => {
                    setPop("addTask");
                  }}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-10 pb-5">
            <div className=" w-[90%] space-y-2">
              {todoTasks.map((info, i) => (
                <div
                  key={i}
                  className="flex justify-between px-10 py-2 border border-green-300 rounded-2xl bg-blue-50 hover:shadow-2xl hover:bg-blue-100"
                >
                  <div className="flex gap-40">
                    <div>
                      <input
                        type="checkbox"
                        checked={checked[info.id]}
                        onChange={() => lineThroughCheck(info.id)}
                      />
                    </div>
                    <div>{i + 1}</div>
                    <div
                      className={`text-2xl ${
                        checked[info.id] ? "line-through" : ""
                      }`}
                    >
                      {info.title}
                    </div>
                  </div>
                  <div className="flex gap-5 text-white">
                    <div
                      className="bg-blue-500 rounded-xl w-20 h-10 cursor-pointer hover:bg-blue-800 flex justify-center items-center"
                      onClick={() => {
                        setPop("edit");
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="bg-green-500 rounded-xl w-20 h-10 cursor-pointer hover:bg-green-800 flex justify-center items-center
                      "
                      onClick={() => {
                        setPop("view");
                      }}
                    >
                      View
                    </div>
                    <div
                      className="bg-red-500 rounded-xl w-20 h-10 cursor-pointer hover:bg-red-800 flex justify-center items-center"
                      onClick={() => handleDelete(info.id)}
                    >
                      delete
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {pop === "edit" && <PopAdd />}
        {pop === "view" && <PopAdd />}
        {pop === "addTask" && <PopAdd />}

        <div></div>
      </div>
    </myContext.Provider>
  );
};

export default TodoUi;
