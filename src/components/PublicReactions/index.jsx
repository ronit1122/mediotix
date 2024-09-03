import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {publicReactionsOne, publicReactionsTwo, publicReactionsThree, publicReactionsFour} from './../../assets/home/export.js';

export default function Home() {

  return (
    <div className=" flex flex-col w-[85%] gap-[4%] pt-[7%] pb-[2%] mx-auto">
        <h2 className="pt-[2rem] pb-[2rem] text-[#000000] text-[40px] text-center mb-5 font-semibold">
           Public Reations with Mediotix
        </h2>
        <div class="grid grid-cols-4 gap-4 w-full">
           <div className="hover:scale-105 transition-all"><Image src={publicReactionsOne} alt="" /></div>
           <div className="hover:scale-105 transition-all"><Image src={publicReactionsTwo} alt="" /></div>
           <div className="hover:scale-105 transition-all"><Image src={publicReactionsThree} alt="" /></div>
           <div className="hover:scale-105 transition-all"><Image src={publicReactionsFour} alt="" /></div>
         </div>
    </div>
  );
}
