import Slider from "react-slick";

const BannerSilder = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000
  };

  return (
    <div>
      <Slider
        className="min-w-screen sm:-mt-270 md:-mt-250 lg:-mt-200 pb-[30px]"
        {...settings}
      >
        <img src="./image/mc-slider-01.jpg" alt="slider" />
        <img src="./image/mc-slider-02.jpg" alt="slider" />
        <img src="./image/mc-slider-03.jpg" alt="slider" />
        <img src="./image/mc-slider-04.jpg" alt="slider" />
        <img src="./image/mc-slider-05.jpg" alt="slider" />
        <img src="./image/mc-slider-06.jpg" alt="slider" />
        <img src="./image/mc-slider-07.jpg" alt="slider" />
        <img src="./image/mc-slider-08.jpg" alt="slider" />
        <img src="./image/mc-slider-09.jpg" alt="slider" />
        <img src="./image/mc-slider-10.jpg" alt="slider" />
      </Slider>
    </div>
  );
};

export default BannerSilder;
