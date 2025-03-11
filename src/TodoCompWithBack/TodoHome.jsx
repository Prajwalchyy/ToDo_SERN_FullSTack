import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import TodoAddEditView from "./TodoAddEditView";

export const TodoContext = createContext();

const TodoHome = () => {
  const [pop, setPop] = useState(null);
  const [Taskid, setTaskid] = useState(null);
  const [trigger, setTrigger] = useState(false);

  // insert data codes
  const insertData = {
    title: "",
    description: "",
  };
  const [insertTask, setInsertTask] = useState(insertData);
  const taskValueHandle = (e) => {
    setInsertTask({
      ...insertTask,
      [e.target.name]: e.target.value,
    });
  };

  // addbutton function
  const addDataBtn = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post("http://localhost:0600/insert", insertTask);
      if (result.data.status === 0) {
        return toast.error(result.data.message);
      }
      setPop(false);
      toast.success(result.data.message);
      setTrigger((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //specific task Fetch
  const [taskView, setTaskView] = useState({});
  const FetchSelectedTask = async () => {
    try {
      let result = await axios.get(`http://localhost:0600/fetch/${Taskid}`);
      // console.log(result);
      setTaskView(result.data);
      setInsertTask(result.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  //edit update
  const UpdateDataBtn = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.patch(
        `http://localhost:0600/update/${Taskid}`,
        insertTask
      );
      // console.log(insertTask, "2");
      console.log(result, "2");
      setPop(false);
      toast.success(result.data.message);
      setTrigger((prev) => !prev);
    } catch (error) {
      toast.error("update unsucessfull");
    }
  };

  //read all data
  const [todoTasks, setTodoTask] = useState([]);
  const GetTasks = async () => {
    try {
      let result = await axios.get("http://localhost:0600/fetch");
      // console.log(result);
      setTodoTask(result.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  //check update Logic
  const Togglecheck = async (id, checkupdate) => {
    // console.log(id, "check");
    try {
      let result = await axios.patch(
        `http://localhost:0600/updatecheck/${id}`,
        {
          checked: !checkupdate,
        }
      );
      GetTasks();
    } catch (error) {
      toast.error("errror");
    }
  };

  //delete
  const DeleteBtn = async (id) => {
    try {
      let result = await axios.delete(`http://localhost:0600/delete/${id}`);
      console.log(result);
      toast.success(result.data.message);
      GetTasks();
    } catch (error) {
      toast.error("errror");
    }
  };

  //search handle Logic

  const [searchDropDown, setsearchDropDown] = useState(false);
  const [searchData, setSearchData] = useState("");
  const searchLogicHandle = (e) => {
    const value = e.target.value;
    setSearchData(value);
    if (value === "") {
      setsearchDropDown(false);
    } else {
      setsearchDropDown(true);
    }
  };

  //useEffect rendering

  useEffect(() => {
    GetTasks();
  }, [trigger]);

  return (
    <TodoContext.Provider
      value={{
        pop,
        setPop,
        Taskid,
        taskValueHandle,
        addDataBtn,
        taskView,
        FetchSelectedTask,
        UpdateDataBtn,
        insertTask,
      }}
    >
      <div className="min-h-[100vh] bg-gray-200 overflow-hidden">
        <div className="shadow-2xl m-5 mx-10 bg-red-50 flex flex-col h-full">
          <div>
            <div className="flex justify-center text-3xl my-4">
              <h1>ToDoList</h1>
            </div>
            <div className="flex justify-between">
              <div className="w-[40%] relative">
                <div>
                  {/* search input */}
                  <input
                    type="text"
                    name=""
                    id=""
                    value={searchData}
                    onChange={searchLogicHandle}
                    placeholder="Search"
                    className="bg-white rounded-xl px-7 py-2  pr-10 my-4 mb-0 w-full ml-[60%] "
                  />
                </div>

                {/* search Dropdown */}
                {searchDropDown ? (
                  <div className="ml-[60%] bg-purple-200 w-full h-60 flex flex-col absolute">
                    {todoTasks.map((info) => (
                      <div className="bg-white border">{info.title}</div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="mr-[20%]">
                <button className="m-4 bg-gray-300 px-6 py-2 rounded-xl hover:bg-gray-400 hover:cursor-pointer">
                  Search
                </button>
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
                        checked={info.checked}
                        onChange={() => Togglecheck(info.id, info.checked)}
                      />
                    </div>
                    <div>{i + 1}</div>
                    <div className={info.checked ? "line-through" : ""}>
                      {info.title}
                    </div>
                  </div>
                  <div className="flex gap-5 text-white">
                    <div
                      className="bg-blue-500 rounded-xl w-20 h-10 cursor-pointer hover:bg-blue-800 flex justify-center items-center"
                      onClick={() => {
                        setTaskid(info.id);
                        setPop("edit");
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="bg-green-500 rounded-xl w-20 h-10 cursor-pointer hover:bg-green-800 flex justify-center items-center
                      "
                      onClick={() => {
                        setTaskid(info.id);
                        setPop("view");
                      }}
                    >
                      View
                    </div>
                    <div
                      onClick={() => DeleteBtn(info.id)}
                      className="bg-red-500 rounded-xl w-20 h-10 cursor-pointer hover:bg-red-800 flex justify-center items-center"
                    >
                      delete
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {pop === "edit" && <TodoAddEditView />}
        {pop === "view" && <TodoAddEditView />}
        {pop === "addTask" && <TodoAddEditView />}
      </div>
    </TodoContext.Provider>
  );
};

export default TodoHome;
