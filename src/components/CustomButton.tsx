import React from "react";

const CustomButton: React.FC<{
  children: React.ReactNode;
  title: string;
  className: string;
}> = ({ className, title, children }) => {
  return (
    <div className={className}>
      <p>{title}</p>
      <div className="">{children}</div>
    </div>
  );
};

export default CustomButton;
