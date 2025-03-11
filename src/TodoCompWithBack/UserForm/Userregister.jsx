import React from "react";

const Userregister = () => {
  return (
    <div className=" bg-gray-50 h-[100vh] flex justify-center items-center">
      <div className="bg-white shadow-2xl">
        <div>
          UserName:
          <input type="text" name="" id="" />
        </div>
        <div>
          Password:
          <input type="password" name="" id="" />
        </div>
        <div className="bg-green-300 cursor-pointer">Register</div>
      </div>
    </div>
  );
};

export default Userregister;
