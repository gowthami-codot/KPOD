import React from "react";

export const Button = ({ className,onClick, children, secondary }) => {
  const classes = `px-4 py-2 w-[120px] flex items-center justify-center  h-[56px] gap-3 sm:rounded 
  ${className?className:"w-[155px] sm:w-[169px]"} ${
    secondary ? "text-black bg-white sm:border" : "text-white bg-black"
  }`;
  return <button onClick={onClick} className={classes} >{children}</button>;
};
