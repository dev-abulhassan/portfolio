import React from "react";
import about from "../assets/adnan hassan.jpg";

const AboutSection = () => {
  return (
    <>
      <div className="mt-20 py-10">
        <div className=" md:flex px-5 items-center justify-between">
          <div data-aos="fade-right" className="md:w-[50%] w-full">

            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="text-xl md:text-4xl">
                  <span className="text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
          
            <p className="text-[#ABB2BF] ">
              Hello, i’m hassan!
              <br />
              <br />
              I’m a self-taught front-end developer based in Bangladesh. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          
            <div className="mt-7">
              <a
                href="#"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className=" mx-auto py-5 md:py-0">
            <img
              className="mx-auto md:h-[400px] sm:h-[300px] rounded"
              src={about}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
