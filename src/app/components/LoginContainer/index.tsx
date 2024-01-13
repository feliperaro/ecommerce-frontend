import React from "react";
import styles from "./styles/login.module.scss";

interface PageProps {
  children: JSX.Element[] | JSX.Element;
}

const LoginContainer = (props: PageProps) => {
  return <div className={styles.loginContainer}>{props.children}</div>;
};

export default LoginContainer;
