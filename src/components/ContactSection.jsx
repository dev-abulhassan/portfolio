import React from "react";

const ContactSection = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className=" mt-20 py-10"
      >
        <div className="">
          <div className=" mb-10">
            <div className="px-5 md:px-0 text-white w-2/3 font-medium text-[32px] md:flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>contacts
              </div>
              <div className="line md:w-1/3 w-4/5 h-px bg-[#C778DD]"></div>
            </div>
          </div>
        </div>
        <div className=" md:flex items-start flex-wrap gap-10 justify-between">
          <div className="left px-5">
            <p className=" text-[#ABB2BF]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className=" mx-auto py-4 px-5">
            <div className="border border-[#ABB2BF] p-4 ">
              <h2 className=" mb-4 text-white font-semibold">
                Message me here
              </h2>
              <div className="">
                <div className="flex gap-1 items-center">
                  <span className="text-[#ABB2BF]">abulhassan.dev@gmail.com</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-[#ABB2BF]">01602-121038</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
