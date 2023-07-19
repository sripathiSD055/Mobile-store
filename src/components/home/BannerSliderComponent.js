
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from '../../assets/css/main_style.module.css';
import { Button, Container, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import  jsonData from '../../assets/json/jsonData';

const BannerSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };

    return (
        <Box mb={5}>
            <Slider {...settings} className={`${Style['banner_slider']}`}>
                {jsonData.bannerData.map((step, index) => (
                    <Box key={index}>
                        <Box className={`${Style['banner_main']}`}>
                            <CardMedia
                                className={`${Style['banner_carousel_image']}`}
                                component="div"
                                image={step.imgPath}
                                alt={step.label}
                            />
                            <Box className={`${Style['banner_content']} `}>
                                <Container maxWidth='xl'>
                                    <Box>
                                        <Typography component='p' sx={{ fontSize:{ xs:'14px' , sm: '16px' , md:'20px'}, color: '#e52e06', fontFamily: 'Poppins' }} color='#000' mb={2}>{step.label}</Typography>
                                        <Typography component='p' sx={{ fontSize: {xs:'20px' ,sm:'30px',md:'40px'}, color: '#003049', fontWeight: 600, fontFamily: 'Poppins' }} color='#000' mb={2}>{step.product_name}</Typography>
                                        <Typography component='p' sx={{ fontSize: {xs:'16px' , sm:'18px'}, color: '#333333', fontFamily: 'Poppins', lineHeight: '35px' , width : {sm:'40%'} }} color='#000' mb={2}>{step.description}</Typography>
                                        <Button variant='contained' className={`${Style['bannerbtn']}`} endIcon={<ArrowForwardRoundedIcon />} py={3}>{step.button}</Button>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
export default BannerSlider;

