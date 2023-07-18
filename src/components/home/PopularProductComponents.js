
import ProductCard from "../product/ProductcardComponent";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import  jsonData from '../../assets/json/jsonData';


const PopularProduct = () => {

    const [isAdded, setisAdded] = useState(false);

    const addToCart = (currentTarget) => {
        setisAdded(true);
        console.log(isAdded);
        console.log(currentTarget)
    }
    const viewProduct = (currentProduct) => {
        console.log(currentProduct)
    }



    return (
        <>
            <Box my={3} >
                <Typography color={'#003049'} textTransform={'capitalize'} fontWeight={500} fontFamily={'Poppins'} fontSize={25} >Popular Products</Typography>
                <Grid container spacing={2} mt={1}>
                    {
                        jsonData.productData.map((items, index) => {
                            return (
                                <Grid xs={12} sm={6} md={4} lg={3} item key={index} >
                                    <ProductCard addToCart={addToCart} viewProduct={viewProduct} productId={items.product_id} productTitle={items.product_title} productimg={items.product_img} productDes = {items.product_des} productprice={items.price} />
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