import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';
const Logo: FC = () => {
    return (
        <div className={styles.logoWrapper}>
            <Link href='/'><Image className={styles.logo} priority={true} src="http://localhost:3000/as_logo.svg" alt="Мое изображение" width={50} height={50} /></Link>
        </div>
    );
};

export default Logo;
