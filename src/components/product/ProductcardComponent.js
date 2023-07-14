
import { Box, IconButton, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Style from '../../assets/css/main_style.module.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const ProductCard = (props) => {
    return (
        <>
            <Card className={`${Style['product_Card']}`} elevation={0}>
                <Box className={`${Style['product_Card_image']}`} overflow={'hidden'}>
                    <CardMedia
                        sx={{ height: 250 }}
                        src={props.productimg}
                        component='img'
                        title="green iguana"
                    />
                    <Box className={`${Style['product_Card_hover']}`} display={'flex'} gap={1} alignItems={'center'} justifyContent={'center'}>
                        <IconButton size='large' className={`${Style['productCard_icon']}`} sx={{color: '#e52e06', transition: '.5s' }}>
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <IconButton size='large' className={`${Style['productCard_icon']}`} sx={{ color: '#e52e06', transition: '.5s' }}>
                            <RemoveRedEyeOutlinedIcon />
                        </IconButton>
                    </Box>
                </Box>

                <CardContent>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>
                            <Typography gutterBottom fontSize={{xs:16 , sm:18}} fontFamily={'Poppins'} fontWeight={500} component="div">
                                {props.productTitle}
                            </Typography>
                            <Typography fontSize={18} fontWeight={500} mt={1} color='#e52e06' fontFamily={'Poppins'}>${props.productprice}</Typography>
                        </Box>

                        <IconButton size='large' sx={{ backgroundColor: '#e2e2e24d', color: '#e52e06', transition: '.5s' }}>
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body2" mt={1} fontSize={14} fontFamily={'Poppins'} color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductCard;