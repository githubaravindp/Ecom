import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  const Navigate = useNavigate();
  const items = [
    {
      children: [
        { label: "home", key: "home" },
        { label: "products", key: "products" },
        { label: "about", key: "about" },
        { label: "first", key: "first" },
        { label: "second", key: "second" },
      ],
      key: "react",
      label: "react",
    },
  ];

  const onClick = (e) => {
    console.log("clicked");
    if (e.key == "home") Navigate("/");
    else if (e.key == "products") Navigate("/products");
    else if (e.key == "first") Navigate("/first");
    else if (e.key == "second") Navigate("/second");
  };
  return (
    <div className="navbar">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
