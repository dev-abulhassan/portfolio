import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import Container from "./Container";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    AOS.init();
    ({ duration: 1000 });
  }, []);
  return (
    <>
      
        <div className=" bg-[#282C33] sticky top-0 z-50">
          <Container>
            <div className=" sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex-shrink-0">
                  <Link to={"/"} className="flex gap-3 items-center text-white">
                    <img className="h-4 w-auto" src={logo} alt="Logo" />
                    <strong>hassan</strong>
                  </Link>
                </div>

                <div className="hidden md:block ">
                  <div className="ml-10 flex items-baseline space-x-4 text-[#ABB2BF]">
                    <NavLink to="/">
                      <li className=" text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                        <span className="text-[#C778DD] font-medium">#</span>
                        home
                      </li>
                    </NavLink>

                    <NavLink to="/projects">
                      <li className=" text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                        <span className="text-[#C778DD] font-medium">#</span>
                        works
                      </li>
                    </NavLink>
                    <NavLink to="/about">
                      <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                        <span className="text-[#C778DD] font-medium">#</span>
                        about-me
                      </li>
                    </NavLink>
                    <NavLink to="/contact">
                      <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                        <span className="text-[#C778DD] font-medium">#</span>
                        contact
                      </li>
                    </NavLink>
                  </div>
                </div>

                <div className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    className="hamburger-menu-btn text-white"
                  >
                    <span className="sr-only">Open menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12h18"></path>
                      <path d="M3 6h18"></path>
                      <path d="M3 18h18"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`md:hidden  ${isOpen ? "block" : "hidden"}`}>
              <div className="px-2 pt-2 pb-3 space-y-1 text-[#ABB2BF]">
                <Link
                  to={"/"}
                  className="block px-3 py-2 rounded-md text-base font-medium "
                >
                  home
                </Link>
                <Link
                  to={"/projects"}
                  className="block px-3 py-2 rounded-md text-base font-medium "
                >
                  works
                </Link>
                <Link
                  to={"/about"}
                  className="block px-3 py-2 rounded-md text-base font-medium "
                >
                  arbout-me
                </Link>
                <Link
                  to={"/contact"}
                  className="block px-3 py-2 rounded-md text-base font-medium "
                >
                  contact
                </Link>
              </div>
            </div>
          </Container>
        </div>
     
    </>
  );
};

export default NavBar;
