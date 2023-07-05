import React from "react";
import { Menu } from "antd";

import routes from "../../routes/routeLists";
import { Link } from "react-router-dom";
import "./style.css";
import { REUME_URL } from "../../utils/constant";

const Header = (ref) => {
  let items = routes.map((r) => {
    return { label: r.displayName, key: r.name };
  });

  return (
    <div className="header-container">
      <div className="avatar-container">
        {/* <img src="assets/avatar.jpeg" alt="" /> */}
        <h2>Muhammad Haris Moin</h2>
      </div>
      <div className="menu-container">
        <Menu className="menu" mode="horizontal" defaultSelectedKeys={["home"]}>
          {items.map((item) => {
            if (item.key !== "resume") {
              return (
                <Menu.Item key={item.key}>
                  <a href={"#" + item.key}>{item.label}</a>
                </Menu.Item>
              );
            } else {
              return (
                <Menu.Item key={item.key}>
                  <span>{item.label}</span>
                  <Link
                    rel="noreferrer noopener"
                    target="_blank"
                    to={REUME_URL}
                  />
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
