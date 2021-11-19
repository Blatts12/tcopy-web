import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../common/components/Button";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import parseErrorArray from "../../common/parseErrorArray";
import { createToast } from "../toast/toastReducer";
import { loginUser } from "./authActions";

interface LoginInputs {
  email: string;
  password: string;
}

interface Props {
  closeFunction?: () => void;
}

const LoginForm: React.FC<Props> = ({ closeFunction }) => {
  const loadingLogin = useAppSelector((state) => state.auth.ui.loadingLogin);
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
      .then((_) => {
        reset();
        if (closeFunction) {
          closeFunction();
        }
        dispatch(
          createToast({
            content: "Welcome back",
            closeable: false,
            timeout: 3250,
            type: "success",
          })
        );
      })
      .catch((errors) => {
        if (errors.non_field_errors) {
          setNonFieldErrors(parseErrorArray(errors.non_field_errors));
          delete errors.non_field_errors;
        }
        for (const field in errors) {
          switch (field) {
            case "email":
            case "password":
              setError(field, {
                message: parseErrorArray(errors[field]),
              });
          }
        }
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        className="text-input"
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      <div className="error-block">{errors.email?.message}</div>

      <label htmlFor="password">Hasło</label>
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

      <Button
        type="submit"
        center={true}
        length="normal"
        loading={loadingLogin}
      >
        Log in
      </Button>

      <div className="error-block text-center">{nonFieldErrors}</div>

      <p>
        Don't have an account?{" "}
        <Link className="link" to="/user_panel/register">
          Create now
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
