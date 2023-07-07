import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
const SliderComponent = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ce2a9f11068a9e65.jpg?q=20" />
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ec99b461d4e3de8.jpg?q=20" />
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/33261289f97a67e9.png?q=20" />
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/76fe4ec93bc12a06.jpg?q=20" />
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/05cdea6dbe08c481.jpg?q=20" />
                </div>
            </Slider>
        </div>
    );
}

export default SliderComponent;