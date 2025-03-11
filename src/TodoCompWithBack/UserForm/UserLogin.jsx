import React from "react";

const UserLogin = () => {
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
        <div className="bg-green-300 cursor-pointer">Login</div>
        <br />

        <div className="bg-green-300 cursor-pointer">click to register</div>
      </div>
    </div>
  );
};

export default UserLogin;
