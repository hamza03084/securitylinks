import React from "react";
import BTN from "../../components/button/BTN";
import Icons from "../../components/icon/Icons";
import InputField from "../../components/InputField/InputField";
import Password from "../../components/password/Password";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/signin");
  };
  return (
    <div>
      <h1 className="text-4xl flex justify-center set-text5 py-1.5 font-extrabold">
        Security Links
      </h1>
      <div className="flex justify-center set-Signup">
        <form>
          <InputField
            label={"Full Name*"}
            type={"text"}
            placeholder="Enter the Name"
          />
          <InputField
            label={"Name*"}
            type={"text"}
            placeholder="Enter the Name"
          />
          <Password label={"Password*"} placeholder={"Enter the Password"} />
          <Password
            label={"Confirm Password*"}
            placeholder={"Enter the Password"}
          />
          <div className="flex justify-center set-checkbox">
            <input type="checkbox" />
            <h6 className="text-xs py-2">
              By checking you are agree to our{" "}
              <a className="font-bold" href="">
                Terms and condition
              </a>
            </h6>
          </div>
          <BTN btnName={"Sign Up"} func={routeChange} />
        </form>
      </div>
      <a className="font flex justify-center" href="">
        or continue with
      </a>
      <Icons style="flex  justify-center py-3" />
      <h4 className="flex justify-center py-1">
        Already have an account?
        <a className="font-bold" href="">
          Sign Up
        </a>
      </h4>
    </div>
  );
};

export default Signup;
