import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoCloudUpload } from "react-icons/io5";

const ProductUpload = () => {
    const [categoryVal, setcategoryVal] = useState('');
    const [brandVal, setbrandVal] = useState('');

    const [ratingsvalue, setRatingValue] = useState(1);
    const handleChangeCategory = (event) => {
        setcategoryVal(event.target.value);
    };
    const handleChangeBrand = (event) => {
        setbrandVal(event.target.value);
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 class="mb-0">Product Upload</h5>
                </div>
                <form className="form">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card p-4 mt-0">
                                <h5 class="mb-4">Basic Information</h5>
                                <div className="form-group">
                                    <h6>PRODUCT NAME</h6>
                                    <input type="text" />
                                </div>
                                <div className="form-group">
                                    <h6>DESCRIPTION</h6>
                                    <textarea rows={5} cols={10} />
                                </div>


                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>

                                            <h6>CATEGORY</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }} className='w-100'
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
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>BRAND</h6>
                                            <Select
                                                value={brandVal}
                                                onChange={handleChangeBrand}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }} className='w-100'
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
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>MRP</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>DISCOUNTED PRICE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>RATINGS</h6>
                                            <Rating
                                                name="simple-controlled"
                                                value={ratingsvalue}
                                                onChange={(event, newValue) => {
                                                    setRatingValue(newValue);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='form-group'>
                                            <h6>STOCK</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <Button className='btn-blue btn-lg' variant="contained"><FaCloudUploadAlt />PUBLISH</Button>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 mt-0">
                        <div className='imagesUploadSec'>
                            <h5 className="mb-4">Media And Published</h5>
                            <div className='imgUploadBox d-flex align-items-center'>
                                <div className='uploadBox'>
                                    <span className="remove"><IoIosRemoveCircle /></span>
                                    <div className='box'>
                                        <span className=" lazy-load-image-background blur lazy-load-image-loaded" >
                                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className="w-100" />
                                        </span>

                                    </div>
                                </div>

                                <div className='uploadBox'>
                                    <input type="file" multiple="" name="images" />
                                    <div className='info'>
                                        <span><  IoCloudUpload /></span>
                                        <h5>image upload</h5>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <Button className='btn-blue btn-lg w-100' variant="contained" ><FaCloudUploadAlt />PUBLISH</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}

export default ProductUpload;