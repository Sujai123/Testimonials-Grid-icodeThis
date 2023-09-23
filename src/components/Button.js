import React from "react";

const Button = ({ children, icon }) => {
  return (
    <button>
      <p>{children}</p>
      {icon}
    </button>
  );
};

export default Button;
