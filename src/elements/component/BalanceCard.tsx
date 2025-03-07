import { createSelection, SelectionCreateType } from "@/libs/api/selectionApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useEffect } from "react";
import { Button } from "../atoms";
import { getQuestionKey } from "@/libs/api/questionApi";

const BalanceCard = ({
  data,
  callback,
}: {
  data: {
    point: number;
    questionId: string;
    title: string;
    choiceA: string;
    choiceB: string;
    choiceType: null | "A" | "B";
  };
  callback: (data: SelectionCreateType) => void;
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value as "A" | "B";

    callback({
      choiceType: value,
      questionId: data.questionId,
      rewardPoint: data.point,
    });
  };

  const getButtonClass = useCallback(
    (choice: string) => {
      const { choiceType = null } = data || {};

      if (!choiceType) {
        return "choice-button"; // 아무 것도 선택되지 않았을 때는 기본 클래스만
      } else if (choice === choiceType) {
        return "choice-button active"; // 선택된 버튼에는 active 클래스
      } else {
        return "choice-button disabled"; // 선택되지 않은 버튼에는 disabled 클래스
      }
    },
    [data]
  );
  return (
    <div className="content">
      <div className="title">{data.title}</div>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      <div className="choices">
        <Button
          value={"A"}
          className={getButtonClass("A")}
          onClick={handleClick}
          buttonNm={data.choiceA}
        />
        <Button
          value={"B"}
          className={getButtonClass("B")}
          onClick={handleClick}
          buttonNm={data.choiceB}
        />
      </div>
    </div>
  );
};

export default BalanceCard;
