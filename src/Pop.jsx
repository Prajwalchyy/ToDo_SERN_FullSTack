import React from "react";
import { useState } from "react";

const Pop = () => {
  const [float, setFloat] = useState(false);

  const Show = () => {
    setFloat(true);
  };
  return (
    <div className="h-[100vh] bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-20 h-10 mt-10 cursor-pointer bg-red-600 hover:bg-red-900 rounded-2xl flex items-center justify-center">
        <button onClick={Show}>Open</button>
      </div>

      <div className="flex justify-center items-center w-70 h-70 bg-amber-200 mt-[5%] transform duration-1000">
        <button className="w-20 h-10 rounded-sm bg-blue-400">Close</button>
      </div>
    </div>
  );
};

export default Pop;
