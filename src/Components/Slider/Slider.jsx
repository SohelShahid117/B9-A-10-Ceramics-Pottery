import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full  h-[500px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          //   src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          src="https://i.ibb.co/9cdKtQ9/plate.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-[50%] flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          //   src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          src="https://i.ibb.co/SBy23TT/murble-Mug.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-[50%]  flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          //   src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          src="https://i.ibb.co/vDp2fDB/cup.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-[50%]  flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          //   src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          src="https://i.ibb.co/HPjTPJg/mug.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-[50%]  flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
