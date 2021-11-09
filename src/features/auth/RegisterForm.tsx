import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import { registerUser } from "./authActions";

interface RegisterInputs {
  email: string;
  user_tag: string;
  display_name: string;
  password: string;
  password_confirm: string;
}

interface Props {
  closeFunction?: () => void;
}

const RegisterForm: React.FC<Props> = ({ closeFunction }) => {
  const loadingRegister = useAppSelector(
    (state) => state.auth.ui.loadingRegister
  );
  const dispatch = useAppDispatch();
  const [nonFieldErrors, setNonFieldErrors] = useState<string>("");
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    dispatch(registerUser(data))
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
            case "display_name":
            case "user_tag":
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
      <label htmlFor="user_tag">User Tag</label>
      <input
        className="text-input"
        type="text"
        id="user_tag"
        {...register("user_tag", { required: true })}
      />
      <div className="error-block">{errors.user_tag?.message}</div>
      <label htmlFor="display_name">Display Name</label>
      <input
        className="text-input"
        type="text"
        id="display_name"
        {...register("display_name", { required: true })}
      />
      <div className="error-block">{errors.display_name?.message}</div>
      <label htmlFor="password">Password</label>
      <input
        className="text-input"
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      <div className="error-block">{errors.password?.message}</div>
      <label htmlFor="password_confirm">Confirm Password</label>
      <input
        className="text-input"
        type="password"
        id="password_confirm"
        {...register("password_confirm", { required: true })}
      />
      <div className="error-block">{errors.password_confirm?.message}</div>

      <button
        className="button button--submit"
        type="submit"
        disabled={loadingRegister}
      >
        {loadingRegister ? (
          <div className="button__loading"></div>
        ) : (
          "Zarejestruj się"
        )}
      </button>

      <div className="error-block">{nonFieldErrors}</div>
    </form>
  );
};

export default RegisterForm;
