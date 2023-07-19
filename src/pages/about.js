
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
const About_Page = () =>{
    const navigate = useNavigate();
    return(
        <>
            About Page
            {/* <Link to='/about/cart'>cart</Link> */}
            <Button variant="text" color="primary" onClick={() => navigate('cart' , {replace : '/'})}>
              Go to cart
            </Button>
        </>
    )
}
export default About_Page;