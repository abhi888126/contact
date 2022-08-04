import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    width: "100%",
    border: "2px solid black",
  };
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center p-5">copyright & copy; ContactManager.com </p>{" "}
    </footer>
  );
};
