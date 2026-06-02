import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gal1 from './imgs/gallary-1.jpg';
import gal2 from './imgs/gallary-2.jpg';
import gal3 from './imgs/gallary-3.jpg';

export const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const images = [
    gal1,
    gal2,
    gal3
  ];

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}><img src={img} alt={`Slide ${index}`} style={{width: '80%'}} /></div>
      ))}
    </Slider>
  );
};   