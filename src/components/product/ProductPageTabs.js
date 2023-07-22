import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`product-tabpanel-${index}`}
            aria-labelledby={`product-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `product-tab-${index}`,
        'aria-controls': `product-tabpanel-${index}`,
    };
}



export const ProductPageTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%', border: 1, borderColor: 'divider', borderRadius:'5px' }} mb={2}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}
                        textColor='inherit'
                        aria-label="Product tabs"
                        // indicatorColor="primary"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#e52e06",

                            }
                        }}
                    >
                        <Tab sx={{ textTransform: 'capitalize', fontFamily: 'Poppins' }} label="Product Description" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', fontFamily: 'Poppins' }} label="Product review" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'capitalize', fontFamily: 'Poppins' }} label="Shipping & returns" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Typography fontFamily={'Poppins'} variant="body1" color="initial">Product Description</Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Typography fontFamily={'Poppins'} variant="body1" color="initial">Product review</Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Typography fontFamily={'Poppins'} variant="body1" color="initial">Shipping & returns</Typography>
                </CustomTabPanel>
            </Box>

        </>
    )
}
