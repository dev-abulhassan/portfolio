import React from "react";
import shapes from "../assets/shapes.png";

const SkillSection = () => {
  const skills = [
    {
      title: "Languages",
      languages: ["JavaScript"],
    },
    { title: "Databases", languages: ["MongoDb"] },
    {
      title: "Tools",
      languages: ["VSCode", "Figma", "Canva", "AdobeXD", "Git"],
    },
    {
      title: "Other",
      languages: ["HTML", "CSS", "SCSS", "REST", "Bootstap", "Tailwind CSS"],
    },
    {
      title: "Frameworks",
      languages: ["React", "Next.Js", "Express.js", "Node.js"],
    },
  ];
  return (
    <>
      <div className="px-5  mt-20 py-10">
        <div data-aos="fade-left" className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>skills
            </div>
            <div className="line w-1/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>

        <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
          <div data-aos="fade-right" className="mx-auto">
            <img className=" w-full mx-auto" src={shapes} alt="" />
          </div>

          <div
            data-aos="fade-left"
            className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4"
          >
            {skills.map(({ title, languages }) => {
              return (
                <>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]">
                    <div className=" p-2">
                      <h2 className=" font-semibold">{title}</h2>
                    </div>
                    <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                      {languages.map((e) => {
                        return <span>{e}</span>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
