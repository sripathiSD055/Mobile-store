import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Json from '../assets/json/jsonData'
import { useState } from "react";
import Style from '../assets/css/main_style.module.css'
import ProductCard from "../components/product/ProductcardComponent";
const Categories = () => {

    const [sortBy, setSortBy] = useState('relevance');
    const handleChange = (event) => {
        setSortBy(event.target.value);
    };
    const location = useLocation();
    let categoriesTitle = location.pathname.split('/').filter(x => x)


    const [isGrid, setIsGrid] = useState(true)

    const viewAsGrid = () => {
        setIsGrid(true)
    }
    const viewAsList = () => {
        setIsGrid(false)
    }
    return (
        <>

            <Container maxWidth='xl' >
                <Grid container spacing={{sm:2}} mt={1} mb={5}>
                    <Grid item xs={2} sx={{display:{lg:'block' , xs:'none'}}}>
                        <Box sx={{ border: '2px solid #f8f8f8', padding: '10px 20px', borderRadius: '5px', height: '100%' }}>
                            <Box mb={2} >
                                <Typography variant="body1" color="initial" fontSize={'18px'} mb={1} fontFamily={'Poppins'}>All Categories</Typography>
                                {
                                    Json.Categories.map((catename, index) => {
                                        return <NavLink style={{ display: 'block', textTransform: 'capitalize', padding: '5px 15px', textDecoration: 'none', fontSize: '16px', color: '#00000099', fontFamily: 'Poppins' }} key={index} to={catename.url}>{catename.title}</NavLink>
                                    })
                                }
                            </Box>
                            <Box>
                                <Typography variant="body1" color="initial" fontSize={'18px'} mb={1} fontFamily={'Poppins'}>All Brands</Typography>
                                {
                                    Json.BrandName.map((name, index) => {
                                        return <NavLink style={{ display: 'block', textTransform: 'capitalize', padding: '5px 15px', textDecoration: 'none', fontSize: '16px', color: '#00000099', fontFamily: 'Poppins' }} key={index} to={name}>{name}</NavLink>
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <Box borderRadius={'5px'} border={'2px solid #f8f8f8'} padding={{xs:'10px' , sm:'10px 20px'}}>
                            <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} gap={1} >
                                <Typography fontFamily={'Poppins'} fontSize={'18px'} textTransform={'capitalize'}>{categoriesTitle.slice(-1)}</Typography>
                                <Box display='flex' alignItems={'center'} gap={1}>
                                    <Typography fontFamily={'Poppins'} fontSize={'14px'} whiteSpace={'nowrap'}>Sort By : </Typography>
                                    <FormControl sx={{ minWidth: {xs:'100px' , sm: '200px'} }} >
                                        <Select sx={{ fontSize: '14px', padding: 0, fontFamily: 'Poppins' }}
                                            className={`${Style['sortbyBtn']}`}
                                            value={sortBy}
                                            onChange={handleChange}
                                            displayEmpty
                                        >
                                            <MenuItem value={'relevance'}>Relevance</MenuItem>
                                            <MenuItem value={'low-high'}>Price : low - high</MenuItem>
                                            <MenuItem value={'high-low'}>Price : high - low</MenuItem>
                                            <MenuItem value={'A-Z'}>Order : A - Z</MenuItem>
                                            <MenuItem value={'Z-A'}>Order : Z - A</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Box display='flex' alignItems={'center'} gap={{ xs : 0 ,sm: 1}}>
                                        <IconButton aria-label="gridView" onClick={viewAsGrid}>
                                            <GridViewOutlinedIcon sx={{ color: '#000' }} />
                                        </IconButton>
                                        <IconButton aria-label="gridView" onClick={viewAsList}>
                                            <ViewListOutlinedIcon sx={{ color: '#000' }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                        <Box mt={2}>
                            <Grid container spacing={2}>
                                {
                                    Json.productData.map((items, index) => {
                                        return <Grid item key={index} lg={isGrid ? 3 : 12} md={isGrid ? 4 : 12} sm={isGrid ? 6 : 12} xs={12}>
                                            <ProductCard viewType={isGrid} productId={items.product_id} productTitle={items.product_title} productimg={items.product_img} productprice={items.price} productDes={items.product_des} />
                                        </Grid>
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )

}
export default Categories;