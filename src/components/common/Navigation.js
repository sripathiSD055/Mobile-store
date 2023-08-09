import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Badge, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Style from '../../assets/css/main_style.module.css';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import jsonData from '../../assets/json/jsonData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Navgation(props) {
    const [isOpenToggle, setisOpenToggle] = useState(false);
    // const [cartCount, setCartCount] = useState(0)

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setisOpenToggle(true);
    };



    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#fff', py: 1, boxShadow: '0px 0px 20px 2px #05050514' }} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
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
                            <Drawer open={isOpenToggle} onClose={() => setisOpenToggle(false)} sx={{ display: { xs: 'block', lg: 'none' } }}>
                                <Box
                                    sx={{ width: isOpenToggle ? 250 : 0 , padding:'10px'}}
                                    role="presentation"
                                >
                                    <List>
                                        {jsonData.AnchorLinks.map((anchor, index) => {
                                            if (!anchor.submenu) {
                                                return < ListItem key={index} disablePadding  onClick={()=>setisOpenToggle(false)}>
                                                    <ListItemText>
                                                        <NavLink key={index}
                                                            className={`${Style['nav_Links']}`}
                                                            to={anchor.linkto}
                                                        >
                                                            {anchor.anchorName}
                                                        </NavLink>
                                                    </ListItemText>
                                                </ListItem>
                                            }
                                            return < ListItem key={index} disablePadding  >
                                                <ListItemText sx={{margin:0}}>
                                                    <Accordion elevation={0} >
                                                        <AccordionSummary className={`${Style['sidemenu_dropdown']}`}
                                                            sx={{padding:0 , margin:0 , minHeight:0}}
                                                            expandIcon={<ExpandMoreIcon />}        
                                                        >
                                                            <NavLink key={index}
                                                                className={`${Style['nav_Links']}`}
                                                                to={anchor.linkto}
                                                            >
                                                                {anchor.anchorName}
                                                            </NavLink>
                                                        </AccordionSummary>
                                                        <AccordionDetails sx={{padding:0}}>
                                                            <List sx={{padding:0  , paddingBottom:'10px'}}>
                                                                {
                                                                    anchor.submenu.map((submenu, index) => {
                                                                        return <ListItem key={index} sx={{padding:'5px 15px'}} onClick={() => setisOpenToggle(false) } >
                                                                            <NavLink  color="#fff" className={`${Style['nav_Links']}`}   to={anchor.anchorName+'/'+submenu.title} style={{textTransform:'capitalize'}}>{submenu.title}</NavLink>
                                                                        </ListItem>
                                                                    })
                                                                }
                                                            </List>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </ListItemText>

                                            </ListItem>
                                        })
                                        }
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                        <Box>
                            <NavLink

                                to='/'
                                style={{ my: 2, fontSize: '25px', textDecoration: 'none', fontFamily: 'Poppins', color: '#e52e06', fontWeight: 600 }}
                            >
                                Company
                            </NavLink>
                        </Box>
                        <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '30px', justifyContent: 'center' }}>
                            {
                                jsonData.AnchorLinks.map((anchor, index) => {
                                    if (!anchor.submenu) {
                                        return <NavLink key={index} id={anchor.anchorName}
                                            className={`${Style['nav_Links']}`}
                                            to={anchor.linkto}
                                        >
                                            {anchor.anchorName}
                                        </NavLink>
                                    }
                                    return <Box key={index} position={'relative'} display={'flex'} alignItems={'center'} className={`${Style['hasChild']}`} >
                                        <NavLink id={anchor.anchorName}
                                            className={`${Style['nav_Links']}`}
                                            to={anchor.linkto}
                                        >
                                            {anchor.anchorName}
                                        </NavLink>
                                        <Box position={'absolute'} top={'35px'} left={0} sx={{ backgroundColor: '#fff', display: 'none', width: '200px', borderRadius: '5px', boxShadow: '0px 5px 10px 3px #0000001c' }} className={`${Style['navDropdownContent']}`}>
                                            <List>
                                                {
                                                    anchor.submenu.map((submenu, index) => {
                                                        return <ListItem key={index} >
                                                            <NavLink color="#fff" className={`${Style['nav_Links']}`} to={anchor.anchorName+'/'+submenu.title} style={{textTransform:'capitalize'}}>{submenu.title}</NavLink>
                                                        </ListItem>
                                                    })
                                                }
                                            </List>
                                        </Box>
                                    </Box>



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
                                component='a'
                                to='/cart'
                            >
                                {/* <Badge badgeContent={cartCount} color='error' showZero  > */}
                                <Badge badgeContent={0} color='error' showZero  >
                                    <ShoppingBagOutlinedIcon sx={{ fontSize: '25px' }} className={`${Style['nav_Links']}`} />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </>
    );
}
export default Navgation;