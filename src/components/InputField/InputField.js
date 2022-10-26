import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <>
      <div className="p-3 font-bold set-label mb-.5">
        <label>{label}</label>
      </div>

      <input
        placeholder={placeholder}
        className="w-72 sm:w-96 h-10 border color pl-4 rounded-lg "
        type={type}
      />
    </>
  );
};

export default InputField;
