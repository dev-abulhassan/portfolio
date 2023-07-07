import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import Aos from "aos";

const PopularProject = () => {
  useEffect(() => {
    Aos.init();
    ({ duration: 1000 });
  }, []);
  return (
    <div className=" mt-20 py-10 container mx-auto">
      <div className=" flex justify-between items-center gap-5">
        {/* left */}
        <div
          data-aos="fade-down"
          className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2"
        >
          <div className="">
            <span className="text-[#C778DD]">#</span>projects
          </div>
          <div className="line w-2/3 h-px bg-[#C778DD]"></div>
        </div>
        {/* right */}
        <div className=" text-white font-medium">
          <Link>
            <span>View all ~~&gt;</span>
          </Link>
        </div>
      </div>

      {/* bottom */}
      <div className="md:grid grid-cols-3 gap-4 my-10 ">
        <div data-aos="fade-right">
          <div className="border border-[#ABB2BF]">
            {/* img */}
            <div className="">
              <img className=" w-full" src={project1} alt="" />
            </div>
            {/* skills */}
            <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF] text-[#ABB2BF] text-sm">
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                Tailwind css
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                React js
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                FireBase
              </p>
            </div>
            {/* disc */}
            <div className=" p-4">
              <h2 className="text-[#FFFFFF] text-2xl font-medium">{[]}</h2>
              <p className=" py-4 text-[#ABB2BF]">{[]}</p>
              {/* btns */}
              <div className="flex justify-between">
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <a
                    href="https://cookiteer-food-recipe.web.app/"
                    target="_blank"
                  >
                    Live {"<"}~{">"}
                  </a>
                </button>
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <a href="#_">
                    {" "}
                    Code {"<"}~{">"}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-top">
          <div className="border border-[#ABB2BF]">
            {/* img */}
            <div className="">
              <img className=" w-full" src={project2} alt="" />
            </div>
            {/* skills */}
            <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF] text-[#ABB2BF] text-sm">
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                Tailwind css
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                React.js
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                FireBase
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                Node.js
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                MongoDb
              </p>
            </div>
            {/* disc */}
            <div className=" p-4">
              <h2 className="text-[#FFFFFF] text-2xl font-medium">{[]}</h2>
              <p className=" py-4 text-[#ABB2BF]">{[]}</p>
              {/* btns */}
              <div className="flex justify-between">
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <a
                    href="https://flaire-dance-school.netlify.app/"
                    target="_blank"
                  >
                    Live {"<"}~{">"}
                  </a>
                </button>
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <a href="#_">
                    {" "}
                    Code {"<"}~{">"}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="border border-[#ABB2BF]">
            {/* img */}
            <div className="">
              <img className=" w-full" src={project3} alt="" />
            </div>
            {/* skills */}
            <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF] text-[#ABB2BF] text-sm">
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                Tailwind css
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                React.js
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                FireBase
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                Node.js
              </p>
              <p className="border py-1 p-1 hover:bg-[#C778DD33]  hover:text-[#fff] duration-75 border-[#C778DD]">
                MongoDb
              </p>
            </div>
            {/* disc */}
            <div className=" p-4">
              <h2 className="text-[#FFFFFF] text-2xl font-medium">{[]}</h2>
              <p className=" py-4 text-[#ABB2BF]">{[]}</p>
              {/* btns */}
              <div className="flex justify-between">
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <a href="https://babybo-b544c.web.app/" target="_blank">
                    Live {"<"}~{">"}
                  </a>
                </button>
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <a href="#_">
                    {" "}
                    Code {"<"}~{">"}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProject;
