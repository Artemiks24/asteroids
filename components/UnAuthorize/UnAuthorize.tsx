import { FC } from 'react';
import { Gradient } from '../../consts';
import Link from 'next/link';
import styles from './UnAuthorize.module.css';
import { Button } from '@mui/material';

const UnAuthorize: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Link href='/signin'><Button style={{ background: Gradient.login }} variant="contained">
                Sign in
            </Button></Link>
            <Link href='/signup'><Button style={{ background: Gradient.login }} variant="contained" >
                Sign up
            </Button></Link>
        </div>


    );
};

export default UnAuthorize;


