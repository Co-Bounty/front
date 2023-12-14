'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage={70}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
    >
      <div className="w-[700px] h-[500px] p-2 mx-auto">
        <img src="/images/banner.png" className="w-full h-auto object-cover" />
      </div>
      <div className="w-[700px] h-[500px] p-2 mx-auto">
        <img src="/images/banner2.png" className="w-full h-auto object-cover" />
      </div>
      <div className="w-[700px] h-[500px] p-2 mx-auto">
        <img src="/images/banner3.png" className="w-full h-auto object-cover" />
      </div>
    </Carousel>
  );
};

export default Banner;
