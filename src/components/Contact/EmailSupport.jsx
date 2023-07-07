import React from "react";

const EmailSupport = () => {
  return (
    <div>
      <div className=" text-white mt-[14px] mb-[46px]">Who am i?</div>
      {/* flex main */}
      <div className="flex justify-between flex-wrap gap-10">
        {/* left side */}
        <div className="  md:w-3/5 w-full">
          {/* some text */}
          <div className=" text-[#ABB2BF] font-medium">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        {/* right side */}
        <div className=" flex gap-3">
          {/* boxes/flex */}
          {/* 1 */}
          <div className=" p-4 border border-[#ABB2BF]">
            <h2 className=" text-white font-medium pb-2">Support me here</h2>
            <span className="text-[#ABB2BF]">4149500120690030</span>
          </div>
          {/* 2 */}
          <div className=" p-4 border border-[#ABB2BF]">
            <h2 className=" text-white font-medium pb-4 ">Message me here</h2>
            <div className=" text-[#ABB2BF]">
              {/* contacts */}
              <div className=" flex gap-1 items-center">
                <a href="">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z"
                      fill="#ABB2BF"
                    />
                  </svg>
                </a>
                <a href="">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.07188 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07188 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.2741 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z"
                      fill="#ABB2BF"
                    />
                  </svg>
                </a>

                <span>Adnan#1234</span>
              </div>
              {/* contacts */}
              <div className=" flex gap-1 items-center">
                <span>Adnan@Adnan.me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSupport;
