import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import routes from "../../routes/routeLists";
import { ROUTES } from "../../utils/constant";
import "./style.css";

const Header = () => {
  const [current, setCurrent] = useState(ROUTES.HOME.name);

  let items = routes.map((r) => {
    return { label: r.displayName, key: r.name };
  });

  const onNavigation = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="header-container">
      <div className="avatar-container">
        <img src="assets/avatar.jpeg" alt="" />
        <h2>Muhammad Haris Moin</h2>
      </div>
      <div className="menu-container">
        <Menu
          className="menu"
          onClick={onNavigation}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </div>
  );
};

export default Header;
