import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Header.module.css';
import Authorize from '../Authorize/Authorize';


const Head: FC = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Link href='/'><Image className={style.logo} priority={true} src="http://localhost:3000/as_logo.svg" alt="Мое изображение" width={50} height={50} /></Link>
                <Authorize />
            </div>
        </header>
    );
};

export default Head;
