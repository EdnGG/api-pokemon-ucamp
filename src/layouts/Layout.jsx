import React from "react";
// import List from "../components/List";
import Data from "../components/Data";

const Layout = () => {
  return (
    <div className="App">
      <h1>Este es el Layout </h1>
      <div className="layout__container">
        {
          // <List />
          <Data />
        }
      </div>
    </div>
  );
};

export default Layout;
