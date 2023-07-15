import { Button, Typography } from "@mui/material";
import ProductCard from "../product/ProductcardComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import  jsonData from '../../assets/json/jsonData';

const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive : [
        {
            breakpoint:990,
            settings:{
                slidesToShow: 3,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint:425,
            settings:{
                slidesToShow: 1,
            }
        },
    ]
};


const LatestProduct = () => {
    return (
        <>
            <Box my={5}>
                <Typography color={'#003049'} textTransform={'capitalize'} fontWeight={500} fontFamily={'Poppins'} mb={3} fontSize={25} >Latest Products</Typography>
                <Slider {...settings} >
                    {
                        jsonData.productData.map((items, index) => {
                            return (
                                <Box key={index}>
                                    <Box mx={1}>
                                        <ProductCard productId = {items.product_id} productTitle={items.product_title} productimg={items.product_img} productprice={items.price} />
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Slider>
            </Box>
        </>
    )

}
export default LatestProduct;