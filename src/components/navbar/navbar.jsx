import React from 'react';
import { Stack, Box } from '@mui/material';
import {colors} from '../../contants/colors';
import { Link } from 'react-router-dom';
import {SearchBar} from '../'

const Navbar = () => {
    return (
        <Stack 
            direction={'row'} 
            alignItems={'center'} 
            justifyContent={'space-between'} 
            p={2} 
            sx={{ position: "sticky", top:0, zIndex:999, background:colors.primary }}>
            <Link to={'/'}>
                <img src={require('../../components/Bekhzod.jpg')} width="200" style={{height:"60px", objectFit:"cover"}} />
            </Link>
            <SearchBar />
            <Box />
        </Stack>
    );
}

export default Navbar;
