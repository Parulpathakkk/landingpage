import Frame from "../assets/frame.png";
import Vision from "../assets/Eye.png";
import Target from "../assets/Target.png";
import ArrowRight from "../assets/ArrowRight.png";
function About() {
  return (
    <div className="grid md:grid-cols-2 md:gap-[2cqw] pt-[8cqw] md:pt-[3.5cqw]">
      <div>
        <img src={Frame} alt="frame" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-between pt-[6cqw] md:pt-0">
        <div>
          <p className="text-20 font-inter font-normal text-darkBlue">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing. Bibendum cras fringilla amet suspendisse.
            Duis mattis hac urna fames in ante.
          </p>
          <div className="flex items-center gap-[3cqw] md:gap-[2cqw] pt-[6cqw] md:pt-[2.5cqw]">
            <div className="w-[22cqw] md:w-[7cqw]">
              <img
                src={Vision}
                className="w-full h-full object-cover"
                alt="vision"
              />
            </div>
            <div>
              <h4 className="text-24  font-inter text-darkBlue">
                Our Vision
              </h4>
              <p className="text-20 font-inter font-normal text-darkBlue">
                Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at.
                Id et at dui arcu risus.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[3cqw] md:gap-[2cqw] pt-[6cqw] md:pt-[2.5cqw]">
            <div className="w-[22cqw] md:w-[7cqw]">
              <img
                src={Target}
                className="w-full h-full object-cover"
                alt="target"
              />
            </div>
            <div>
              <h4 className="text-24 font-inter text-darkBlue">Our Mission</h4>
              <p className="text-20 font-inter font-normal text-darkBlue">
                Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at.
                Id et at dui arcu risus.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-auto pt-[8cqw] md:pt-[4cqw]">
          <div className="cursor-pointer w-auto flex justify-center items-center gap-[2cqw] md:gap-[1.2cqw] rounded-[1cqw] bg-lightBlue px-[8cqw] py-[2cqw] md:px-[5.5cqw] md:py-[1.6cqw] text-24 text-white font-normal">
            Read more
            <div className="w-[6cqw md:w-[2cqw] aspect-square">
              <img
                src={ArrowRight}
                alt="ArrowRight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
