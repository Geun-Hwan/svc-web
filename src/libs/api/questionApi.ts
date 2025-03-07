import { instance } from "../api";

type QuestionRequestType = {};

export interface IQuestionResult {
  questionId: string;
  title: string; //제목
  userId: string;
  choiceA: string; //선택지
  choiceB: string; //선택지
  point: number; //참여시 지급 포인트

  strDate: any; //시작시간
  endDate: any; //종료시간
  questionStatusCd: string; // 선택지상태

  choiceType: "A" | "B" | null; // 내 선택

  selectA: number; // A 총 선택인원
  selectB: number; // B 총 선택인원
}

export const getQuestionKey = (params: QuestionRequestType = {}) => {
  return Object.keys(params).length > 0 ? ["question", params] : ["question"];
};
export const getQuestionList = async (
  param: QuestionRequestType = {}
): Promise<Array<IQuestionResult>> => {
  return instance
    .get<Array<IQuestionResult>>(`/question`, param)
    .then((res) => res.data.data);
};
