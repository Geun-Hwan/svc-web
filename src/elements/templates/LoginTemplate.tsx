import { login, LoginRequestType, logout } from "@/libs/api/authApi";
import { verifyMailSend } from "@/libs/api/mailApi";
import { removeCookie, setAccessToken } from "@/libs/utils/cookieUtil";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms";
import { ACCEES_TOKEN } from "@/libs/utils/serivceConstants";

const LoginTemplate = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<LoginRequestType>({
    loginIdOrEmail: "",
    password: "",
  });

  const { mutate: loginMutate } = useMutation({
    mutationFn: (params: LoginRequestType) => login(params),
    onSuccess: (data, variables, context) => {
      const { accessToken } = data;
      setAccessToken(accessToken);
      navigate("/");
    },
    onError: () => {},
  });

  const { mutate: logoutMutate } = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data, variables, context) => {
      removeCookie(ACCEES_TOKEN);
      navigate("/");
    },
    onError: () => {},
  });

  const { mutate: verifyMailMutate } = useMutation({
    mutationFn: (params: { email: string }) => verifyMailSend(params),
    onSuccess: (data, variables, context) => {},
    onError: () => {},
  });
  return (
    <>
      <Button
        buttonNm={"로그인"}
        onClick={() => {
          loginMutate({ loginIdOrEmail: "admin", password: "rmsghks1026" });
        }}
      />
      <Button
        buttonNm={"로그아웃"}
        onClick={() => {
          logoutMutate();
        }}
      />
      {/* <Button
        buttonNm={"메일"}
        onClick={() => {
          verifyMailMutate({ email: "" });
        }}
      /> */}

      <Button
        buttonNm={"가입고고"}
        onClick={() => {
          verifyMailMutate({ email: "rmsghks1026@gmail.com" });
        }}
      />
    </>
  );
};

export default LoginTemplate;
