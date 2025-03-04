import React from "react";
import React, { createContext } from "react";

export const TodoContext = createContext();
const TodoContext = () => {

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
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <TodoContext.Provider value={addDataBtn}>
        {children}
    </TodoContext.Provider>
  )
};

export default TodoContext;
