import React, { useState } from "react";
import Lock from "../../components/Lock/Lock";
import Password from "../../components/password/Password";
import BTN from "../../components/button/BTN";
import { useNavigate } from "react-router-dom";

function Reset() {
  const [modal, setmodal] = useState(false);
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/code");
  };

  // const showMoadal = () => {};
  return (
    <div>
      <div className={`relative ${modal && "opacity-30"}`}>
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
          <BTN btnName={"Reset"} func={() => setmodal(true)} />
        </div>
      </div>

      {/* modall */}

      <div className="  absolute  left-1/4  mt-13 top-1/3 sm:left-1/3 sm:ml-24 sm:top-1/2 sm:mb-12   ">
        {modal && (
          <div className="flex justify-center  bg-slate-50   ">
            <div className="h-32 w-full sm:w-56 rounded-xl border-2  border-red-600 ">
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
                onClick={() => {
                  setmodal(false);
                }}
                className="w-full h-7 rounded-xl rounded-t-none  text-white mt-0.5  "
              >
                close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reset;
