import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Container from "@mui/material/Container";
import { TextField, InputLabel, Button } from "@mui/material";
import useHttp from "../hooks/http.hooks";
import { AuthContext } from "../context/AuthContext";

export default function AuthPage() {
  const auth = useContext(AuthContext);
  const { loading, request, error } = useHttp();
  const registerHandler = async (data) => {
    try {
      const data1 = await request("api/auth/register", "POST", data);
      console.log("DATA", data, "DATA1:", data1);
      console.log(data1.message);
    } catch (e) {}
  };

  const loginHandler = async (data) => {
    try {
      const data1 = await request("api/auth/login", "POST", data);
      auth.login(data1.token, data1.userId);
      console.log("DATA", data, "DATA1:", data1);
      console.log(data1.message);
    } catch (e) {}
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
