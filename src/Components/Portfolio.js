import Portfolio1 from "../assets/Frame 11 (1).png";
import Portfolio2 from "../assets/Frame 13 (1).png";
import Portfolio3 from "../assets/Frame 10.png";
import Portfolio4 from "../assets/Frame 10 (1).png";
import Portfolio5 from "../assets/Frame 13 (2).png";
import Portfolio6 from "../assets/Frame 11.png";
import ArrowRight from "../assets/ArrowRight.png";

function Portfolio() {
  const portfolioImages = [
    Portfolio6,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
    Portfolio1,
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-[3cqw] md:gap-[2cqw] pt-[8cqw] md:pt-[3.5cqw]">
        {portfolioImages.map((image, index) => (
          <div className="aspect-[16/12]" key={index}>
            <img
              src={image}
              alt={`portfolio-image-${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[8cqw] md:mt-[4cqw]">
        <div className="cursor-pointer w-auto flex justify-center items-center gap-[2cqw] md:gap-[1.2cqw] rounded-[1cqw] bg-lightBlue px-[8cqw] py-[2cqw] md:px-[5.5cqw] md:py-[1.6cqw] text-24 text-white font-normal">
          View more
          <div className="md:w-[2cqw] aspect-square">
            <img
              src={ArrowRight}
              alt="ArrowRight"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
