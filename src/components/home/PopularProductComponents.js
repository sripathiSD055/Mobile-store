
import ProductCard from "../product/ProductcardComponent";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
const PopularProducts = [
    {
        title: 'Home entertainment',
        product_img: 'https://drou-electronics-store.myshopify.com/cdn/shop/products/p9_large.jpg',
        price: 70.00,
    },
    {
        title: 'Drou watch ultra',
        product_img: 'https://drou-electronics-store.myshopify.com/cdn/shop/products/13_220x240_crop_center.jpg',
        price: 55.00,
    },
    {
        title: 'Droubook space gray',
        product_img: 'https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_ea1ad2a2-ba0d-4dd2-b29a-e51fd931583b_220x240_crop_center.jpg',
        price: 60.00,
    },
    {
        title: 'Homepod mini 2022',
        product_img: 'https://drou-electronics-store.myshopify.com/cdn/shop/products/11_c6c97b67-edac-48bd-8e5c-cf0de5e9e3cb_220x240_crop_center.jpg',
        price: 77.00,
    },
    {
        title: 'DroSafe Charger',
        product_img: 'https://drou-electronics-store.myshopify.com/cdn/shop/products/p10_220x240_crop_center.jpg',
        price: 90.00,
    },
    {
        title: 'UPad Pro black',
        product_img: 'https://drou-electronics-store.myshopify.com/cdn/shop/products/p1_220x240_crop_center.jpg',
        price: 55.00,
    },
    {
        title: 'DrouPods Pro white',
        product_img: 'https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_220x240_crop_center.jpg',
        price: 120.00,
    },
    {
        title: 'Uphone lightning cable',
        product_img: 'https://drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_220x240_crop_center.jpg',
        price: 40.00,
    },
]


const PopularProduct = () => {
    return (
        <>
            <Box my={3} >
                <Typography color={'#003049'} textTransform={'capitalize'} fontWeight={500} fontFamily={'Poppins'} fontSize={25} >Popular Products</Typography>
                <Grid container spacing={2} mt={1}>
                    {
                        PopularProducts.map((items , index) => {
                            return (
                                <Grid xs={12}  sm={6}  md={4}  lg={3} item key={index} >
                                    <ProductCard productTitle={items.title} productimg={items.product_img} productprice={items.price} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )

}
export default PopularProduct;