import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../common/components/Button";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import parseErrorArray from "../../common/parseErrorArray";
import { createToast } from "../toast/toastReducer";
import { Toast } from "../toast/toastTypes";
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
      .then((_) => {
        reset();
        if (closeFunction) {
          closeFunction();
        }
        dispatch(
          createToast({
            content: "Welcome",
            closeable: true,
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
            case "password_confirm":
            case "display_name":
            case "user_tag":
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

      <Button
        type="submit"
        center={true}
        loading={loadingRegister}
        length="normal"
      >
        Sign in
      </Button>

      <div className="error-block">{nonFieldErrors}</div>

      <p>
        Already have an account?{" "}
        <Link className="link" to="/user_panel/login">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
