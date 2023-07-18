
import { Box, Button, Container, Typography } from "@mui/material";
import BannerSlider from "../components/home/BannerSliderComponent";
import Style from '../assets/css/main_style.module.css'
import PopularProduct from "../components/home/PopularProductComponents";
import TrendingCategories from "../components/home/TrendingCategoriesComponent";
import CountdownComponent from "../components/home/CountdownComponent";
import LatestProduct from "../components/home/LatestProductComponents";
import FeaturesComponent from "../components/home/FeaturesComponent";
import PromotionBannerComponent from "../components/home/PromotionBannerComponent";
import  jsonData from '../assets/json/jsonData'
const Homepage = () => {     
    return (
        <>
            <BannerSlider />
            <Container maxWidth='xl'>
                <TrendingCategories />
                <PromotionBannerComponent/>
                <LatestProduct />
            </Container>
            <Box component='div' sx={{ background: "url('https://drou-electronics-store.myshopify.com/cdn/shop/files/main-banner-01.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} height={{xs:250 , sm :350 , md:450}} display={'flex'} alignItems={'center'}>
                <Container >
                    <Box sx={{width:{sm:'100%' , md:'50%'}}} textAlign={'center'} >
                        <Typography sx={{fontSize:{xs:'20px' , sm:'30px' , lg:'45px'}}} textAlign='center' fontWeight={600} textTransform={'capitalize'} fontFamily={'Poppins'} color='#003049'>
                            Up to 25% Discount check it Out
                        </Typography>
                        <CountdownComponent />
                        <Button variant='contained' sx={{ mt: 3, textTransform: 'capitalize' }} className={`${Style['bannerbtn']}`}>Shop now</Button>
                    </Box>
                </Container>
            </Box>
            
            <Container maxWidth='xl'>
                <PopularProduct />
            </Container>
            <FeaturesComponent />
        </>
    )
}
export default Homepage;