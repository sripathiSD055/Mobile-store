
import { Box, Container, Grid, Typography } from "@mui/material";
import BannerSlider from "../components/home/BannerSliderComponent";
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import Style from '../assets/css/main_style.module.css'

const Homepage = () => {
    const BannerData = [
        { icon: <MoreTimeIcon />, Details: '24/7 Free Support' },
        { icon: <CurrencyExchangeIcon />, Details: 'Secure Payment' },
        { icon: <CardGiftcardIcon />, Details: 'Special Gift cards' },
        { icon: <DirectionsBoatIcon />, Details: 'World wide shipping' },
    ]
    return (
        <>
            <BannerSlider />
            <Container maxWidth='xl'>
                <Grid container spacing={3} mb={3}>
                    {BannerData.map((data) => {
                        return (
                            <Grid item key={data} xs={3}>
                                <Box textAlign={'center'} className={`${Style['home_service']}`} py={4}>
                                    <Typography className={`${Style['home_service_icon']}`}>{data.icon}</Typography>
                                    <Typography className={`${Style['home_service_text']}`}>{data.Details}</Typography>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>

                <Grid container spacing={3} mb={3}>
                    {BannerData.map((data) => {
                        return (
                            <Grid item key={data} xs={6}>
                                <Box textAlign={'center'} className={`${Style['home_banner2']}`} py={4}>
                                    <Typography className={`${Style['home_service_icon']}`}>{data.icon}</Typography>
                                    <Typography className={`${Style['home_service_text']}`}>{data.Details}</Typography>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>

            </Container>

        </>
    )
}
export default Homepage;