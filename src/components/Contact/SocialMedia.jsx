import React from 'react';

const SocialMedia = () => {
   return (
      <div>
         <div className="mb-5x py-10">
        {/* title */}
        <div className=" text-[32px] font-medium text-white">
          <span className="text-[#C778DD]">#</span>all-media
        </div>
        {/* media */}
        <div className=" flex gap-6">
          <a href="#">
            <div className=" text-[#ABB2BF] flex items-center gap-1">
              {/* <img src={require("./imgs/Twitter.png")} alt="" /> */}
              <span>@Adnan</span>
            </div>
          </a>
          <a href="#">
            <div className=" text-[#ABB2BF] flex items-center gap-1">
              {/* <img src={require("./imgs/Twitter.png")} alt="" /> */}
              <span>@Adnan</span>
            </div>
          </a>
        </div>
      </div>
      </div>
   );
};

export default SocialMedia;