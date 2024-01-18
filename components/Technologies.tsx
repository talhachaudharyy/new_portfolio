import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Technologies = () => {
  const technologyImages = [
    '/html.svg',
    '/python.svg',
    '/javascript.svg',
    '/bootstrap.svg',
    '/django.svg',
    '/expo.svg',
    '/git.svg',
    '/github.svg',
    '/mongodb.svg',
    '/nextjs.svg',
    '/react.svg',
    '/sqlite.svg',
    '/tailwind.svg',
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    arrows: false,
    slidesToScroll: 4,
    easing: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">My Tech Stack</h2>
      <p className="text-lg mb-8 text-gray-600">
        Technologies I've been working with recently
      </p>

      <Slider {...sliderSettings} className="mx-auto max-w-screen-lg">
        {technologyImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Technology ${index + 1}`}
            className="mx-2 max-h-16" // Adjusted margin on both sides
          />
        ))}
      </Slider>
    </div>
  );
};

export default Technologies;
