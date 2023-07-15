
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Style from '../../assets/css/main_style.module.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Modal from '@mui/material/Modal';
import jsonData from '../../assets/json/jsonData';
import { useState } from "react";






const ProductCard = (props) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [currentProductData, setCurrentProductData] = useState({})

    const productModal = (propsId) => {
        jsonData.productData.map((items, index) => {
            if (items.product_id === propsId) {
                setCurrentProductData(items)
                setOpen(true)
            }
        })

    }


    return (
        <>
            <Card className={`${Style['product_Card']}`} elevation={0}>
                <Box className={`${Style['product_Card_image']}`} overflow={'hidden'} id={props.productId}>
                    <CardMedia
                        sx={{ height: 250 }}
                        src={props.productimg}
                        component='img'
                        title="green iguana"
                    />
                    <Box className={`${Style['product_Card_hover']}`} display={'flex'} gap={1} alignItems={'center'} justifyContent={'center'} >
                        <IconButton size='large' className={`${Style['productCard_icon']}`} sx={{ color: '#e52e06', transition: '.5s' }} onClick={(e) => { props.viewProduct(props.productId) }}>
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
                            <Typography gutterBottom fontSize={{ xs: 16, sm: 18 }} fontFamily={'Poppins'} fontWeight={500} component="div">
                                {props.productTitle}
                            </Typography>
                            <Typography fontSize={18} fontWeight={500} mt={1} color='#e52e06' fontFamily={'Poppins'}>${props.productprice}</Typography>
                        </Box>
                        <IconButton size='large ' sx={{ backgroundColor: '#e2e2e24d', color: '#e52e06', transition: '.5s' }} onClick={(e) => { props.addToCart(props.productId) }}>
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body2" mt={1} fontSize={14} fontFamily={'Poppins'} color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '65%',
                    bgcolor: 'background.paper',
                    borderRadius: '10px',
                    boxShadow: 24,
                    p: 4,
                    zIndex: 1,
                }} >
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Box >
                                <Grid container spacing={2} >
                                    <Grid item xs={3}>d</Grid>
                                    <Grid item xs={9} sx={ {border: '4px solid #f8f8f8'}} overflow={'hidden'}>
                                        <Box><CardMedia title="" src={currentProductData.product_img} sx={{ objectFit: 'contain', width: '100%' }} component='img' height={'500px'} /></Box></Grid>
                                </Grid>

                            </Box>

                        </Grid>
                        <Grid item md={6}>
                            <Typography sx={{ fontSize: 32, fontWeight:500 }} color="#000" fontFamily={'Poppins'} mb={2}>
                                {currentProductData.product_title}
                            </Typography>
                            <Typography sx={{ fontSize: '12px', padding:'2px 5px' , borderRadius:'2px' }} color="#e52e06" fontFamily={'Poppins'} bgcolor={'#e52e0621'} display={'inline'}>
                                In Stock
                            </Typography>
                            <Typography sx={{ fontSize: '23px', padding:'2px 5px' , borderRadius:'2px' }} mt={2} fontFamily={'Poppins'}>
                            ${currentProductData.price}
                            </Typography>

                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </>
    )
}
export default ProductCard;