import { FC } from 'react';

import styles from './Post.module.css';
import Image from 'next/image';
import { Button } from 'antd';
import { Gradient } from '../../consts';

const Post: FC = () => {
    return (
        <div style={{ background: Gradient.borderPost }} className={styles.container}>
            <h3 className={styles.title}>12 сент 2023</h3>
            <div className={styles.wrapper}>
                <div className={styles.description}>
                    <p>3 лунные орбиты</p>
                    <Image src='http://localhost:3000/asMini.png' alt='aster' width={25} height={25} />
                    <div className={styles.about}>
                        <p>2021 FQ</p>
                        <p>Ø 85 м</p>
                    </div>
                </div>
                <div className={styles.interactive}>
                    <Button style={{ background: Gradient.add }} type="primary">Add</Button>
                    {/* <Button style={{ background: Gradient.basketButton }} type="primary">In the basket</Button> */}
                    <p>⚠ опасно</p>
                </div>
            </div>
        </div>
    );
};

export default Post;

