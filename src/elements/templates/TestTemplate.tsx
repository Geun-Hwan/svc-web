import React from "react";
import { Button } from "@atm";
const TestTemplate = () => {
  return (
    <div>
      테스트트트ㅡ틑
      <Button
        onClick={() => {
          window.location.href = "/test/2";
        }}
        buttonNm="다음페이지 이동"
      />
    </div>
  );
};

export default TestTemplate;
