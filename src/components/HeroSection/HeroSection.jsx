import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-[570px] bg-[#FF5521] ">
      <div className="flex">
        <div>
          <img src="./spoons.svg" className="pt-7" alt="Spoons" />
        </div>
        <div className="text-center mt-28 -ml-8 text-6xl font-cormorant text-white font-normal ">
          Revolutionizing Your <br /> Dining Experience
          <div className="flex mt-5 gap-6 ml-12">
            <div>
              <img src="./line.svg" />
            </div>
            <div className="text-[23px] font-archivo font-light ml-5 mt-1 text-left">
              Explore our curated list of restaurants <br /> for dine-in or
              takeout.
              <div className="mt-8">
              <label className="input input-bordered flex items-center gap-2 bg-black ">
                <input type="text" className="grow" placeholder="Search for Restaurants..." />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 ml-16">
              <img src="./window-image.svg"/>
            </div>
      </div>
      
    </div>
  );
}

export default HeroSection;
