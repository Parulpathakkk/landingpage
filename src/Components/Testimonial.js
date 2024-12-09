import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import testimoniaImage1 from "../assets/Ellipse 1 (1).png";
import testimoniaImage2 from "../assets/Ellipse 1.png";
import qoutes from "../assets/Quotes.png";
import starFilled from "../assets/Star 5.png";
import star from "../assets/Star 5 (1).png";
import testimonialsData from "../Data/testimonialsData.json";

const images = {
  image1: testimoniaImage1,
  image2: testimoniaImage2,
};

function Testimonial() {
  return (
    <div className="w-full h-full pt-[8cqw] md:pt-[3.5cqw] ">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="w-full bg-white p-[4cqw]  md:px-[2.5cqw] md:pt-[1cqw] md:pb-[2cqw] flex flex-col items-center md:gap-[1cqw] rounded-[1cqw]">
              <div className="w-[8cqw] md:w-[4cqw]">
                <img
                  src={qoutes}
                  alt="qoutes"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-20 font-inter text-darkBlue ">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-[2cqw] md:gap-[1cqw] pt-[4cqw] md:pt-0">
                <div className="w-[12cqw] md:w-[6.5cqw] aspect-square">
                  <img
                    src={images[testimonial.image]}
                    alt={testimonial.altText}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-24 text-darkBlue font-inter font-semibold">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-[1cqw] md:gap-[0.5cqw] pt-[1cqw] md:pt-[0.5cqw]">
                    {Array.from({ length: testimonial.stars }).map(
                      (_, index) => (
                        <img
                          key={index}
                          src={starFilled}
                          alt="filled star"
                          className="w-[3.5cqw] md:w-[1cqw] aspect-square"
                        />
                      )
                    )}
                    {Array.from({ length: 5 - testimonial.stars }).map(
                      (_, index) => (
                        <img
                          key={index + testimonial.stars}
                          src={star}
                          alt="unfilled star"
                          className="w-[3.5cqw] md:w-[1cqw] aspect-square"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
