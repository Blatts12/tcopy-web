import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../common/hooks/storeHooks";
import { loginUser } from "./authActions";

interface LoginInputs {
  email: string;
  password: string;
}

interface Props {
  closeFunction?: () => void;
}

const LoginForm: React.FC<Props> = ({ closeFunction }) => {
  const dispatch = useAppDispatch();
  const [nonFieldErrors, setNonFieldErrors] = useState<string>("");
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then((result) => {
        reset();
        if (closeFunction) {
          closeFunction();
        }
      })
      .catch((resultErrors) => {
        if (resultErrors.non_field_errors) {
          setNonFieldErrors(resultErrors.non_field_errors.join("\n"));
          delete resultErrors.non_field_errors;
        }
        for (const field in resultErrors) {
          switch (field) {
            case "email":
            case "password":
              setError(field, {
                message: resultErrors[field]?.join("\n"),
              });
          }
        }
      });
  };

  return (
    <form className="form form--login" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        className="text-input"
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      <div className="error-block">{errors.email?.message}</div>

      <label htmlFor="password">Password</label>
      <input
        className="text-input"
        type="password"
        id="password"
        {...register("password", {
          required: true,
          minLength: 8,
          maxLength: 32,
        })}
      />
      <div className="error-block">{errors.password?.message}</div>

      <input className="button button--submit" type="submit" value="Login" />

      <div className="error-block text-center">{nonFieldErrors}</div>
    </form>
  );
};

export default LoginForm;
