import React from "react";
import Lock from "../../components/Lock/Lock";
import BTN from "../../components/button/BTN";
import { useNavigate } from "react-router-dom";

function Verify() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/reset");
  };

  return (
    <div>
      <div>
        <Lock passtext={"Enter the verification code sent to your email"} />
      </div>
      <div className="flex justify-center py-20  ">
        <form>
          <input
            type="text"
            maxLength={1}
            className="w-14 h-14 border ml-3 pl-6 rounded-lg"
          />
          <input
            type="text"
            maxLength={1}
            className="w-14 h-14 border ml-3 pl-6 rounded-lg"
          />
          <input
            type="text"
            maxLength={1}
            className="w-14 h-14 border ml-3 pl-6 rounded-lg"
          />
          <input
            type="text"
            maxLength={1}
            className="w-14 h-14 border ml-3 pl-6 rounded-lg"
          />
          <a href="">
            <h4 className="ml-44 font-light">Resend Code</h4>
          </a>
        </form>
      </div>
      <div className="flex  justify-center py-20">
        <BTN btnName={"Verify"} func={routeChange} />
      </div>
    </div>
  );
}

export default Verify;
