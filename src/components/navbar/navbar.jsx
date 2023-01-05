import { Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../../constants'
import { colors } from '../../constants/colors'
import { Searchbar } from '../'

const Navbar = () => {
    return (
        <Stack 
            direction={'row'} 
            alignItems={'center'} 
            justifyContent={'space-between'} 
            flexWrap={'wrap'}
            p={2} 
            sx={{ position: "sticky", top:0, zIndex:999, background:colors.primary }}>
            <Link to={'/'}>
                <img src={require('../../components/Bekhzod.jpg')} width="200" style={{height:"60px", objectFit:"cover"}} />
            </Link>
            <Searchbar />
            <Box />
        </Stack>
    );
}

export default Navbar;
