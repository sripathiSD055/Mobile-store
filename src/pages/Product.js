import React from 'react'
import Container from '@mui/material/Container'
import { Box, Button, Grid, IconButton, Link, TextField, Typography } from '@mui/material'
import Style from '../assets/css/main_style.module.css'
import { useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { ProductPageTabs } from '../components/product/ProductPageTabs'
// import ReactImageMagnify from 'react-image-magnify';
import Json from '../assets/json/jsonData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Product = () => {

    const [TotalQuantity, setTotalQuantity] = useState('1');
    const ProductSlider = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0);


    const QuantityValue = (value) => {
        setTotalQuantity(value)
        console.log(value)
    }
    const increaseQnty = () => {
        let result = parseInt(TotalQuantity)
        let increasevalue = result + 1
        setTotalQuantity(increasevalue)
    }
    const decreaseQnty = () => {
        let result = parseInt(TotalQuantity)
        let decreasevalue = result - 1

        if (decreasevalue > 0) {
            setTotalQuantity(decreasevalue)
        }
    }
    const nextSlide = () => {
        ProductSlider.current.slickNext()
    }
    const prevSlide = () => {
        ProductSlider.current.slickPrev()
    }

    const imageClicked = (index) => {
        setCurrentSlide(index);
        console.log(currentSlide)
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,

        arrows: false,
        beforeChange: function (currentSlide, nextSlide) {
            setCurrentSlide(nextSlide);
            console.log(currentSlide)
        },
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
        ]
    };



    return (
        <>
            <Container maxWidth="xl">
                <Grid container mt={1} mb={3} spacing={5} >
                    <Grid item xs={12} md={6}>
                        <Box display={{ sm: 'flex', xs: 'block' }} gap={1}>
                            <Box sx={{ width: { sm: '25%' }, border: '1px solid #e52e06', borderRadius: '5px', display: { xs: 'none', sm: 'flex' }, flexDirection: { sm: 'column' }, justifyContent: 'space-between' }} >
                                <Button sx={{ color: '#e52e06' }} onClick={nextSlide}><KeyboardArrowUpOutlinedIcon /></Button>
                                <Slider ref={ProductSlider} style={{ height: '100%' }}   {...settings}>
                                    {
                                        Json.productData[0].product_Gal.map((item, index) => {
                                            return <Box height={'100%'}>
                                                <Box height={'100%'} mx={'auto'}>
                                                    <Box width={'105px'} mx={'auto'} key={index} onClick={() => imageClicked(index)} sx={{ cursor: 'pointer' }} >
                                                        <img alt='thumblineimage' style={{ width: '100%', height: '100%' , objectFit:'contain' }} src={item} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        })
                                    }
                                </Slider>
                                <Button sx={{ color: '#e52e06' }} onClick={prevSlide}><KeyboardArrowDownOutlinedIcon /></Button>
                            </Box>
                            <Box sx={{ width: { sm: '75%', xs: '100%' } , display:{sm:'flex'} , alignItems:'center' , border: '1px solid #e52e06', borderRadius: '5px', overflow: 'hidden' }}>
                                {/* <ReactImageMagnify enlargedImagePosition='over' className={`${Style['productmainImg']}`}  {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: Json.ProductData[0].product_Gal[currentSlide],
                                    },
                                    largeImage: {
                                        src: Json.ProductData[0].product_Gal[currentSlide],
                                        width: 2000,
                                        height: 2000,
                                    },
                                }} /> */}
                                <Box className={`${Style['productmobileImg']}`}>
                                    <Slider {...settings} >
                                        {
                                            Json.ProductData[0].product_Gal.map((item, index) => {
                                                return <Box >
                                                    <Box height={'300px'}><img alt='thumblineimage' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={item} /></Box>
                                                </Box>
                                            })
                                        }
                                    </Slider>
                                </Box>


                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography fontSize={'14px'} color='#e52e06' fontFamily={'Poppins'} mb={1}>Brand Name</Typography>
                            <Typography fontSize={'22px'} fontFamily={'Poppins'} mb={1}>Product Name</Typography>
                            <Typography fontFamily={'Poppins'} fontSize={'14px'} fontWeight={'500'} textTransform={'uppercase'} mb={1}>SKU : Pro100</Typography>
                            <Link fontFamily={'Poppins'} fontSize={'14px'} fontWeight={'500'} sx={{ textDecoration: 'none' }} textTransform={'capitalize'} mb={1} color='text.secondary'>write review</Link>
                            <Typography fontFamily={'Poppins'} fontSize={'25px'} fontWeight={'500'} mb={1}>$100</Typography>
                            <Box sx={{ maxWidth: '65%' }}>
                                <Typography fontFamily={'Poppins'} fontSize={'14px'} fontWeight={'500'} mb={1}>Quantity</Typography>
                                <Box display={'flex'} alignItems={'center'} gap={1} mb={2}>
                                    <Box display={'flex'}  >
                                        <Button variant='contained' className={`${Style['quickView_Btn']}`} sx={{ backgroundColor: '#eeefef', minWidth: '30px', color: '#000', borderRadius: '4px 0px 0px 4px', boxShadow: '0' }} onClick={decreaseQnty}>-</Button>
                                        <TextField
                                            id=""
                                            label=""
                                            type='text'
                                            value={TotalQuantity}
                                            onChange={(e) => QuantityValue(e.target.value)}
                                            className={`${Style["productModal_Input"]}`}
                                            sx={{ width: '35px', backgroundColor: '#eeefef' }}
                                        />
                                        <Button variant='contained' className={`${Style['quickView_Btn']}`} sx={{ backgroundColor: '#eeefef', minWidth: '30px', color: '#000', borderRadius: '0px 4px 4px 0px', boxShadow: '0' }} onClick={increaseQnty}>+</Button>
                                    </Box>
                                    <Button variant='outlined' fullWidth color='inherit' sx={{ border: '1px solid #e52e06', color: '#e52e06', }}>Add to cart</Button>
                                </Box>
                                <Button fullWidth variant='contained' sx={{ boxShadow: 0, backgroundColor: '#e52e06' }} color='error' >Buy now</Button>
                            </Box>
                            <Box display={'flex'} gap={1} mt={2}>
                                <IconButton size='large' className={`${Style['productCard_icon']}`} sx={{ color: '#e52e06', transition: '.5s', }} onClick={() => { }}>
                                    <FavoriteBorderOutlinedIcon />
                                </IconButton>
                                <IconButton size='large' className={`${Style['productCard_icon']}`} sx={{ color: '#e52e06', transition: '.5s', }} onClick={() => { }}>
                                    <CompareOutlinedIcon />
                                </IconButton>
                                <IconButton size='large' className={`${Style['productCard_icon']}`} sx={{ color: '#e52e06', transition: '.5s', }} onClick={() => { }}>
                                    <ShareOutlinedIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <ProductPageTabs></ProductPageTabs>
            </Container>
        </>
    )
}
export default Product
