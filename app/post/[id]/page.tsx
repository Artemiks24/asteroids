import { FC } from 'react';
import Details from '../../../components/Details/Details';
import { Props } from '../../../helper/types';
import Logo from '../../../components/Logo/Logo';


const Post: FC<Props> = ({ params }) => {
    return (
        <>
            <Logo />
            <Details id={params.id} />
        </>
    );
};

export default Post;