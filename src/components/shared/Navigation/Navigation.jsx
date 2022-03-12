import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const logoStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };
  const spanStyle = {
    marginLeft: "5px",
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={logoStyle} to="/">
        <img src="/images/hashtag.png" alt="logo" />
        <span style={spanStyle}>CodersHouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
