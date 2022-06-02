import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Container from "@mui/material/Container";
import { TextField, InputLabel, Button } from "@mui/material";
import useHttp from "../hooks/http.hooks";
import { AuthContext } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { LOGIN_USER, REGISTER_USER } from "../redux/actions";

export default function AuthPage() {
  const dispatch = useDispatch();

  const registerHandler = (data) => {
    const userData = data;
    dispatch({ type: REGISTER_USER, userData });
  };

  const loginHandler = (data) => {
    const userData = data;
    dispatch({ type: LOGIN_USER, userData });
  };

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Container maxWidth="sm" sx={{ m: 2 }}>
      <form>
        <InputLabel>Введите email</InputLabel>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              id="email"
              label="email"
              variant="outlined"
              fullWidth
            />
          )}
          name="email"
          control={control}
          // rules={{ required: true, maxLength: 15, minLength: 2 }}
        />
        {errors.email?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.email?.type === "maxLength" && (
          <span>the maximum length is 15 characters</span>
        )}
        {errors.email?.type === "minLength" && (
          <span>the minimum length is 2 character</span>
        )}
        <InputLabel>Введите пароль</InputLabel>
        <Controller
          name="password"
          control={control}
          // rules={{ required: true, maxLength: 15, minLength: 6 }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              id="password"
              label="password"
              variant="outlined"
              fullWidth
            />
          )}
        />
        {errors.password?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.password?.type === "maxLength" && (
          <span>the maximum length is 15 characters</span>
        )}
        {errors.password?.type === "minLength" && (
          <span>the minimum length is 6 characters</span>
        )}
        <Button
          variant="text"
          type="submit"
          onClick={handleSubmit(registerHandler)}
        >
          Регистрация
        </Button>
        <Button
          variant="text"
          type="submit"
          onClick={handleSubmit(loginHandler)}
        >
          Вход
        </Button>
      </form>
    </Container>
  );
}
