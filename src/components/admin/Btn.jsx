import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Btn = ({
  type = "primary",  
  icon: Icon,  
  text,
  href,
  onClick,
  className = "",
  subtype = 'button',
  isload = false,
}) => {
  const baseStyles = "px-4 py-2 rounded-lg flex items-center  gap-2 font-medium transition-all duration-300 cursor-pointer";
  const typeStyles = {
    primary: "bg-main text-white hover:bg-blue-700 ",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 text-gray-600 hover:bg-gray-100",
  };

  const classes = `${baseStyles} ${typeStyles[type] || ""} ${className}`;

  if (href) {
    return (
      <Link to={href} >
        {Icon && <Icon className="w-5 h-5 " /> || Icon } {text && <span>{text}</span>}
      </Link>
    );
  }

  return (
    <button disabled={isload}  type={subtype}  className={classes} onClick={onClick}>
    {isload ? <Loading color={type === 'primary' ? "text-gray-200/50" : 'text-main/50'} /> :  Icon && <Icon className="w-5 h-5" />} {text && <span>{text}</span> }
       
    </button>
  );
};

export default Btn;
