import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { LoaderProps } from '../../helper/types';

const Loader: FC<LoaderProps> = ({ top, left, right, bottom, width, height, position }) => {

    return (
        <Box sx={{
            width,
            height,
            top,
            left,
            bottom,
            right,
            position,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <CircularProgress color="success" />
        </Box>
    );
};

export default Loader;