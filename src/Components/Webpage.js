import Header from "./Header";
import callicon from "../assets/callicon.png";
import heroimage from "../assets/heroimage.png";
import google from "../assets/Google Logotype.png";
import element from "../assets/Element.png";
import amazon from "../assets/Amazon.png";
import sketch from "../assets/Sketch Logotype.png";
import Services from "./Services";
import Porftfolio from "./Portfolio";
import About from "./About";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Footer from "./Footer";

function Webpage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="px-[4cqw] pt-[28cqw] md:pt-[12cqw] pb-[12cqw] xl:pt-0 md:px-[6.5cqw] w-full bg-darkBlue xl:h-screen md:flex justify-between md:pb-[5cqw] md:items-end md:gap-[5cqw] text-white">
          <div className="w-full md:w-[60%]">
            <h1 className="header-text">
              #1 <br className="md:hidden" /> Worldwide Digital{" "}
              <br className="hidden md:block" />
              Solution Agency
            </h1>
            <p className="text-20 md:w-[65%] pt-[6cqw] md:pt-[1.4cqw] md:leading-[1.9cqw] font-inter">
              Revolutionize your global digital strategy with the #1 Worldwide
              Digital Solution Agency, pioneering innovative solutions for
              unparalleled success.
            </p>
            <div className="inline-block">
              <div className="cursor-pointer mt-[6cqw] md:mt-[2cqw] w-auto flex justify-center items-center gap-[2cqw] md:gap-[1.2cqw] rounded-[1cqw] bg-lightBlue px-[14cqw] py-[2.5cqw] md:px-[6cqw] md:py-[1.8cqw] text-24">
                <div className="w-[6cqw] md:w-[2cqw] aspect-square">
                  <img
                    src={callicon}
                    alt="call-icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                Book a call
              </div>
            </div>
            <div className="grid grid-cols-3 mt-[6cqw] md:mt-[3cqw] gap-[3cqw] md:gap-[2cqw]">
              <div className="p-[1.5cqw] md:p-[1cqw] border-[0.04cqw] border-white rounded-[1cqw] md:rounded-[0.8cqw]">
                <h3 className="text-36 text-center">75k+</h3>
                <p className="text-14 md:pt-[0.4cqw] text-center">
                  Project Completed
                </p>
              </div>
              <div className="p-[1.5cqw] md:p-[1cqw] border-[0.04cqw] border-white rounded-[1cqw] md:rounded-[0.8cqw]">
                <h3 className="text-36 text-center">20+</h3>
                <p className="text-14 md:pt-[0.4cqw] text-center">
                Years of Experience
                </p>
              </div>
              <div className="p-[1.5cqw] md:p-[1cqw] border-[0.04cqw] border-white rounded-[1cqw] md:rounded-[0.8cqw]">
                <h3 className="text-36 text-center">400+</h3>
                <p className="text-14 md:pt-[0.4cqw] text-center">
                Clients Worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] mt-[8cqw] md:mt-0">
            <img
              src={heroimage}
              alt="hero-img"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Top Companies */}
        <section className="bg-lightBlue w-full px-[4cqw] py-[12cqw] md:px-[6cqw] md:py-[2.5cqw] flex justify-between items-center text-white">
          <div>
            <p className="text-24 opacity-70 font-600">Trusted by</p>
            <h4 className="text-32 font-semibold">Top Companies</h4>
          </div>
          <div className="md:flex justify-between items-center md:gap-[6cqw] grid grid-cols-2 gap-[8cqw]">
            <div className="w-[18cqw] md:w-[8.5cqw]">
              <img
                src={google}
                alt="google"
                className="'w-full h-full object-cover"
              />
            </div>
            <div className="w-[18cqw] md:w-[8.5cqw]">
              <img
                src={element}
                alt="canva"
                className="'w-full h-full object-cover"
              />
            </div>
            <div className="w-[18cqw] md:w-[8.5cqw] md:mt-[0.5cqw]">
              <img
                src={amazon}
                alt="amazon"
                className="'w-full h-full object-cover"
              />
            </div>
            <div className="w-[18cqw] md:w-[9cqw]">
              <img
                src={sketch}
                alt="sketch"
                className="'w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="md:p-[6cqw] w-full px-[4cqw] py-[12cqw] ">
          <div>
            <p className="text-24 text-darkBlue opacity-70 font-400 text-center">
              Our services
            </p>
            <h2 className="text-36 text-darkBlue font-semibold text-center">
              Growth based services
            </h2>
          </div>
          <Services />
        </section>

        {/* Portfolio */}
        <section className="md:p-[6cqw] px-[4cqw] py-[12cqw] w-full bg-darkBlue">
          <div>
            <p className="text-24 text-white opacity-70 font-400 text-center">
              Portfolio
            </p>
            <h2 className="text-36 text-white font-semibold text-center">
              Our previous works
            </h2>
          </div>
          <Porftfolio />
        </section>

        {/* About us */}
        <section className="md:p-[6cqw] px-[4cqw] py-[12cqw] w-full">
          <div>
            <p className="text-24 text-darkBlue opacity-70 font-400 text-center">
              About us
            </p>
            <h2 className="text-36 text-darkBlue font-semibold text-center">
              Why we are best
            </h2>
          </div>
          <About />
        </section>

        {/* Testimonial*/}
        <section className="md:pt-[6cqw]  px-[4cqw] py-[12cqw] md:pb-[4cqw] md:px-[6cqw] w-full bg-[#F0F5FF]">
          <div>
            <p className="text-24 text-darkBlue opacity-70 font-400 text-center">
              Testimonial
            </p>
            <h2 className="text-36 text-darkBlue font-semibold text-center">
              What our clients say
            </h2>
          </div>
          <Testimonial />
        </section>

        {/* Blog */}
        <section className="md:pt-[6cqw]  px-[4cqw] py-[12cqw]  md:pb-[4cqw] md:px-[6cqw] w-full">
          <div>
            <p className="text-24 text-darkBlue opacity-70 font-400 text-center">
              Blog
            </p>
            <h2 className="text-36 text-darkBlue font-semibold text-center">
              Browse articles
            </h2>
          </div>
          <Blog />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Webpage;
