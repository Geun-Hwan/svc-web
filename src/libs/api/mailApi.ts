import { instance } from "../api";

const PRE_FIX = "/mail";
export const verifyMailSend = async (param: {
  email: string;
}): Promise<any> => {
  return instance
    .post<any>(PRE_FIX + `/send/verify`, param)
    .then((res) => res.data.data);
};
