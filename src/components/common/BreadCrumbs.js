import {Breadcrumbs, Container, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const NavBreadCrumbs = (props) => {
    let location = useLocation()
    let newPathname = location.pathname.split('/').filter(x => x)
    return <>
        <Container maxWidth='xl'>
            <Breadcrumbs  mt={5} sx={{ BackgroundColor: '#f8f8f8', padding: '10px 0px' }} separator="›">
                <Link to='/'style={{textTransform:'capitalize',color:'#000' , fontSize:'14px', textDecoration:'none' , fontFamily:'Poppins'}}>Home</Link>
                {
                    newPathname.map((nav, index) => {
                        const routes = `/${newPathname.slice(0, index + 1).join('/')}`
                        const lastRoute = index === newPathname.length - 1
                        return lastRoute ?
                            <Typography key={index} color='muted' fontSize={'14px'} textTransform={'capitalize'} fontFamily={'Poppins'}>{nav}</Typography>
                            :
                            <Link key={index} to={routes} style={{color:'#000' ,fontSize:'14px', textTransform:'capitalize', textDecoration:'none' , fontFamily:'Poppins'}}>{nav}</Link>
                    })
                }
            </Breadcrumbs>
        </Container>

    </>


}
export default NavBreadCrumbs;
