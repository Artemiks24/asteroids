"use client";
import React, { FC } from "react";
import styles from "./ModalBox.module.css";
import { Typography, Button } from "@mui/material";
import { Gradient } from "../../consts";
import Link from "next/link";

const ModalBox: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h6" component="div">
        У вас уже есть аккаунт, желаете войти?
      </Typography>
      <div className={styles.btnwrapper}>
      <Link href='/signin'><Button style={{ background: Gradient.login }} variant="contained">
                Да
            </Button></Link>
            <Link href='/signup'><Button style={{ background: Gradient.login }} variant="contained">
                Назад
            </Button></Link>
      </div>
    </div>
  );
};

export default ModalBox;
