import React from "react";
import { Button } from "@atm";

const TestTemplate2 = () => {
  return (
    <div>
      안녕안녕 안녕안녕
      <Button
        onClick={() => {
          window.location.href = "/";
        }}
        buttonNm="메인 이동"
      />
    </div>
  );
};

export default TestTemplate2;
