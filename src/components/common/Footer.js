
import { Box, Container, Grid, Typography } from "@mui/material"
import Style from '../../assets/css/main_style.module.css';
import  jsonData from '../../assets/json/jsonData';


const Footer = () => {
    return (
        <>
            <Box sx={{backgroundColor:'#000'}}>
                <Container maxWidth='xl'>
                    <Box component='div' py={5} >
                        <Grid container spacing={1}>
                            {
                                jsonData.footerData.map((footercolumns, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Typography  fontSize={{xs:18 , sm:20 , md:23}} mb={2} fontFamily={'Poppins'} fontWeight={500} color={'#fff'}>
                                                {footercolumns.Footerheading}
                                            </Typography>
                                            <Typography  mb={2} display={'block'} sx={{ textDecoration: 'none' }} color={'#fff'} className={`${Style['footer_link']}`}  component={'a'} href='/' fontSize={14} fontFamily={'Poppins'}>
                                                {footercolumns.Footertext1}
                                            </Typography>
                                            <Typography  mb={2} display={'block'} sx={{ textDecoration: 'none' }} color={'#fff'} className={`${Style['footer_link']}`}  component={'a'} href='/' fontSize={14} fontFamily={'Poppins'}>
                                                {footercolumns.Footertext2}
                                            </Typography>
                                            <Typography  mb={2} display={'block'} sx={{ textDecoration: 'none' }} color={'#fff'} className={`${Style['footer_link']}`}  component={'a'} href='/' fontSize={14} fontFamily={'Poppins'}>
                                                {footercolumns.Footertext3}
                                            </Typography>
                                            <Typography  mb={2} display={'block'} sx={{ textDecoration: 'none' }} color={'#fff'} className={`${Style['footer_link']}`}  component={'a'} href='/' fontSize={14} fontFamily={'Poppins'}>
                                                {footercolumns.Footertext4}
                                            </Typography>
                                        </Grid>
                                    )
                                })
                            }
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography  fontSize={{xs:18 , sm:20 , md:23}} mb={2} fontFamily={'Poppins'} color={'#fff'} fontWeight={500}>
                                    Download Our App
                                </Typography>
                                <Typography  mb={4} fontSize={14} fontFamily={'Poppins'} color={'#fff'} >
                                    Download our App and get extra 15% Discount on your first Order..!
                                </Typography>
                                <img src='https://cdn.shopify.com/s/files/1/0495/8021/2387/files/app-store.jpg' className={`${Style['footer_store_img']}`}></img>
                                <img src='	https://cdn.shopify.com/s/files/1/0495/8021/2387/files/google-play.jpg' className={`${Style['footer_store_img']}`} ></img>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box py={2} sx={{ backgroundColor: '#f8f8f8' }} >
                <Container maxWidth='xl'>
                    <Typography color="text.secondary" textAlign={'center'} fontSize={14} fontFamily={'Poppins'} >
                        Copyright ©  Company | Built with React js by Sripathi.
                    </Typography>
                </Container>
            </Box>
        </>
    )
}   
export default Footer