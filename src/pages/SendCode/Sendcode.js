import React from "react";
import InputField from "../../components/InputField/InputField";
import Lock from "../../components/Lock/Lock";
import BTN from "../../components/button/BTN";
import { useNavigate } from "react-router-dom";

function Sendcode() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="py-3">
        <div className="set-text">
          <Lock passtext={"Please enter your registered ID"} />
        </div>
      </div>
      <div className="flex  justify-center mt-1">
        <h2 className="text-base font-thin set-text">
          we will send a verification code to your email ID
        </h2>
      </div>
      <div className="flex py-16 justify-center">
        <form>
          <InputField
            placeholder={"Enter the email"}
            type={"text"}
            label={"Email"}
          />
        </form>
      </div>
      <div className="flex py-16 justify-center">
        <BTN btnName={"Sign in"} func={routeChange} />
      </div>
    </div>
  );
}

export default Sendcode;
