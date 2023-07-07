import AOS from "aos";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import hero from "../assets/adnan.jpg";
import quote from "../assets/quote.png";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    ({ duration: 1000 });
  }, []);
  return (
    <div>
      <aside className=" md:gap-5  fixed z-20 md:top-[45%] top-[22%]">
        <div className="flex flex-col gap-5 text-xl text-[#ABB2BF] px-3 md:px-8 w-[100px]">
          <Link to="https://www.facebook.com/iamadnanhassan/" target="_blank">
            <FaFacebook></FaFacebook>
          </Link>
          <Link to="https://github.com/dev-abulhassan/" target="_blank">
            <FaGithub></FaGithub>
          </Link>
          <Link
            to="https://www.linkedin.com/in/iamadnanhassan/"
            target="_blank"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </Link>
        </div>
      </aside>
      <>
      <div className="container mx-auto px-6  min-h-screen md:flex items-center justify-between">
          <div data-aos="fade-right" className=" w-10/12 sm:w-8/12">
            <h1 className="font-semibold text-[32px] text-white mb-3">
              I am <span className="text-[#C778DD]">Abul Hassan</span>
              <span className="text-[#C778DD]">
                <br /> front-end developer
              </span>
            </h1>
            <p className="text-[#ABB2BF] my-6">
              i crafts responsive websites where technology meets creativity
            </p>
            <div className="flex gap-3">
              <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                Download Resume
              </button>
              <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                Contact me!!
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="mx-auto flex flex-col gap-3 items-center justify-center pt-2"
          >
            <div className="">
              <img
                src={hero}
                alt=""
                className="md:h-[450px] sm:h-[300px] rounded"
              />
            </div>
            <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
              <div className="w-4 h-4 bg-[#C778DD]"></div>
              <div className="">
                Currently working on{" "}
                <span className="text-white">Portfolio</span>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className=" px-5 py-8">
          <img className="mx-auto w-[600px]" src={quote} alt="" />
        </div>
      </>
     
    </div>
  );
};

export default HeroSection;
