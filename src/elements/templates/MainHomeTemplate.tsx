import React from "react";
import { Button } from "@atm";

const MainHomeTemplate = () => {
  return (
    <div>
      으아아아 으아아ㅏ 으아아악
      <Button
        onClick={() => {
          window.location.href = "/test/1";
        }}
        buttonNm="Test 이동"
      />
    </div>
  );
};

export default MainHomeTemplate;
