import * as React from 'react';
import { useState } from 'react';
import { HiDotsVertical } from "react-icons/hi";

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DashboardBox = (props) => {
    {/*
    const options = [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel',
    ];
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };*/}



    return (
        <>

            <div className="dashboardbox" style={{
                backgroundImage: `linear-gradient(to right, ${props.color?.[0]} ,${props.color?.[1]})`
            }}>


                <div className="d-flex w-100">
                    <div className="col1">
                        <h4 className="text-white mb-0">Total Users</h4>
                        <span className="text-white">300</span>
                    </div>
                    <div className="ml-auto">
                        {
                            props.icon ?
                                <span className="icon">
                                    {props.icon ? props.icon : ''}
                                </span>
                                :
                                ''
                        }
                    </div>

                </div>

                <div className="d-flex align-items-center">
                    <h6 className="text-white mb-0 mt-0">Last Month</h6>
                    {/* 
                    <div className='ml-auto'>
                        <span className="ml-auto toggleicon"><HiDotsVertical /></span>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                paper: {
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                    */}

                </div>
            </div>

        </>

    )
}

export default DashboardBox;