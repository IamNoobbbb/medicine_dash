import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { Button } from "@mui/material";
import { MdOutlineMenuOpen } from "react-icons/md";

import SearchBox from "../SearchBox";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { useContext } from 'react';
import {Mycontext} from '../../App';



const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const context =useContext(Mycontext)


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-2.5 part1">
                            <Link to={'/'}><img src={logo} className="logo" /></Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className="rounded-circle mr-3"><MdOutlineMenuOpen /></Button>
                            <SearchBox />

                        </div>

                        <div className="col-sm-6 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3">< MdLightMode /></Button>
                            <Button className="rounded-circle mr-3"><FaCartPlus /></Button>
                            <Button className="rounded-circle mr-3"><MdOutlineMarkEmailUnread /></Button>
                            <Button className="rounded-circle mr-3"><FaBell /></Button>




                            {
                                context.islogin !== true ?
                                    <Link to={'/signIn'}><Button className="btn-blue mr-3" variant="contained">Sign In</Button></Link>
                                    :
                                    <div className="myacc d-flex align-items-center">
                                        <div className="userimg">
                                            <span className="rounded-circle">
                                                <Button className="rounded-circle mr-3" onClick={handleClick}><FaUserNurse /></Button>
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    id="account-menu"
                                                    open={open}
                                                    onClose={handleClose}
                                                    onClick={handleClose}
                                                    slotProps={{
                                                        paper: {
                                                            elevation: 0,
                                                            sx: {
                                                                overflow: 'visible',
                                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                                mt: 1.5,
                                                                '& .MuiAvatar-root': {
                                                                    width: 32,
                                                                    height: 32,
                                                                    ml: -0.5,
                                                                    mr: 1,
                                                                },
                                                                '&::before': {
                                                                    content: '""',
                                                                    display: 'block',
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    right: 14,
                                                                    width: 10,
                                                                    height: 10,
                                                                    bgcolor: 'background.paper',
                                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                                    zIndex: 0,
                                                                },
                                                            },
                                                        },
                                                    }}
                                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                >

                                                    <MenuItem onClick={handleClose}>
                                                        <Avatar /> My account
                                                    </MenuItem>
                                                    <Divider />
                                                    <MenuItem onClick={handleClose}>
                                                        <ListItemIcon>
                                                            <PersonAdd fontSize="small" />
                                                        </ListItemIcon>
                                                        Add another account
                                                    </MenuItem>

                                                    <MenuItem onClick={handleClose}>
                                                        <ListItemIcon>
                                                            <Logout fontSize="small" />
                                                        </ListItemIcon>
                                                        Logout
                                                    </MenuItem>
                                                </Menu>
                                            </span>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header;