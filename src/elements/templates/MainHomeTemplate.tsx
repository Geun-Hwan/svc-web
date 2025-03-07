import {
  getQuestionKey,
  getQuestionList,
  IQuestionResult,
} from "@/libs/api/questionApi";
import { createSelection, SelectionCreateType } from "@/libs/api/selectionApi";
import { getAccessToken } from "@/libs/utils/cookieUtil";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import BalanceCard from "../component/BalanceCard";

const MainHomeTemplate = () => {
  const qc = useQueryClient();

  const { data } = useQuery({
    queryKey: getQuestionKey(),
    queryFn: () => getQuestionList(),
    enabled: !!getAccessToken(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (params: SelectionCreateType) => createSelection(params),
    onSuccess: (data, variables, context) => {
      qc.setQueryData(getQuestionKey(), (oldData: Array<IQuestionResult>) => {
        if (oldData) {
          return oldData.map((item) => {
            return item.questionId === variables.questionId
              ? changeData(item, variables)
              : item;
          });
        }
        return oldData;
      });
    },
    onError: () => {},
  });

  const changeData = (oldData: IQuestionResult, param: SelectionCreateType) => {
    return {
      ...oldData,

      choiceType: param.choiceType,
      selectA: oldData.selectA + (param.choiceType === "A" ? 1 : 0),
      selectB: oldData.selectB + (param.choiceType === "B" ? 1 : 0),
    };
  };

  const callback = (data: SelectionCreateType) => {
    if (isPending) {
      return;
    }

    mutate(data);
  };

  return (
    <div className="card-container">
      {data?.map((item) => (
        <BalanceCard data={item} key={item.questionId} callback={callback} />
      ))}
    </div>
  );
};

export default MainHomeTemplate;
