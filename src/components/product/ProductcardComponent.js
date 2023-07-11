
import { Box, IconButton, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Style from '../../assets/css/main_style.module.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const ProductCard = () => {
    return (
        <>
            <Card>
                <CardMedia className={`${Style['product_Card']}`}
                    sx={{ height: 250 }}
                    image="https://dummyimage.com/600x400/000/fff"
                    title="green iguana"
                >
                    <Box className={`${Style['product_Card_hover']}`} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box>
                            <IconButton size='large' ml={2} sx={{ backgroundColor: '#e2e2e2', color: '#003049', transition: '.5s' }}>
                                <FavoriteBorderOutlinedIcon />
                            </IconButton>
                            <IconButton size='large' sx={{ backgroundColor: '#e2e2e2', color: '#003049', transition: '.5s' }}>
                                <RemoveRedEyeOutlinedIcon />
                            </IconButton>
                        </Box>
                    </Box>

                </CardMedia>
                <CardContent>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>
                            <Typography gutterBottom variant="h6" fontFamily={'Poppins'} fontWeight={500} color={'#003049'} component="div">
                                Product name
                            </Typography>
                            <Typography fontSize={18} fontWeight={500} mt={1} color='#003049' fontFamily={'Poppins'}>$60</Typography>
                        </Box>

                        <IconButton size='large' sx={{ backgroundColor: '#e2e2e2', color: '#003049', transition: '.5s' }}>
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>

                    <Typography variant="body2" mt={1} fontFamily={'Poppins'} color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductCard;