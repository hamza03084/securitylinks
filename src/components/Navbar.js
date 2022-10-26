import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="h-10 w-10 sm:w-full border-2px flex justify-center py-3">
        <Link to={"/"} className="ml-28 font-bold">
          {" "}
          Sign up
        </Link>
        <Link to={"/verify"} className="ml-4 sm:ml-28 font-bold">
          {" "}
          Verify
        </Link>
        <Link to={"/reset"} className="ml-4 sm:ml-28 font-bold">
          Reset
        </Link>
        <Link to={"/code"} className="ml-4 sm:ml-28 font-bold">
          {" "}
          Send code
        </Link>
        <Link to={"/signin"} className="ml-4 sm:ml-28 font-bold">
          {" "}
          sign in
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
