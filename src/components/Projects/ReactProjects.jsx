import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const ReactProjects = () => {
  return (
    <>
      <div className=" text-white font-medium mt-[68px] text-[32px]">
        <span className=" text-[#C778DD]">#</span>
        <span>complete-apps</span>
      </div>

      <div className=" md:grid grid-cols-3 gap-4 py-2 ">
      <div data-aos="fade-right">
          <div className="border border-[#ABB2BF]">
           
            <div className="">
              <img className=" w-full" src={project1} alt="" />
            </div>
           
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
           
            <div className=" p-4">
              <h2 className="text-[#FFFFFF] text-2xl font-medium">Cookiterr Food Recipe</h2>
              <p className=" py-4 text-[#ABB2BF]"></p>
              
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
                  <a href="https://github.com/dev-abulhassan/cookiterr-food-recipe">
                    Code {"<"}~{">"}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-top">
          <div className="border border-[#ABB2BF]">
           
            <div className="">
              <img className=" w-full" src={project2} alt="" />
            </div>
          
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
            <div className=" p-4">
              <h2 className="text-[#FFFFFF] text-2xl font-medium">Flaire Dance School</h2>
              <p className=" py-4 text-[#ABB2BF]">{[]}</p>
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
                  <a href="https://github.com/dev-abulhassan/flaire-dance-school">
                    
                    Code {"<"}~{">"}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="border border-[#ABB2BF]">
           
            <div className="">
              <img className=" w-full" src={project3} alt="" />
            </div>
            
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
           
            <div className=" p-4">
              <h2 className="text-[#FFFFFF] text-2xl font-medium">Babybo | Baby Toy</h2>
              <p className=" py-4 text-[#ABB2BF]">{[]}</p>
             
              <div className="flex justify-between">
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <a href="https://babybo-b544c.web.app/" target="_blank">
                    Live {"<"}~{">"}
                  </a>
                </button>
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <a href="https://github.com/dev-abulhassan/babyboo-client">
                    {" "}
                    Code {"<"}~{">"}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        

       
      </div>
    </>
  );
};

export default ReactProjects;
