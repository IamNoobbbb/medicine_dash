import React from "react";
import { MdBrandingWatermark } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";



import Slider from "react-slick";


const ProductDetails = () => {

    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 class="mb-0">Product view</h5>
                </div>
                <div className="card productDetailsSEction">

                    <div className="row">
                        <div className="col-md-5 pt-2 p-3">
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h5 class="mb-4">Product Gallery</h5>
                                <Slider {...productSliderOptions} className="sliderBig mb-2">
                                    <div className="item" style="width: 100%; display: inline-block;">
                                        <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100" className="w-100" />
                                    </div>
                                </Slider>
                                <Slider {...productSliderSmlOptions} className="sliderSml mb-2">
                                    <div className="item" style="width: 100%; display: inline-block;">
                                        <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100" className="w-100" />
                                    </div>
                                    <div className="item" style="width: 100%; display: inline-block;">
                                        <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100" className="w-100" />
                                    </div>
                                    <div className="item" style="width: 100%; display: inline-block;">
                                        <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100" className="w-100" />
                                    </div>
                                    <div className="item" style="width: 100%; display: inline-block;">
                                        <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100" className="w-100" />
                                    </div>
                                    <div className="item" style="width: 100%; display: inline-block;">
                                        <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100" className="w-100" />
                                    </div>
                                    <div className="item" style="width: 100%; display: inline-block;">
                                        <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100" className="w-100" />
                                    </div>
                                    <div className="item" style="width: 100%; display: inline-block;">
                                        <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100" className="w-100" />
                                    </div>
                                </Slider>
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className=" pt-3 pb-3 pl-4 pr-4">
                                <h5 className="mb-4">Product Details</h5>
                                <h4>Paracetamol</h4>
                                <div className="productInfo mt-4">
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdBrandingWatermark /></span>
                                            <span className="name">Brand</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>Apollo</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><TbCategoryFilled /></span>
                                            <span className="name">Category</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>Medicine</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><IoPricetagsSharp /></span>
                                            <span className="name">Price</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <del className="old">₹50.00</del>
                                            <span className="new text-danger">₹10.00</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><FaShoppingCart /></span>
                                            <span className="name">Category</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <span>10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" pt-3 pb-3 pl-4 pr-4">
                            <h5 className="mt-4 mb-4">Product Description</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default ProductDetails;