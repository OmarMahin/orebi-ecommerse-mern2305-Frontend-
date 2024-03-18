import React from "react";
import Flex from "./Flex";

const List = ({ children , className}) => {
  return (
    <ul>
      <Flex className={className}>{children}</Flex>
    </ul>
  );
};

export default List;
