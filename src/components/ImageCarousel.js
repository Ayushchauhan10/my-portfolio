import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import image1 from '../assets/arts/3D Leaf.jpg'
import image2 from '../assets/arts/3D leaf (1).jpg'
import image3 from '../assets/arts/20200329_115408.jpg'
import image4 from '../assets/arts/20200405_105739.jpg'
import image5 from '../assets/arts/20200526_112330.jpg'
import image6 from '../assets/arts/20200529_185235.jpg'
import image7 from '../assets/arts/20201002_170307.jpg'
import image8 from '../assets/arts/20201023_173235.jpg'
import image9 from '../assets/arts/20210228_144112.jpg'
import image10 from '../assets/arts/20210228_224703.jpg'
import image11 from '../assets/arts/Adiyogi.jpg'
import image12 from '../assets/arts/Angry Ram.jpg'
import image13 from '../assets/arts/Ayush Sketch (1).jpg'
import image14 from '../assets/arts/Ayush Sketch (2).jpg'
import image15 from '../assets/arts/Hanuman (O).jpg'
import image16 from '../assets/arts/Realistic Eye.jpg'
import image17 from '../assets/arts/Realistic Ice water.jpg'
import image18 from '../assets/arts/Realistic Water Glass.jpg'

const images = [
    {
      src: image1,
      alt: 'Image 1',
    },
    
    {
      src: image2,
      alt: 'Image 2',
    },
    
    {
      src: image3,
      alt: 'Image 3',
    },
    
    {
      src: image4,
      alt: 'Image 4',
    },
    
    {
      src: image5,
      alt: 'Image 5',
    },
    
    {
      src: image6,
      alt: 'Image 6',
    },
    
    {
      src: image7,
      alt: 'Image 7',
    },
    
    {
      src: image8,
      alt: 'Image 8',
    },
    
    {
      src: image9,
      alt: 'Image 9',
    },
    {
      src: image10,
      alt: 'Image 10',
    },
    {
      src: image11,
      alt: 'Image 11',
    },
    {
      src: image12,
      alt: 'Image 12',
    },
    {
      src: image13,
      alt: 'Image 13',
    },
    {
        src: image14,
        alt: 'Image 14',
    },
    {
        src: image15,
        alt: 'Image 15',
    },
    {
        src: image16,
        alt: 'Image 16',
    },
    {
        src: image17,
        alt: 'Image 17',
    },
    {
      src: image18,
      alt: 'Image 18',
    },
    
  ];

const ImageCarousel = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "center",
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1800,
        cssEase: "linear",
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
    
      
    
    
      return (
        <div className=' w-full mx-auto mt-4 lg:px-4  mb-10'>
          <div className='mx-auto lg:w-[900px]  md:w-[800px] w-[400px] lg:px-3 py-3 '>
    
                  {
              images ? (
                <Slider {...settings} className='lg:mx-3'>
                 {images.map((image, index) => (
                    <div className=' py-3 lg:p-3'>

                    
                        <div className="lg:w-[340px] lg:mx-2 flex items-center justify-center  p-3 lg:h-[400px] w-[250px] h-[300px] box2 lg:p-4   rounded-3xl overflow-hidden shadow-lg">

                          <img src={image.src} alt={image.alt} className="w-full max-h-[99%] rounded-2xl object-fill" />
                       </div>
                       </div>
                  
                    ))}
                </Slider>
              ) : (
                <div className='w-full flex items-center justify-center'>
                     Loading....
                </div>
      )
    }
    
    
          </div>
        </div>


      );
    };
   


export default ImageCarousel;