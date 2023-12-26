import React, { FC } from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./FormAuth.module.css";
import { PasswordValidate, EmailValidate } from "./validate";
import { Gradient } from "../../consts";
import { FormAuthProps, ISignin } from "../../helper/types";


const FormAuth: FC<FormAuthProps> = ({ buttonText, onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignin>();


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="email"
        size="small"
        label="Email"
        type="email"
        color="success"
        {...register("email", EmailValidate)}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        color="success"
        size="small"
        {...register("password", PasswordValidate)}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button
        className={styles.button}
        type="submit"
        style={{ background: Gradient.login }}
        variant="contained"
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default FormAuth;
