import { FC } from 'react';
import { Gradient } from '../../consts';
import Link from 'next/link';
import styles from './Authorize.module.css';
import { Button } from '@mui/material';

const Authorize: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Link href='/signin'><Button style={{ background: Gradient.login }} variant="contained">
                Войти
            </Button></Link>
            <Link href='/signup'><Button style={{ background: Gradient.login }} variant="contained" >
                Зарегестрироваться
            </Button></Link>
        </div>


    );
};

export default Authorize;


