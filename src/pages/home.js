
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import BannerSlider from "../components/home/BannerSliderComponent";
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import Style from '../assets/css/main_style.module.css'
import PopularProduct from "../components/home/PopularProductComponents";

const Homepage = () => {
    const BannerData = [
        { icon: <MoreTimeOutlinedIcon />, Details: '24/7 Free Support' },
        { icon: <AccountBalanceOutlinedIcon />, Details: 'Secure Payment' },
        { icon: <CardGiftcardOutlinedIcon />, Details: 'Special Gift cards' },
        { icon: <DirectionsBoatOutlinedIcon />, Details: 'World wide shipping' },
    ]
    const Custombanner = [
        {
            Title1: 'Big Discount',
            discount: '60% Off',
            Title2: 'Brand new Vivo Y100',
            button: 'shop now',
            image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1675665170366/03a75d13718658a42103142adc9c306c.png'
        },
        {
            Title1: 'Big Discount',
            discount: '40% Off',
            Title2: 'Samsung s23 ultra',
            button: 'shop now',
            image:'https://images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-s918-sm-s918bzkqmea-534853556?$650_519_PNG$'  
        },
       
    ]
    return (
        <>
            <BannerSlider />
            <Container maxWidth='xl'>
                <Grid container spacing={3} mb={5} className={`${Style['home_custom_section']}`}>
                    {Custombanner.map((data) => {
                        return (
                            <Grid item key={data} xs={6}>
                                <Box className={`${Style['home_custom_banner']}`} display={'flex'} p={2}>
                                    <Box>
                                        <Typography fontSize={16} textTransform={'uppercase'}   fontFamily={'Poppins'} >{data.Title1}</Typography>
                                        <Typography fontSize={30} fontWeight={700} color={'#003049'} textTransform={'uppercase'} fontFamily={'Poppins'}  mb={1}>{data.discount}</Typography>
                                        <Typography fontSize={25} mb={2} color={'#d62828'} fontWeight={600} textTransform={'capitalize'} fontFamily={'Poppins'} >{data.Title2} </Typography>
                                        <Button variant='contained' textTransform={'capitalize'}>{data.button}</Button>
                                    </Box>
                                    <Box className={`${Style['home_cb_img']}`}>
                                        <img src={data.image}></img>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container spacing={3} mb={5}>
                    {BannerData.map((data) => {
                        return (
                            <Grid item key={data} xs={3}>
                                <Box textAlign={'center'} className={`${Style['home_service']}`} py={4}>
                                    <Typography className={`${Style['home_service_icon']}`} fontWeight={400}>{data.icon}</Typography>
                                    <Typography className={`${Style['home_service_text']}`}>{data.Details}</Typography>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
                <PopularProduct />
            </Container>

        </>
    )
}
export default Homepage;