import React from "react";
import Slider from "react-slick";
import Img1 from "./../../img/slide/img-01.png";
import Img2 from "./../../img/slide/img-02.png";
import Img3 from "./../../img/slide/img-03.png";
import Img4 from "./../../img/slide/img-04.png";
import Img5 from "./../../img/slide/img-05.png";
import Img6 from "./../../img/slide/img-06.png";
import Img7 from "./../../img/slide/img-07.png";
import Img8 from "./../../img/slide/img-08.png";
import Img9 from "./../../img/slide/img-09.png";
import Img10 from "./../../img/slide/img-10.png";
import Img11 from "./../../img/slide/img-11.png";
import Img12 from "./../../img/slide/img-12.png";
import Img13 from "./../../img/slide/img-13.png";
import Img14 from "./../../img/slide/img-14.png";
import Img15 from "./../../img/slide/img-15.png";

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <>
            <section className="slider-box">
                <Slider {...settings}>
                    <img src={Img1} alt="slider img" />
                    <img src={Img2} alt="slider img" />
                    <img src={Img3} alt="slider img" />
                    <img src={Img4} alt="slider img" />
                    <img src={Img5} alt="slider img" />
                    <img src={Img6} alt="slider img" />
                    <img src={Img7} alt="slider img" />
                    <img src={Img8} alt="slider img" />
                    <img src={Img9} alt="slider img" />
                    <img src={Img10} alt="slider img" />
                    <img src={Img11} alt="slider img" />
                    <img src={Img12} alt="slider img" />
                    <img src={Img13} alt="slider img" />
                    <img src={Img14} alt="slider img" />
                    <img src={Img15} alt="slider img" />
                </Slider>
            </section>
        </>
    );
}

export default ImgSlider;
