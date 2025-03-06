import React from 'react';
import { LuLoaderCircle } from "react-icons/lu";

function Loading({ color = "text-main", size = "text-2xl", className = "" ,main}) {
  return (
   <div className={main}>
     <LuLoaderCircle className={`animate-spin ${size} ${color} ${className}`} />
   </div>
  );
}

export default Loading;
