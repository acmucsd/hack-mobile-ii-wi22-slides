import React from "react";
import titlebg_dark from "../images/titlebg_dark.png";

const Title = ({ darkMode, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${titlebg_dark})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: "10%",
        color: "black",
        zIndex: 10,
      }}
    >
      {children}
      <style jsx>{`
        h1 {
          color: #f9a857;
        }
      `}</style>
    </div>
  );
};

export default Title;
