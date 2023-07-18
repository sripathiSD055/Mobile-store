import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Badge, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import Style from '../../assets/css/main_style.module.css';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import  jsonData from '../../assets/json/jsonData';


function Navgation(props) {
    const [isOpenToggle, setisOpenToggle] = useState(false);
    const[cartCount , setCartCount] = useState(0)

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setisOpenToggle(true);
    };

     const addToCart = () =>{
        setCartCount(cartCount + 1)
        console.log(cartCount)
    }



    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#fff', py: 1, boxShadow: '0px 0px 20px 2px #05050514' }} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer}
                                color="#000"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer open={isOpenToggle} onClose={() => setisOpenToggle(false)} sx={{ display:{ xs:'block' , md:'none' }} }>
                                <Box
                                    sx={{ width: isOpenToggle ? 250 : 0 }}
                                    role="presentation"
                                    onClick={toggleDrawer}
                                    onKeyDown={toggleDrawer}
                                >
                                    <List>
                                        {jsonData.AnchorLinks.map((anchor, index) => (                     
                                            <ListItem key={index} disablePadding> 
                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link key={index}
                                                            className={`${Style['nav_Links']}`}
                                                            to={anchor.linkto}
                                                        >
                                                            {anchor.anchorName}
                                                        </Link>
                                                    </ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                        ))
                                        }
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                        <Box>
                            <Link

                                to='/'
                                style={{ my: 2, fontSize: '25px', textDecoration: 'none', fontFamily: 'Poppins', color: '#e52e06', fontWeight: 600 }}
                            >
                                Company
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px', justifyContent: 'center' }}>

                            {
                                jsonData.AnchorLinks.map((anchor, index) => {
                                    return <Link key={index}
                                        className={`${Style['nav_Links']}`}
                                        to={anchor.linkto}
                                    >
                                        {anchor.anchorName}
                                    </Link>

                                })
                            }

                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton
                                size="medium"
                            >
                                <FavoriteBorderRoundedIcon sx={{ fontSize: '25px' }} className={`${Style['nav_Links']}`} />
                            </IconButton>
                            <IconButton
                                size="medium" 
                                component='Link'
                                to='./cart'
                            >
                                <Badge badgeContent={cartCount} color='error' showZero  >
                                    <ShoppingBagOutlinedIcon sx={{ fontSize: '25px' }} className={`${Style['nav_Links']}`} />
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