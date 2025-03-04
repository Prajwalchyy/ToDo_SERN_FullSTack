import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoUi from "./TodoComp/TodoUi";
import Pop from "./Pop";
import TodoHome from "./TodoCompWithBack/TodoHome";
import { TodoCRUDContext } from "./TodoCompWithBack/TodoAddEditView";
import SearchDropDOwn from "./TEST/SearchDropDOwn";

function App() {
  const PopUpUi = () => {
    return <></>;
  };

  return (
    <>
      {/* <TodoUi /> */}

      <TodoHome />
      <SearchDropDOwn/>

      {/* <Pop /> */}
    </>
  );
}

export default App;
