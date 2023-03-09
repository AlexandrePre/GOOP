import React from "react";

function ForgetPassword() {
  return (
    <div className="w-[100%] h-[100%] bg-green-100 flex flex-col items-center rounded-2xl">
      <p>forget</p>
      <form className="flex flex-col gap-6 justify-center h-full">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
