import React from "react";

const Button = ({
  buttonNm,
  onClick,
}: {
  buttonNm: string;
  onClick: (data: any) => any;
}) => {
  return <button onClick={onClick}>{buttonNm}</button>;
};

export default Button;
