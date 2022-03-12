import React from "react";
import { Link , useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/shared/Button/ButtonPrimary";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const linkStyle = {
    color: "#0077FF",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const history = useNavigate();
  function startRegisteration() {
    history('/register')

  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CodersHouse!!!" icon="hashtag">
        <p className={styles.texts}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :)  
        </p>
        <div>
          <ButtonPrimary
            onclick={() => {
              startRegisteration();
            }}
            text="Get Your Username"
          />
        </div>
        <div className={styles.signIntext}>
          <span className={styles.invite}>Have an invite text</span>
          <Link style={linkStyle} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
