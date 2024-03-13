import React from "react";
import Flex from "./Flex";

const List = ({ children }) => {
  return (
    <ul>
      <Flex>{children}</Flex>
    </ul>
  );
};

export default List;
