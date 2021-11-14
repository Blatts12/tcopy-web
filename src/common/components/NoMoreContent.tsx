import React from "react";
import { BiSad } from "react-icons/bi";

const NoMoreContent: React.FC = () => {
  return (
    <div className="nomorecontent">
      <BiSad />
      <span>The End</span>
    </div>
  );
};

export default NoMoreContent;
