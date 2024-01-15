import React from "react";

interface PageProps {
  children: JSX.Element[] | JSX.Element;
}

const LoginContainer = (props: PageProps) => {
  return <div className={""}>{props.children}</div>;
};

export default LoginContainer;
