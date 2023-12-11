import { FC } from 'react';

import styles from './Basket.module.css';
import { Gradient } from '../../consts';

const Basket: FC = () => {
    return (
        <div style={{ background: Gradient.basket }} className={styles.wrapper}>
            <h3>Корзина</h3>
            <div>0 астероидов</div>
        </div>
    );
};

export default Basket;
