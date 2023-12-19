import { FC } from 'react';
import { Gradient } from '../../consts';
import Link from 'next/link';
import styles from './Authorize.module.css';
import { Button } from '@mui/material';
import { handleToggleAuth } from '../../helper/ToggleAuth';

const Authorize: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Link href='/favorites'><Button style={{ background: Gradient.login }} variant="contained">
                Избранное
            </Button></Link>
            <Link href='/history'><Button style={{ background: Gradient.login }} variant="contained" >
                История
            </Button></Link>
            <Link href='/'><Button onClick={() => handleToggleAuth()} style={{ background: Gradient.login }} variant="contained" >
                Выйти
            </Button></Link>
        </div>


    );
};

export default Authorize;