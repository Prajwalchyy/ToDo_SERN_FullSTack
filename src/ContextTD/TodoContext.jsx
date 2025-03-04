import React, { createContext, useContext } from "react";

const createTodoContext = createContext();

const TodoProvider = ({ children }) => {

  return (
    <createTodoContext.Provider value={{ todoTasks }}>
      {children}
    </createTodoContext.Provider>
  );
};

const TodoContext = () => {
  return useContext(createTodoContext);
};

export default TodoContext;
