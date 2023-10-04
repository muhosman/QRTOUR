import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { GiCaptainHatProfile } from "react-icons/gi";
import { RiBus2Fill } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";
import { FaRegHandPointLeft } from "react-icons/fa";
import { TfiHandPointLeft } from "react-icons/tfi";

import logo from "./ekoaraba.jpeg";
import "./App.css";

// App.js

function App() {
  return (
    <div className="bg-gradient-wave h-screen flex flex-col items-center bg-white">
      <div className="flex flex-col mt-2 justify-center ">
        <img
          className=" rounded-xl shadow-xl w-[24rem]  h-fit"
          src={logo}
          alt="logo"
        />
      </div>

      <div className=" flex flex-col gap-4">
        <div className=" shadow-md  shadow-[#E8AA42] flex items-center gap-4 mt-2 bg-white rounded-xl p-4">
          <GiCaptainHatProfile className=" w-6 h-6 text-[#E8AA42] " />{" "}
          <p>RIDVAN ÖĞKE</p>
        </div>
        <a href="tel:+905303052551">
          <div className=" shadow-md  shadow-red-400 flex items-center gap-4 bg-white rounded-xl p-4">
            <BsTelephone className=" w-6 h-6 text-red-500" />{" "}
            <p>+90 530 305 25 51</p>
          </div>
        </a>
        <a
          href="https://wa.me/905303052551"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" shadow-md  shadow-green-400  flex items-center gap-4 bg-white rounded-xl p-4">
            <BsWhatsapp className=" w-6 h-6 text-green-500" />{" "}
            <p>+90 530 305 25 51</p>
          </div>
        </a>
      </div>
      <div className=" mt-4 shadow-lg shadow-[#EE9322] items-center flex flex-col  gap-4 bg-white rounded-xl p-4">
        <div className=" flex items-center gap-8">
          <RiBus2Fill className=" w-6 h-6 text-[#EE9322]" />{" "}
          <p>Rotation - دوران</p>
        </div>
        <div className=" grid grid-cols-2  gap-2">
          <div className=" flex items-center justify-between gap-2">
            <TbPointFilled />
            <p> İstanbul Tour</p>
            <TfiHandPointLeft className=" animate-bounce duration-1000 transition-all" />
          </div>
          <div className=" flex items-center justify-between gap-2">
            <TbPointFilled />
            <p> Sapanca Tour</p>
            <TfiHandPointLeft className=" animate-bounce duration-1000 transition-all" />
          </div>
          <div className=" flex items-center justify-between gap-2">
            <TbPointFilled />
            <p> Bursa Tour</p>
            <TfiHandPointLeft className=" animate-bounce duration-1000 transition-all" />
          </div>
          <div className=" flex items-center justify-between gap-2">
            <TbPointFilled />
            <p> Trabzon Tour</p>
            <TfiHandPointLeft className=" animate-bounce duration-1000 transition-all" />
          </div>
          <div className=" flex items-center justify-between gap-2">
            <TbPointFilled />
            <p> Kapadokya Tour</p>
            <TfiHandPointLeft className=" animate-bounce duration-1000 transition-all" />
          </div>
          <div className=" flex items-center justify-between gap-2">
            <TbPointFilled />
            <p> Karadeniz Tour</p>
            <TfiHandPointLeft className=" animate-bounce duration-1000 transition-all" />
          </div>
        </div>
        <div className=" bg-[#12486B] text-white flex flex-col items-center mt-2 space-y-2 rounded-xl p-3 border-2 glowingBorder">
          <p>Rent a car with a driver all day !</p>
          <p>! استئجار سيارة مع سائق طوال اليوم</p>
        </div>
      </div>
    </div>
  );
}

export default App;
