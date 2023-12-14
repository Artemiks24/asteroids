"use client";
import React, { FC } from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./FormAuth.module.css";
import { PasswordValidate, EmailValidate } from "./validate";
import { Gradient } from "../../consts";
import { useRouter } from "next/navigation";

interface FormAuthProps {
  buttonText: string;
}

const FormAuth: FC<FormAuthProps> = ({ buttonText }) => {
  const router = useRouter();

  interface ISignin {
    email: string;
    password: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignin>();

  const onSubmit = async (event: ISignin) => {
    const data = {
      email: event.email,
      password: event.password,
    };
    const existingData = localStorage.getItem("userData");
    let newData = [];
    if (existingData) {
      newData = JSON.parse(existingData);
      const emailExists = newData.some(
        (item: ISignin) => item.email === data.email
      );
      if (emailExists) {
        if (buttonText === "Зарегестрироваться") {
          router.push("/modal");
        }
        if (buttonText === "Войти") {
            router.push("/");
        }
        
      } else {
        newData.push(data);
      }
    } else {
      newData.push(data);
    }
    localStorage.setItem("userData", JSON.stringify(newData));
  };
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
