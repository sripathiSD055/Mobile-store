
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from '../../assets/css/main_style.module.css';
import banner1 from '../../assets/img/bannerimage1.jpg'
import banner2 from '../../assets/img/bannerimage2.jpg'
import banner3 from '../../assets/img/bannerimage3.jpg'
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';


const bannerData = [
    {
        label: 'Vivo ',
        imgPath: banner1,
        product_name: 'Vivo Foldable Y66',
        description: "Vivo For Life",
        button: 'Buy Now'
    },
    {
        label: 'Samsung',
        imgPath: banner2,
        product_name: 'Samsung S21',
        description: "Brand new Flagship mobile",
        button: 'Explore more'
    },
    {
        label: 'Iphone',
        imgPath: banner3,
        product_name: 'Iphone 11 pro',
        description: "Festival offer",
        button: 'View Products'

    },
];


const BannerSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true
    };

    return (
        <Box p={3}>
            <Slider {...settings}>
                {bannerData.map((step, index) => (
                    <Box key={step.label}>
                        <Box className={`${Style['banner_main']}`}>
                            <Box
                                className={`${Style['banner_carousel_image']}`}
                                component="img"
                                src={step.imgPath}
                                alt={step.label}
                            />
                            <Box className={`${Style['banner_content']} `}>
                                <Box className={`${Style['']}`}></Box>
                                <Box>
                                    <Typography variant='h2' color='white' mb={3}>{step.product_name}</Typography>
                                    <Typography variant='h4' color='white' mb={3}>{step.description}</Typography>
                                    <Button variant='contained'>{step.button}</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
export default BannerSlider;

