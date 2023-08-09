
import { Box, Button, Grid,  TextField, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import { useState } from "react";
import CardMedia from '@mui/material/CardMedia';
import Style from '../../assets/css/main_style.module.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';



const ProductQuickview = (props) => {
    const [TotalQuantity, setTotalQuantity] = useState('1');
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

    
    return (
        <>
            <Modal
                open={props.ModalOpen}
                onClose={props.ModalClose}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50%',
                    bgcolor: 'background.paper',
                    borderRadius: '10px',
                    boxShadow: 24,
                    p: 4,
                    zIndex: 1,
                }} >
                    <Grid container spacing={5} >
                        <Grid item md={6}>
                            <Box>
                                <Grid container spacing={2} >
                                    <Grid item xs={2}>
                                        image upload
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Box sx={{ border: '4px solid #f8f8f8' }} overflow={'hidden'}><CardMedia title="" src={props.ProductImg} sx={{ objectFit: 'contain', width: '100%' }} component='img' height={'auto'} /></Box></Grid>
                                </Grid>
                            </Box>

                        </Grid>
                        <Grid item md={6}>
                            <Typography sx={{ fontSize: 25, fontWeight: 500 }} color="#000" fontFamily={'Poppins'} mb={2}>
                                {props.ProductTitle}
                            </Typography>
                            <Typography sx={{ fontSize: '12px', padding: '2px 5px', borderRadius: '2px' }} color="#e52e06" fontFamily={'Poppins'} bgcolor={'#e52e0621'} display={'inline'}>
                                In Stock
                            </Typography>

                            <Typography sx={{ fontSize: '14px', padding: '2px 5px', borderRadius: '2px', display: '-webkit-box', WebkitLineClamp: '2', overflow: 'hidden', textOverflow: 'ellipsis', WebkitBoxOrient: 'vertical' }} mt={2} fontFamily={'Poppins'}>
                                {props.ProductDes}
                            </Typography>

                            <Typography sx={{ fontSize: '23px', padding: '2px 5px', borderRadius: '2px' }} mt={2} fontFamily={'Poppins'}>
                                ${props.ProductPrice}
                            </Typography>

                            <Box mt={1}>
                                <Typography mb={2}>Quantity</Typography>
                                <Box display={'flex'} gap={1} mb={2}>
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
                                    <Button fullWidth variant='outlined'   color='inherit' sx={{border:'1px solid #e52e06' , color:'#e52e06',}}>Add To Cart</Button>
                                </Box>
                                <Button fullWidth variant="contained"  color='error' sx={{backgroundColor:'#e52e06'}}>Buy Now</Button>
                                <Box mt={2} display={'flex'} gap={1}>
                                    <Button color='error' sx={{backgroundColor:'#e52e06'}} startIcon={<FavoriteBorderOutlinedIcon />}>Add to wishlist</Button>
                                    <Button color='error' sx={{backgroundColor:'#e52e06'}} startIcon={<CompareOutlinedIcon />}>Compare</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
export default ProductQuickview