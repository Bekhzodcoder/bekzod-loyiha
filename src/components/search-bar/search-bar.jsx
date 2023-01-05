import {Search} from '@mui/icons-material';
import {Paper, IconButton} from '@mui/material';
import {colors} from '../../contants/colors';

const SearchBar = () => {
    return (
       <Paper 
        component={"form"}
        sx={{border:`1px solid ${colors.secondary}`, pl:2, boxShadow:'none', borderRadius:"none"}}
        >
        <input type="text" placeholder='Search...' className="search-bar" />
        <IconButton>
            <Search />
        </IconButton>
       </Paper> 
    );
}

export default SearchBar;
