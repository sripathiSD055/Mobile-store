import { Button, Typography } from "@mui/material";
import ProductCard from "../product/ProductcardComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';

const Product = [
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
                        Product.map((items, index) => {
                            return (
                                <Box key={index}>
                                    <Box mx={1}>
                                        <ProductCard productTitle={items.title} productimg={items.product_img} productprice={items.price} />
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