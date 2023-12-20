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
                Favorites
            </Button></Link>
            <Link href='/history'><Button style={{ background: Gradient.login }} variant="contained" >
                History
            </Button></Link>
            <Link href='/'><Button onClick={() => handleToggleAuth()} style={{ background: Gradient.login }} variant="contained" >
                Sign out
            </Button></Link>
        </div>


    );
};

export default Authorize;