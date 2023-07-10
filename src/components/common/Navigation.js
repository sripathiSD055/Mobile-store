import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

import Style from '../../assets/css/main_style.module.css'
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Navgation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#000' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' } , 
                            }}
                        >
                            <Link
                                className={`${Style['nav_Links']}`}
                                to='/about'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2 }}
                            >
                                About
                            </Link>
                            <Link
                                className={`${Style['nav_Links']}`}
                                to='/services'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2 }}
                            >
                                Services
                            </Link>
                            <Link
                                className={`${Style['nav_Links']}`}
                                to='/contact'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2 }}
                            >
                                Contact us
                            </Link>
                            <Link
                                className={`${Style['nav_Links']}`}
                                to='/Orders'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2 }}
                            >
                                Orders
                            </Link>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '30px' }}>

                        <Link
                            className={`${Style['nav_Links']}`}
                            to='/about'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2 }}
                        >
                            About
                        </Link>
                        <Link
                            className={`${Style['nav_Links']}`}
                            to='/services'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2 }}
                        >
                            Services
                        </Link>
                        <Link
                            className={`${Style['nav_Links']}`}
                            to='/contact'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2 }}
                        >
                            Contact us
                        </Link>
                        <Link
                            className={`${Style['nav_Links']}`}
                            to='/Orders'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2 }}
                        >
                            Orders
                        </Link>

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button className={`${Style['nav_splbutton']}`}>Special Offer !</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navgation;