import React, { CSSProperties } from "react";

const Button = ({
  buttonNm,
  onClick,
  className,
  style,
  value,
}: {
  buttonNm: string;
  onClick: (data: any) => any;
  className?: string;
  style?: CSSProperties;
  value?: string | number;
}) => {
  return (
    <button style={style} className={className} onClick={onClick} value={value}>
      {buttonNm}
    </button>
  );
};

export default Button;
