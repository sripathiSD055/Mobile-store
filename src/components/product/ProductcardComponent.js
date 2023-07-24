
import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Style from '../../assets/css/main_style.module.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import jsonData from '../../assets/json/jsonData';
import { useState } from "react";
import ProductQuickview from "./ProductQuickview";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductCard = (props) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const navigateProduct = useNavigate()

    const productModal = (propsId) => {
        jsonData.productData.map((items) => {
            if (items.product_id === propsId) {
                setOpen(true)
            }
        })
    }
   
    return (
        <>
            <Card className={`${Style['product_Card']}`} sx={{ display:  props.viewType ? '' : {xs :'block' , sm:'flex'} }} elevation={0}>
                <Box className={`${Style['product_Card_image']}`} overflow={'hidden'} id={props.productId}>
                    <CardMedia
                        sx={{ height: 250 }}
                        src={props.productimg}
                        component='img'
                        title="green iguana"
                    />
                    <Box className={`${Style['product_Card_hover']}`} display={'flex'} gap={1} alignItems={'center'} justifyContent={'center'} >
                        <IconButton size='large' className={`${Style['productCard_icon']}`} sx={{ color: '#e52e06', transition: '.5s' }} onClick={() => { props.viewProduct(props.productId) }}>
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <IconButton size='large' className={`${Style['productCard_icon']}`} sx={{ color: '#e52e06', transition: '.5s' }} onClick={() => { productModal(props.productId) }}>
                            <RemoveRedEyeOutlinedIcon />
                        </IconButton>
                    </Box>
                </Box>

                <CardContent>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>
                            <Link onClick={() => navigateProduct('product')}  className={`${Style['ProductTitle']}`} component="a">
                                {props.productTitle}
                            </Link>
                            <Typography fontSize={18} fontWeight={500} mt={1} color='#e52e06' fontFamily={'Poppins'}>${props.productprice}</Typography>
                        </Box>
                        <Box>
                            <IconButton size='large ' sx={{ backgroundColor: '#e2e2e24d', color: '#e52e06', transition: '.5s', display: props.viewType ? 'inline-flex' : 'none' }} onClick={() => { props.addToCart(props.productId) }}>
                                <ShoppingCartIcon />
                            </IconButton>
                        </Box>

                    </Box>
                    <Typography variant="body2" mt={1} fontSize={14} fontFamily={'Poppins'} color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: '2', overflow: 'hidden', textOverflow: 'ellipsis', WebkitBoxOrient: 'vertical' }}>
                        {props.productDes}
                    </Typography>
                    <Grid container mt={2} spacing={2}  maxWidth={props.viewType?'100%' : {xs:'100%',md:'75%' , lg:'50%'}}>
                        <Grid item xs={12} sm={props.viewType ? 12 : 6}>
                            <Button variant="outlined" color='inherit' fullWidth sx={{border:'1px solid #e52e06' , color:'#e52e06',}}>
                                Buy Now
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={props.viewType ? 12 : 6} sx={{ display: props.viewType ? 'none' : 'block' }}>
                            <Button variant="contained" fullWidth color="error" sx={{ display: props.viewType ? 'none' : 'block', boxShadow:0  , backgroundColor:'#e52e06'}}>
                                Add to cart
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
            <ProductQuickview ProductGal={props.product_Gal} ProductTitle={props.productTitle} ProductDes={props.productDes} ProductImg={props.productimg} ProductPrice={props.productprice} ModalOpen={open} ModalClose={handleClose} />
        </>
    )
}
export default ProductCard;