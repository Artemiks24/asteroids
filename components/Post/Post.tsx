import { FC } from 'react';
import styles from './Post.module.css';

import Image from 'next/image';
import { Gradient } from '../../consts';
import { formatDate } from '../../helper/formatDate';
import { IpostProps } from '../../helper/types';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import { Button } from '@mui/material';
import Link from 'next/link';

const Post: FC<IpostProps> = ({ id, name, kilometers, lunar, date, diameter, danger }) => {
    const postOobj = { id, name, kilometers, lunar, date, diameter, danger };

    return (
        <div style={{ background: Gradient.borderPost }} className={styles.container}>
            <h5 className={styles.title}>{name}</h5>
            <div className={styles.wrapper}>
                <div className={styles.description}>
                    <div className={styles.distanceWrapper}>
                        <p>{`${Number(kilometers).toFixed(0)} kilometers`}</p>
                        <p>{`${Number(lunar).toFixed(0)} lunar distance`}</p>
                    </div>
                    <Image src='http://localhost:3000/asMini.png' alt='aster' width={25} height={25} />
                    <div className={styles.about}>
                        <p>{formatDate(date)}</p>
                        <p>{`Ø ${diameter.toFixed(0)} m`}</p>
                    </div>
                </div>
                <div className={styles.interactive}>
                    <ButtonContainer o={postOobj} />
                    <p>{danger ? '⚠ Danger' : 'Safe'}</p>
                    <Link href={`/post/${id}`}>
                        <Button size='small' style={{ background: Gradient.basket }} variant="contained">
                            Details
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;