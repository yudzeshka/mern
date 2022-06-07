import React from "react";
import { useForm, Controller } from "react-hook-form";
import Container from "@mui/material/Container";
import {
  MenuItem,
  Select,
  TextField,
  InputLabel,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT_USER, SEND_FORM } from "../redux/actions";
import { sendFormDataType } from "../types/dataTypes";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setFormHandler = (data: sendFormDataType) => {
    dispatch({ type: SEND_FORM, data });
    navigate("/data");
  };

  const logoutHandler = () => {
    dispatch({ type: LOGOUT_USER });
    navigate("/");
  };

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      recipient: "",
      inn: "",
      kpp: "",
      recipientAcc: "",
      bik: "",
      checkbox: false,
    },
  });

  return (
    <Container maxWidth="sm" sx={{ m: 2 }}>
      <form onSubmit={handleSubmit(setFormHandler)}>
        {" "}
        <InputLabel>Выберите наименование получателя</InputLabel>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              id="recipient"
              label="Наименование получателя"
              variant="outlined"
              fullWidth
            />
          )}
          name="recipient"
          control={control}
          rules={{ required: true }}
        />
        {errors.recipient?.type === "required" && (
          <span>This field is required</span>
        )}
        <InputLabel>ИНН</InputLabel>
        <Controller
          name="inn"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              id="inn"
              label="ИНН"
              variant="outlined"
              fullWidth
            />
          )}
        />
        {errors.inn?.type === "required" && <span>This field is required</span>}
        {errors.inn?.type === "maxLength" && (
          <span>the maximum length is 15 characters</span>
        )}
        {errors.inn?.type === "minLength" && (
          <span>the minimum length is 15 characters</span>
        )}
        <InputLabel>КПП</InputLabel>
        <Controller
          name="kpp"
          control={control}
          rules={{ required: true, maxLength: 10, minLength: 8 }}
          render={({ field }) => (
            <TextField
              {...field}
              id="kpp"
              label="КПП"
              variant="outlined"
              fullWidth
            />
          )}
        />
        {errors.kpp?.type === "required" && <span>This field is required</span>}
        {errors.kpp?.type === "maxLength" && (
          <span>the maximum length is 10 characters</span>
        )}
        {errors.kpp?.type === "minLength" && (
          <span>the minimum length is 8 characters</span>
        )}
        <InputLabel>БИК</InputLabel>
        <Controller
          name="bik"
          control={control}
          rules={{ required: true, maxLength: 10, minLength: 8 }}
          render={({ field }) => (
            <TextField
              {...field}
              id="bik"
              label="БИК"
              variant="outlined"
              fullWidth
            />
          )}
        />
        {errors.bik?.type === "required" && <span>This field is required</span>}
        {errors.bik?.type === "maxLength" && (
          <span>the maximum length is 10 characters</span>
        )}
        {errors.bik?.type === "minLength" && (
          <span>the minimum length is 8 characters</span>
        )}
        <div>
          {" "}
          <InputLabel id="demo-simple-select-label">
            Выберите счет получателя
          </InputLabel>
          <Controller
            name="recipientAcc"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} id="recipientAcc" autoWidth>
                <MenuItem value="ByALfa">Alfa Bank</MenuItem>
                <MenuItem value="ByPrior">Prior Bank</MenuItem>
                <MenuItem value="ByBelGaz">Belgazprom Bank</MenuItem>
              </Select>
            )}
          />
          {errors.recipientAcc && <span>This field is required</span>}
        </div>
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControlLabel
              id="demo-simple-checkbox-label"
              label="Исполнить"
              control={<Checkbox {...field} id="checkbox" />}
            />
          )}
        />
        {errors.checkbox && <span>This field is required</span>}
        <Button variant="text" type="submit">
          Отправить
        </Button>
      </form>
      <Button variant="text" onClick={logoutHandler}>
        Выйти
      </Button>
      <Link to={"/data"}>
        <Button variant="text">История платежей</Button>
      </Link>
    </Container>
  );
}
