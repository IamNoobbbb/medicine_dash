import DashboardBox from "./components/dashboardBox";
import { FaCircleUser } from "react-icons/fa6";
import { ImCart } from "react-icons/im";
import { AiFillProduct } from "react-icons/ai";
import { MdReviews } from "react-icons/md";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { Button } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Pagination from '@mui/material/Pagination';
import Product from "../Product";


const Dashboard = () => {

    const [showby, setshowby] = useState('');
    const [catby, setcatby] = useState('');
    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardboxwrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardboxwrapper d-flex">
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaCircleUser />} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<ImCart />} />
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<AiFillProduct />} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdReviews />} />

                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box">
                            <p>hbahjxbh</p>
                        </div>

                    </div>
                </div>

                


                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Product</h3>

                    <div className="row cardfilters mt-3">

                        <div className="col-md-3">
                            <h4 >Show By</h4>
                            <Select
                                value={showby}
                                onChange={(event) => setshowby(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>
                        <div className="col-md-3">
                            <h4>Category By</h4>
                            <Select
                                value={catby}
                                onChange={(event) => setcatby(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>
                    </div>


                    <div className="table-responsive mt-3">
                        <table className="table table-bordered table-striped v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div class="imgWrapper">
                                                <div class="img card shadow m-0">
                                                    <img src="https://images.apollo247.in/pub/media/catalog/product/P/A/PAC0003_1_1.jpg?tr=q-80,f-webp,w-100,dpr-1,c-at_max" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>paracetamol</h6>
                                                <p>ajksfkjasbfvahsvbahjsbvasjhvbvsfdfavadsvavsdvasvavav</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>medicine</td>
                                    <td>apollo</td>
                                    <td>
                                        <div style={{ width: '70p' }}>
                                            <del class="old">₹50.00</del>
                                            <span class="new text-danger">₹10.00</span>
                                        </div>
                                    </td>
                                    <td>10</td>
                                    <td>4</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary"><FaEye /></Button>
                                            <Button color="primary"><FaPencilAlt /></Button>
                                            <Button color="error"><RiDeleteBinFill /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div class="imgWrapper">
                                                <div class="img card shadow m-0">
                                                    <img src="https://images.apollo247.in/pub/media/catalog/product/P/A/PAC0003_1_1.jpg?tr=q-80,f-webp,w-100,dpr-1,c-at_max" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>paracetamol</h6>
                                                <p>ajksfkjasbfvahsvbahjsbvasjhvbvsfdfavadsvavsdvasvavav</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>medicine</td>
                                    <td>apollo</td>
                                    <td>
                                        <div style={{ width: '70p' }}>
                                            <del class="old">₹50.00</del>
                                            <span class="new text-danger">₹10.00</span>
                                        </div>
                                    </td>
                                    <td>10</td>
                                    <td>4</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary"><FaEye /></Button>
                                            <Button color="primary"><FaPencilAlt /></Button>
                                            <Button color="error"><RiDeleteBinFill /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div class="imgWrapper">
                                                <div class="img card shadow m-0">
                                                    <img src="https://images.apollo247.in/pub/media/catalog/product/P/A/PAC0003_1_1.jpg?tr=q-80,f-webp,w-100,dpr-1,c-at_max" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>paracetamol</h6>
                                                <p>ajksfkjasbfvahsvbahjsbvasjhvbvsfdfavadsvavsdvasvavav</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>medicine</td>
                                    <td>apollo</td>
                                    <td>
                                        <div style={{ width: '70p' }}>
                                            <del class="old">₹50.00</del>
                                            <span class="new text-danger">₹10.00</span>
                                        </div>
                                    </td>
                                    <td>10</td>
                                    <td>4</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary"><FaEye /></Button>
                                            <Button color="primary"><FaPencilAlt /></Button>
                                            <Button color="error"><RiDeleteBinFill /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div class="imgWrapper">
                                                <div class="img card shadow m-0">
                                                    <img src="https://images.apollo247.in/pub/media/catalog/product/P/A/PAC0003_1_1.jpg?tr=q-80,f-webp,w-100,dpr-1,c-at_max" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>paracetamol</h6>
                                                <p>ajksfkjasbfvahsvbahjsbvasjhvbvsfdfavadsvavsdvasvavav</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>medicine</td>
                                    <td>apollo</td>
                                    <td>
                                        <div style={{ width: '70p' }}>
                                            <del class="old">₹50.00</del>
                                            <span class="new text-danger">₹10.00</span>
                                        </div>
                                    </td>
                                    <td>10</td>
                                    <td>4</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary"><FaEye /></Button>
                                            <Button color="primary"><FaPencilAlt /></Button>
                                            <Button color="error"><RiDeleteBinFill /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div class="imgWrapper">
                                                <div class="img card shadow m-0">
                                                    <img src="https://images.apollo247.in/pub/media/catalog/product/P/A/PAC0003_1_1.jpg?tr=q-80,f-webp,w-100,dpr-1,c-at_max" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>paracetamol</h6>
                                                <p>ajksfkjasbfvahsvbahjsbvasjhvbvsfdfavadsvavsdvasvavav</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>medicine</td>
                                    <td>apollo</td>
                                    <td>
                                        <div style={{ width: '70p' }}>
                                            <del class="old">₹50.00</del>
                                            <span class="new text-danger">₹10.00</span>
                                        </div>
                                    </td>
                                    <td>10</td>
                                    <td>4</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary"><FaEye /></Button>
                                            <Button color="primary"><FaPencilAlt /></Button>
                                            <Button color="error"><RiDeleteBinFill /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div class="imgWrapper">
                                                <div class="img card shadow m-0">
                                                    <img src="https://images.apollo247.in/pub/media/catalog/product/P/A/PAC0003_1_1.jpg?tr=q-80,f-webp,w-100,dpr-1,c-at_max" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="info pl-3">
                                                <h6>paracetamol</h6>
                                                <p>ajksfkjasbfvahsvbahjsbvasjhvbvsfdfavadsvavsdvasvavav</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>medicine</td>
                                    <td>apollo</td>
                                    <td>
                                        <div style={{ width: '70p' }}>
                                            <del class="old">₹50.00</del>
                                            <span class="new text-danger">₹10.00</span>
                                        </div>
                                    </td>
                                    <td>10</td>
                                    <td>4</td>
                                    <td>50</td>
                                    <td>100</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button color="secondary"><FaEye /></Button>
                                            <Button color="primary"><FaPencilAlt /></Button>
                                            <Button color="error"><RiDeleteBinFill /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                        <div className="d-flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" shape="rounded" className="pagination" showFirstButton showLastButton/>
                        </div>

                    </div>
                </div>
                

            </div>
        </>
    )

}

export default Dashboard;