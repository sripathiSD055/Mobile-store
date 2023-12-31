import { Box, Button, Typography } from "@mui/material";
import Style from '../../assets/css/main_style.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  jsonData from '../../assets/json/jsonData';
const PromotionBannerComponent = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };

    return (
        <>
            <Box mt={5} sx={{overflow:'hidden'}}>
                <Slider {...settings}>
                    {jsonData.Custombanner.map((data, index) => {
                        return <Box key={index} >
                            <Box className={`${Style['home_custom_banner']}`} display={'flex'} p={2} mx={1}>
                                <Box>
                                    <Typography fontSize={16} textTransform={'uppercase'} fontFamily={'Poppins'} >{data.Title1}</Typography>
                                    <Typography fontSize={30} fontWeight={700} color={'#003049'} textTransform={'uppercase'} fontFamily={'Poppins'} mb={1}>{data.discount}</Typography>
                                    <Typography fontSize={25} mb={2} color={'#d62828'} fontWeight={600} textTransform={'capitalize'} fontFamily={'Poppins'} >{data.Title2} </Typography>
                                    <Button variant='contained' xs={{ textTransform: 'capitalize' }} className={`${Style['bannerbtn']}`}>{data.button}</Button>
                                </Box>
                                <Box className={`${Style['home_cb_img']}`}>
                                    <Box component={'img'} src={data.image}></Box>
                                </Box>
                            </Box>
                        </Box>
                    })}
                </Slider>
            </Box>

        </>
    )
}
export default PromotionBannerComponent;