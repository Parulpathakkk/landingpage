import logo from "../assets/Logo.webp";
import searchicon from "../assets/icosearch.webp";
import callicon from "../assets/callicon.png";

function Header() {
  return (
    <header className="bg-darkBlue p-[4cqw] md:px-[6.5cqw] md:py-[1.2cqw] mx-auto fixed top-0 w-full z-[99] flex justify-between items-center text-white">
      <div className="w-[11cqw] md:w-[3.5cqw] h-auto">
        <img className="w-full h-full object-cover" src={logo} alt="logo" />
      </div>
      <div className="hidden md:block">
        <ul className="flex justify-between items-center md:gap-[3.5cqw] text-20">
          <li className="cursor-pointer group">
            <span class="relative transition-all duration-500 cursor-pointer hover:text-white after:max-w-0 group-hover:after:max-w-[70%] after:origin-left after:transition-all after:absolute after:w-full after:h-[.13vw] after:rounded-full after:bg-white after:top-[105%] after:left-0">
              Services
            </span>
          </li>
          <li className="cursor-pointer group">
            <span class="relative transition-all duration-500 cursor-pointer hover:text-white after:max-w-0 group-hover:after:max-w-[70%] after:origin-left after:transition-all after:absolute after:w-full after:h-[.13vw] after:rounded-full after:bg-white after:top-[105%] after:left-0">
              Porftfolio
            </span>
          </li>
          <li className="cursor-pointer group">
            <span class="relative transition-all duration-500 cursor-pointer hover:text-white after:max-w-0 group-hover:after:max-w-[70%] after:origin-left after:transition-all after:absolute after:w-full after:h-[.13vw] after:rounded-full after:bg-white after:top-[105%] after:left-0">
              {" "}
              About us
            </span>
          </li>
          <li className="cursor-pointer group">
            <span class="relative transition-all duration-500 cursor-pointer hover:text-white after:max-w-0 group-hover:after:max-w-[70%] after:origin-left after:transition-all after:absolute after:w-full after:h-[.13vw] after:rounded-full after:bg-white after:top-[105%] after:left-0">
              Testimonial
            </span>
          </li>
          <li className="cursor-pointer group">
            <button className="md:w-[1.5cqw] aspect-square">
              <img
                className="w-full h-full object-cover"
                src={searchicon}
                alt="search-icon"
              />
            </button>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer flex justify-center items-center gap-[2cqw] md:gap-[0.5cqw] border-[0.05cqw] rounded-[1cqw] md:rounded-[0.6cqw] border-white px-[3.5cqw] py-[1.8cqw] md:px-[1.8cqw] md:py-[0.7cqw] text-20">
        <div className="w-[4cqw] md:w-[1.2cqw] aspect-square">
          <img
            src={callicon}
            alt="call-icon"
            className="w-full h-full object-cover"
          />
        </div>
        Talk to us
      </div>
    </header>
  );
}

export default Header;
