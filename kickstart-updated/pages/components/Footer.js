import React from "react";
import { Menu } from "semantic-ui-react";

const Footer = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item>Footer</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Stuff</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Footer;