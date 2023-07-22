
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

const About_Page = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container maxWidth="xl">
               <Box >
                    <img></img>
               </Box>
            </Container>
        </>
    )
}
export default About_Page;