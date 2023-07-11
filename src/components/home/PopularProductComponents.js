import { Grid,  Typography } from "@mui/material";
import ProductCard from "../product/ProductcardComponent";


const PopularProduct = () => {
    return (
        <>
            <Typography color={'#003049'} textTransform={'capitalize'} fontWeight={500} fontFamily={'Poppins'} fontSize={25} borderBottom={'1px solid lightgrey'}>Popular Products</Typography>

            <Grid container my={3} spacing={3}>
                <Grid item xs={3}>
                    <ProductCard/>
                </Grid>
            </Grid>

        </>
    )

}
export default PopularProduct;