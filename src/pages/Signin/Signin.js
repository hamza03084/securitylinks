import React, { useEffect, useRef } from "react";
import BTN from "../../components/button/BTN";
import Icons from "../../components/icon/Icons";
import InputField from "../../components/InputField/InputField";
import Password from "../../components/password/Password";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/verify");
  };

  //   useEffect(() => {
  //     ref.current.focus();
  //   }, []);
  return (
    <div>
      <h1 className="text-4xl flex justify-center py-7 font-bold">
        Security Links
      </h1>
      <div className="flex justify-center ">
        <form>
          <InputField
            label={"Email*"}
            type={"text"}
            placeholder="example@domain.com"
          />
          <Password label={"Password*"} placeholder={"Enter the Password"} />{" "}
          <BTN
            func={routeChange}
            style={"w-96 h-10 mt-10 rounded-lg set-BTN1 text-white "}
            btnName={"Sign in"}
          />
          <div
            // style={{ marginLeft: 740 }}
            className="ml-40 sm:ml-64"
          >
            <a href="/">Forgot Password ?</a>
          </div>
        </form>
      </div>

      <a className="justify-center mt-1 flex" href="">
        or continue with
      </a>
      <Icons style={"flex  justify-center mt-10"} />
      <h4 className="flex justify-center py-8">
        Already have an account?
        <a className="font-bold" href="">
          Sign Up
        </a>
      </h4>
    </div>
  );
};

export default Signin;
