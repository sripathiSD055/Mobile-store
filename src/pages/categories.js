import { Typography } from "@mui/material";
import { Link , NavLink, Outlet } from "react-router-dom";

import Json from '../assets/json/jsonData'

const  Categories = () =>{

    return(
        <>
            <h2>Categories</h2>
            {
                Json.Categories.map((navLink , items)=>{
                    return<Link to={'categories/'+navLink.url} key={items}>{navLink.title}</Link>
                })
            }
        </>
    )

}
export default Categories;