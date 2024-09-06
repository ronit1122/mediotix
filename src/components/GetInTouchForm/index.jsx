import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {publicReactionsOne, publicReactionsTwo, publicReactionsThree, publicReactionsFour} from './../../assets/home/export.js';

export default function Home() {

  return (
    <div className=" flex w-[85%] gap-[4%] pt-[4%] pb-[6%] mx-auto relative">
        <div style={{zIndex: "10"}}  class="grid grid-cols-2 gap-4 w-full">
           <div className=" mt-12">
              <h2 className=" text-[#FF7D78] text-[40px] font-[900]">
                  Get in Touch
              </h2>
              <p >Please feel free to connect with us for your quick enquiry
                <br />
              For additional enquiries or support, kindly drop us an email at <br /> info@mediotix.com.</p>
           </div>
           <div className="rounded-[8px] flex flex-col gap-4 p-[30px]" style={{background: "linear-gradient(180deg, #FF7D78 0%, #FF9363 100%)"}}>
             <div>
               <label for="first_name" class="block mb-2 text-sm font-medium text-white ">Full name</label>
               <input type="text" id="first_name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Full Name" required />
             </div>
             <div>
               <label for="first_name" class="block mb-2 text-sm font-medium text-white ">Business Email Address</label>
               <input type="text" id="first_name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Business Email Address" required />
             </div>
             <div>
               <label for="first_name" class="block mb-2 text-sm font-medium text-white ">Phone Number</label>
               <input type="text" id="first_name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Phone Number" required />
             </div>
             <button className="naviteButtonInverted">Submit</button>
           </div>
         </div>
        <div style={{zIndex: "0"}} className=" absolute top-[-15%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
    </div>
  );
}
