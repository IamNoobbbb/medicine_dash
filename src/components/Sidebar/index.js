import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { BsBoxSeamFill } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Sidebar = () => {


    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
    const isOpenSubmenu = (index) => {

        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);

    }

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'>< FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><BsBoxSeamFill /></span>
                            Product
                            <span className='arrow '>< FaAngleRight /></span>
                        </Button>
                        <div className={`submenuwrapper ${activeTab === 1 && isToggleSubmenu === true ? 'openn' : 'closee'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Product list</Link></li>
                                <li><Link to="#">Product View</Link></li>
                                <li><Link to="/product/upload">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`}>
                                <span className='icon'>< RiShoppingCartFill /></span>
                                Orders
                                <span className='arrow'>< FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>

                <br />
                <div className='logoutwrapper'>
                    <div className='logoutbox'>
                        <Button variant="contained">Log Out</Button>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Sidebar;