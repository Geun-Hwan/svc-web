import { instance } from "../api";

const PRE_FIX = "/auth";

export type LoginRequestType = {
  loginIdOrEmail: string;
  password: string;
};

export interface ILoginResult {
  userId: string;
  email: string;
  loginId: string;
  nickNm: string;
  accessToken: string;
}

export const login = async (param: LoginRequestType): Promise<ILoginResult> => {
  return instance
    .post<ILoginResult>(PRE_FIX + `/login`, param, { withCredentials: true })
    .then((res) => res.data.data);
};

export const logout = async (): Promise<boolean> => {
  return instance
    .post<boolean>(PRE_FIX + `/logout`, {}, { withCredentials: true })
    .then((res) => res.data.data);
};

export const republish = async (): Promise<string> => {
  return instance
    .post<string>(PRE_FIX + `/republish`, {}, { withCredentials: true })
    .then((res) => res.data.data);
};
