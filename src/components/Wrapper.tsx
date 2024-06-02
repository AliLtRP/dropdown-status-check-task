import React, { CSSProperties } from "react";

const Wrapper: React.FC<{
  children?: React.ReactNode;
  compStyle?: string;
  style?: CSSProperties;
  handleClick?: () => void;
}> = ({ children, compStyle, style, handleClick }) => {
  return (
    <div
      className={compStyle}
      style={{ ...style, transition: "background-image 0.3s ease-in-out" }}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Wrapper;
