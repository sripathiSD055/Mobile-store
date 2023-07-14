
import { Box, Grid , Container, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PatternOutlinedIcon from '@mui/icons-material/PatternOutlined';
const FeaturesComponent = () => {

    return (
        <>
            <Box backgroundColor={'#f8f8f8'} py={6} mt={6}>
                <Container maxWidth='xl'>
                    <Grid container justifyContent={'center'} rowSpacing={{xs:5 , sm:10 , md:15}} columnSpacing={{ md: 15,lg: 30 }}>
                        <Grid item xs={12} sm={6} md={4} textAlign={'center'}>
                            <Box component={'div'} mb={2}><LocalShippingOutlinedIcon sx={{fontSize:'60px' , color:'#003049'}} /></Box>
                            <Typography fontSize={{xs:17 , sm:20}} fontWeight={500} mb={2}  fontFamily={'Poppins'} >Free delivery</Typography>
                            <Typography  fontFamily={'Poppins'} fontSize={{xs:14 , sm:16}} color='text.secondary'>And free returns. See checkout for delivery dates.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}   textAlign={'center'}>
                            <Box component={'div'} mb={2}><MonetizationOnOutlinedIcon sx={{fontSize:'60px', color:'#003049'}} /></Box>
                            <Typography fontSize={{xs:17 , sm:20}} fontWeight={500} mb={2} fontFamily={'Poppins'}>Pay monthly at 0% APR</Typography>
                            <Typography fontFamily={'Poppins'} fontSize={{xs:14 , sm:16}} color='text.secondary'>Choose to check out with Apple Card Monthly Installments.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}  textAlign={'center'}>
                            <Box component={'div'} mb={2}><PatternOutlinedIcon sx={{fontSize:'60px', color:'#003049'}} /></Box>
                            <Typography fontSize={{xs:17 , sm:20}}  fontWeight={500} mb={2} fontFamily={'Poppins'} >Personalize it</Typography>
                            <Typography fontFamily={'Poppins'} fontSize={{xs:14 , sm:16}} color='text.secondary'>Engrave your device with your name or a personal note.</Typography>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </>
    )
}
export default FeaturesComponent;