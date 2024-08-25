import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {publicReactionsOne, publicReactionsTwo, publicReactionsThree, publicReactionsFour} from './../../assets/home/export.js';

export default function Home() {

  return (
    <div className=" flex w-[85%] gap-[4%] py-[4%] mx-auto relative">
        <div style={{zIndex: "10"}}  class="grid grid-cols-2 gap-4 w-full">
           <div className="">
              <h2 className=" text-[#FF7D78] text-[40px] font-bold">
                  Get in Touch
              </h2>
              <p className="text-[#FF7D78]">5X Growth Guaranteed with Mediotix's Proven Strategy</p>
           </div>
           <div className="rounded-[8px] flex flex-col gap-4 p-[30px]" style={{background: "linear-gradient(180deg, #FF7D78 0%, #FF9363 100%)"}}>
             <div>
               <label for="first_name" class="block mb-2 text-sm font-medium text-white ">Full name</label>
               <input type="text" id="first_name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Full Name" required />
             </div>
             <div>
               <label for="first_name" class="block mb-2 text-sm font-medium text-white ">Email</label>
               <input type="text" id="first_name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Email address" required />
             </div>
             <div>
               <label for="first_name" class="block mb-2 text-sm font-medium text-white ">Contact Us</label>
               <input type="text" id="first_name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Contact Us" required />
             </div>
             <button className="naviteButtonInverted">Get in touch</button>
           </div>
         </div>
        <div style={{zIndex: "0"}} className=" absolute top-[-15%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
    </div>
  );
}
