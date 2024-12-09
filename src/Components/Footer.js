import logo from "../assets/Logo.webp";
import fb from "../assets/Facebook.png";
import ig from "../assets/Instagram.png";
import ln from "../assets/Linkedin.png";
import yt from "../assets/Youtube.png";
import tw from "../assets/Twitter.png";
import msg from "../assets/EnvelopeSimple.png";
function Footer() {
  return (
    <footer className="py-[12cqw] px-[4cqw] md:pt-[6cqw] md:pb-[4cqw] md:px-[6cqw] bg-darkBlue grid md:grid-cols-3">
      <div>
        <div className="w-[12cqw] md:w-[5cqw] h-auto">
          <img className="w-full h-full object-cover" src={logo} alt="logo" />
        </div>
        <h2 className="text-36 font-inter font-semibold text-white pt-[1.2cqw] md:pt-[0.8cqw]">
          Navytech
        </h2>
        <div className="text-20 font-outfit text-white leading-6 pt-[4cqw] md:pt-[2cqw]">
          hello@navytech.com <br />
          Phone : +01 23456789
        </div>
        <div className="flex items-center gap-[1cqw] md:gap-[0.8cqw] pt-[4cqw] md:pt-[2.5cqw]">
          <img
            src={fb}
            alt="fb"
            className="w-[8cqw] md:w-[3.5cqw] aspect-square cursor-pointer"
          />
          <img
            src={tw}
            alt="fb"
            className="w-[8cqw] md:w-[3.5cqw] aspect-square cursor-pointer"
          />
          <img
            src={ig}
            alt="fb"
            className="w-[8cqw] md:w-[3.5cqw] aspect-square cursor-pointer"
          />
          <img
            src={ln}
            alt="fb"
            className="w-[8cqw] md:w-[3.5cqw] aspect-square cursor-pointer"
          />
          <img
            src={yt}
            alt="fb"
            className="w-[8cqw] md:w-[3.5cqw] aspect-square cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 pt-[8cqw] md:pt-0">
        <div>
          <h3 className="font-inter text-24 text-white font-semibold">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-[1.4cqw] md:gap-[0.8cqw] pt-[4cqw] md:pt-[1.2cqw] text-16 text-white font-inter">
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Testimonial</li>
          </ul>
        </div>
        <div>
          <h3 className="font-inter text-24 text-white font-semibold">
            Resources
          </h3>
          <ul className="flex flex-col gap-[1.4cqw] md:gap-[0.8cqw] pt-[4cqw] md:pt-[1.2cqw] text-16 text-white font-inter">
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="pt-[8cqw] md:pt-0">
        <h3 className="font-inter text-24 text-white font-semibold">
          Subscribe
        </h3>
        <div className="bg-gray-800 p-[1.5cqw] md:p-[1cqw] mt-[4cqw] md:mt-[1.2cqw] rounded-[1cqw] md:rounded-[0.6cqw] flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={msg}
              alt="msg"
              className="w-[5cqw] md:w-[1.8cqw] aspect-square"
            />
            <input
              className="bg-transparent focus-none outline-none placeholder:opacity-70 p-[1.2cqw] md:p-[0.8cqw] text-20 text-white font-inter"
              placeholder="name@domain.com"
            />
          </div>

          <button className="bg-lightBlue md:py-[0.8cqw] px-[8cqw] py-[2cqw] md:px-[4cqw] opacity-100 rounded-[1cqw md:rounded-[0.6cqw] text-white text-20">
            Send
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
