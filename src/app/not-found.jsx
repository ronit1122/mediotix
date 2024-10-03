import Image from "next/image";
import Link from 'next/link';
import Footer from './../components/Footer/index.jsx'
import Navbar from './../components/Navbar/index.jsx'
import GirlPng from './../assets/notFound/girl.png';

export default function NotFound() {


  return (
    <main className="font-nexa bg-white">
      <Navbar />

      {/* section 1 */}
      <div className="flex items-center justify-center text-center  h-[500px] tablet:h-[700px] relative ">
      <div style={{zIndex: "0"}} className=" absolute top-[10%] left-0  w-60 h-60 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[6rem]"></div>
      <div style={{zIndex: "0"}} className=" absolute bottom-0 right-0  w-60 h-60 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[6rem]"></div>
      {/* <div style={{zIndex: "0"}} className=" absolute bottom-0 left-0  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[8rem]"></div> */}
        <div style={{zIndex: "10"}} className="flex items-center justify-center w-[95%] tablet:w-[75%] h-full gap-14 ">
          <div className="w-[30%] ">
            <Image src={GirlPng} style={{objectFit: "cover", width: "100%", maxWidth: "280px", height: "100%"}}/>
          </div>
          <div className="w-[70%] flex flex-col  items-start">
            <div className="underline text-[35px] font-[500]">Error <span className="text-[#FA5306]">404</span></div>
            <h1 className="text-[60px] font-[900]">Oops | Page not Found</h1>
            <p className="text-[25px] font-[500] text-start">Please check the URL or use the navigation <br />menu to find what you're looking for.</p>
            <Link href={"/"}>
            <button className="gradientButton mt-10">Back to Homepage</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}
