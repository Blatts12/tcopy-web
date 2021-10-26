import React, { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "../../common/components/input/Button";
import { InputText } from "../../common/components/input/Input";
import { useAppDispatch } from "../../common/hooks/storeHooks";
import { login } from "./authActions";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const LoginInput = styled(InputText)`
  width: 100%;
  min-width: 180px;
`;

const LoginButton = styled(SubmitButton)`
  width: 50%;
  min-width: 90px;
  margin-left: 25%;
`;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let parsedData = {
      email: email.trim(),
      password,
    };

    if (parsedData.email === "" || parsedData.password === "") {
      alert("Uzupełnij passy");
    } else {
      dispatch(login(parsedData))
        .unwrap()
        .then((result) => {
          console.log(result);
          window.location.reload();
        })
        .catch((rejected) => {
          console.log(rejected);
        });
    }
  };

  return (
    <Form onSubmit={handleLoginSubmit}>
      <LoginInput
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <LoginInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <LoginButton value="Zaloguj" />
    </Form>
  );
};

export default LoginForm;
