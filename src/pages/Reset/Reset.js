import React from "react";
import Lock from "../../components/Lock/Lock";
import Password from "../../components/password/Password";
import BTN from "../../components/button/BTN";
import { useNavigate } from "react-router-dom";

function Reset() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/code");
  };
  return (
    <div>
      <Lock passtext={"Enter your password"} />
      <div className="flex py-12 justify-center">
        <form>
          <Password label={"Password*"} placeholder={"Enter your password"} />
          <Password
            label={"Confirm Password*"}
            placeholder={"Enter your password"}
          />
        </form>
      </div>

      <div className="flex py-16 justify-center">
        <BTN btnName={"Reset"} func={routeChange} />
      </div>

      {/* modall starts */}
      <div className="set-modal2">
        <div className="flex justify-center set-modal ">
          <div className="h-32 w-56 rounded-xl border-2  border-solid modal-color">
            <div className="py-4">
              <h1 className="text-black flex font-bold justify-center">
                You have successfuly
              </h1>
              <h1 className="text-black font-bold flex justify-center">
                reset your password
              </h1>
            </div>
            <div className="flex justify-center">
              <div
                style={{ backgroundColor: "#B3B3B3" }}
                className="h-3 w-3 rounded-full mt-1 "
              ></div>
            </div>

            <button
              style={{ backgroundColor: "#f2385f" }}
              className="w-full h-7 rounded-xl rounded-t-none  text-white mt-0.5  "
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
