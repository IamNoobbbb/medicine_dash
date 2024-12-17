import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { BsBoxSeamFill } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Mycontext } from '../../App';
const Sidebar = () => {


    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context =useContext(Mycontext);

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
                                <li><Link to="/productlist">Product list</Link></li>
                                <li><Link to="/productview">Product View</Link></li>
                                <li><Link to="/productUpload">Product Upload</Link></li>
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
                        <Button >Log Out</Button>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Sidebar;