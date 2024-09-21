import React from "react";
import Flex from "./Flex";

const List = ({ children , className}) => {
  return (
    <ul className={`flex ${className}`}>
      {children}
    </ul>
  );
};

export default List;
