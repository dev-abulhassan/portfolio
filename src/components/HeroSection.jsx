import AOS from "aos";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import hero from "../assets/adnan.jpg";
import quote from "../assets/quote.png";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Container from "../Shared/Container";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    ({ duration: 1000 });
  }, []);
  return (
    <>
      <aside className="md:gap-5  fixed z-20 md:top-[45%] top-[22%] ">
        <div className="flex flex-col gap-5 text-3xl text-[#c778dd]  px-3 md:px-8 w-[100px]">
          <Link
            to="https://www.facebook.com/iamadnanhassan/"
            target="_blank"
            className="hover:translate-x-2 transition-all duration-300"
          >
            <FaFacebook></FaFacebook>
          </Link>
          <Link
            to="https://github.com/dev-abulhassan/"
            target="_blank"
            className="hover:-translate-x-2 transition-all duration-300"
          >
            <FaGithub></FaGithub>
          </Link>
          <Link
            to="https://www.linkedin.com/in/iamadnanhassan/"
            target="_blank"
            className="hover:translate-x-2 transition-all duration-300"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </Link>
        </div>
      </aside>
      <Container>
        <div className=" md:flex lg:flex justify-between items-center px-10 py-10 overflow-x-hidden">
          <div data-aos="fade-right" className=" ">
            <h1 className="font-semibold text-3xl md:text-6xl text-[32px] text-white mb-3">
              I am <span className="text-[#c778dd]">Dev-Hassan</span>
              <Typewriter
                options={{
                  strings: ["SEO Expert", "front-end developer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-text",
                }}
              />
            </h1>
            <p className="text-[#ABB2BF] my-6">
              i crafts responsive websites where technology meets creativity
            </p>
            <div className="md:flex lg:flex flex py-3 gap-3">
              <button className=" text-white font-medium md:py-2 md:px-4 py-1 px-3 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                Download Resume
              </button>
              <button className="text-white font-medium md:py-2 md:px-4 py-1 px-3 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                Contact me!!
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center justify-center pt-2">
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
        <div data-aos="fade-up" className=" px-5 py-8 overflow-x-hidden">
          <img className="mx-auto w-[500px] md:w-[600px]" src={quote} alt="" />
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
