import { useEffect } from "react";
import PaintBrush from "../assets/PaintBrush.png";
import CreditCard from "../assets/CreditCard.png";
import DeviceMobile from "../assets/DeviceMobile.png";
import GlobeHemisphereWest from "../assets/GlobeHemisphereWest.png";
import arrow from "../assets/CaretRight (2).png";
import servicesData from "../Data/servicesData.json";
import AOS from "aos";
import "aos/dist/aos.css";


const images = {
  PaintBrush,
  CreditCard,
  DeviceMobile,
  GlobeHemisphereWest,
};

function Services() {
  useEffect(() => {
    AOS.init({    
    });
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[6cqw] md:gap-[2cqw] md:pt-[3.5cqw] pt-[8cqw]" data-aos="zoom-in" data-aos-duration='2000'> 
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="border-[#F0F5FF] border-[0.2cqw] md:border-[0.08cqw] hover:bg-[#F0F5FF] transition-all cursor-pointer py-[6cqw] md:py-[3cqw] md:px-[1.5cqw] flex flex-col gap-[5cqw] md:gap-[2cqw] items-center"
        >
          <div className="w-[12cqw] md:w-[6cqw]">
            <img
              src={images[service.image]}
              alt={service.altText}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-24 font-semibold text-darkBlue text-center">
              {service.title}
            </h4>
            <p className="text-16 text-darkBlue text-center pt-[2cqw] md:pt-[0.5cqw]">
              {service.description}
            </p>
          </div>
          <div className="flex justify-center items-center md:gap-[.6cqw] cursor-pointer text-16 text-lightBlue font-normal font-inter">
            View details
            <div className="md:w-[1.2cqw]">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
