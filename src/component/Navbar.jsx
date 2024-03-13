import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";

const Navbar = () => {
  return (
    <Container>
      <div className="pt-8">
        <Flex>
          <Image src="images/logo.png" alt="logo"></Image>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Shop</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contacts</ListItem>
            <ListItem>Journel</ListItem>
          </List>
        </Flex>
      </div>
    </Container>
  );
};

export default Navbar;
