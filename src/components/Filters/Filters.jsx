import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from "./Filters.module.css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};



export default function Filters({ filters, selectedFilter, setSelectedFilter }) {

    const handleChange = (event, newValue) => {
        setSelectedFilter(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (

        <div>
            <Tabs value={selectedFilter}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#34C94B"
                    }
                }}>
                {filters.map((ele, idx) => (
                    <Tab className={style.tab} label={ele.label} {...a11yProps(0)} />
                ))}
            </Tabs>
            {filters.map((ele, idx) => (
                    <TabPanel value={ele.label} index={idx}/>
                ))}
        </div> 
    );
}

