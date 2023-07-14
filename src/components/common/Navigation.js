import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Badge, Link } from '@mui/material';
import Style from '../../assets/css/main_style.module.css';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

function Navgation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#fff' , py:1 , boxShadow:'0px 0px 20px 2px #05050514'}} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                                    display: { xs: 'block', md: 'none' },
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
                        <Box>
                            <Link
                              
                                to='/'
                                sx={{ my: 2, fontSize: '25px', textDecoration: 'none', fontFamily: 'Poppins', color: '#e52e06', fontWeight: 600 }}
                            >
                                Company
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px', justifyContent: 'center' }}>

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
                            <IconButton
                                size="medium"   
                            >
                                <FavoriteBorderRoundedIcon sx={{fontSize:'25px'}} className={`${Style['nav_Links']}`} />
                            </IconButton>
                            <IconButton
                                size="medium"
                            >
                                <Badge badgeContent={0} color='error' showZero >
                                    <ShoppingBagOutlinedIcon  sx={{fontSize:'25px'}} className={`${Style['nav_Links']}`} />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navgation;