import React from "react";

const HelloWorld = () => {
  return React.createElement(
    "div",
    { className: "helloClass" },
    React.createElement("h1", null, "Hello World"),
  );

};

export default HelloWorld;
