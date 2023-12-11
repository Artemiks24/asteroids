import { FC } from 'react';

import { Gradient } from '../../consts';
import style from './Header.module.css';
import { Flex, Button } from 'antd';
import Image from 'next/image';


const Head: FC = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Image className={style.logo} priority={true} src="http://localhost:3000/as_logo.svg" alt="Мое изображение" width={50} height={50} />
                <Flex gap="small" className={style.header__auth}>
                    <Button style={{ background: Gradient.login }} type="primary">Войти</Button>
                    <Button style={{ background: Gradient.signup }} type="primary">Зарегестрироваться</Button>
                </Flex>
            </div>
        </header>
    );
};

export default Head;
