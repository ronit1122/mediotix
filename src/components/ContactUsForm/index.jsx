'use client'
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import {
  publicReactionsOne,
  publicReactionsTwo,
  publicReactionsThree,
  publicReactionsFour,
} from "./../../assets/home/export.js";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { useMediaQuery } from '@chakra-ui/react'


export default function Home() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

  return (
    <div className=" flex w-[95%] tablet:w-[85%] gap-[4%] py-[2%] mx-auto relative">
      {/* <div style={{zIndex: "0"}} className=" absolute bottom-[0%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div> */}
      <div
        style={{ zIndex: "0" }}
        className="absolute top-[0%] left-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"
      ></div>

      <div style={{ zIndex: "10" }} class=" flex gap-4 flex-col tablet:flex-row w-full">
        <div className="rounded-[15px] flex flex-col gap-6 p-[15px] tablet:p-[30px] w-[100%] tablet:w-[55%] border-[2px] border-[#d2d2d2] bg-white">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border  outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Business Email Address
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
              placeholder="Business Email Address"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact_us"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="contact_us"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
              placeholder="Phone Number"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact_us"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              rows="3"
              type="text"
              id="contact_us"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
              placeholder="Message"
              required
            />
          </div>
          <button className="naviteButtonInverted">Submit</button>
        </div>

        <div className="min-w-[6px] max-w-[6px] min-h-full hidden tablet:block bg-[#FF9363]"></div>
        <div className=" w-[95%] tablet:w-[45%] flex flex-col ml-[10px]">
          <div
            style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
            }}
            className=" w-fit"
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870.8307539786832!2d77.05125026624508!3d28.43659134187296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d191172e5422d%3A0xdf0acbbafc3d160c!2sOahfeo%20Workspaces%20-%20Frappe%20-%20Best%20Coworking%20Space%20Gurugram%20Sector%2046%20%7C%20Private%20Office%20on%20Rent%20%7C%20Virtual%20Office!5e0!3m2!1sen!2sin!4v1725026872968!5m2!1sen!2sin"
              
              height="250"
              style={{ border: 0, width: isLargerThan900 ? "500px" : "100%"}} // Corrected: style should be an object
              allowFullScreen // Corrected: React uses camelCase for attributes
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col justify-evenly  gap-8 mt-[20px]">
            <div className="flex gap-2">
              <div
                className="w-[50px] h-[50px] aspect-square flex justify-center items-center rounded-full"
                style={{
                  background:
                     isLargerThan900 && "linear-gradient(180deg, rgba(255, 147, 99, 0.4) 0%, rgba(255, 122, 122, 0.4) 100%)",
                }}
              >
                <FaLocationDot style={{ color: "#ff7554", fontSize: "25px" }} />
              </div>
              <div className="flex flex-col ">
                <p className="">Address:</p>
                <p>1094P, Oahfeo Frappe, sector 46 Gurgaon</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div
                className="w-[50px] h-[50px] flex justify-center items-center rounded-full"
                style={{
                  background:
                    isLargerThan900 && "linear-gradient(180deg, rgba(255, 147, 99, 0.4) 0%, rgba(255, 122, 122, 0.4) 100%)",
                }}
              >
                <FaPhoneVolume style={{ color: "#ff7554", fontSize: "25px" }} />
              </div>
              <div className="flex flex-col ">
                <p>Phone Number:</p>
                <p>(+91) 99906 63211</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div
                className="w-[50px] h-[50px] flex justify-center items-center rounded-full"
                style={{
                  background:
                    isLargerThan900 &&"linear-gradient(180deg, rgba(255, 147, 99, 0.4) 0%, rgba(255, 122, 122, 0.4) 100%)",
                }}
              >
                <HiMail style={{ color: "#ff7554", fontSize: "25px" }} />
              </div>
              <div className="flex flex-col ">
                <p>Email:</p>
                <p>info@mediotix.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{zIndex: "0"}} className=" absolute top-[-15%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div> */}
    </div>
  );
}
