import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box,Typography } from '@mui/material';
import Style from '../../assets/css/main_style.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  jsonData from '../../assets/json/jsonData';


const TrendingCategories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    
    };


    return (
        <>
            <Box>
                <Typography variant='h5' sx={{ fontFamily: 'Poppins' }} fontWeight='500' color='#003049'>Trending Categories</Typography>
                <Box mt={3}>
                    <Slider {...settings}>
                        {jsonData.Categories.map((trendItems, index) => {
                            return (
                                <Box  xs={2} key={index}>
                                    <Card sx={{ maxWidth: 345, mx: 1, border: '2px solid #f8f8f8', boxShadow: 'none' }} className={`${Style['trendingCat_card']}`}>
                                        <CardMedia
                                            className={`${Style['trendingcat_img']}`}
                                            component='img'
                                            sx={{ height: 140, objectFit: 'contain' }}
                                            src={trendItems.image_url}
                                            title={trendItems.title}
                                        />
                                        <CardContent>
                                            <Typography textAlign='center' fontFamily={'Poppins'} component="div">
                                                {trendItems.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            )
                        })}

                    </Slider>
                </Box>


            </Box>
        </>
    )

}
export default TrendingCategories;