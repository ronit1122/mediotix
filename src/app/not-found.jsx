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
        <div className="flex items-center justify-center w-[95%] tablet:w-[75%] h-full gap-16 ">
          <div className="w-[30%]">
            <Image src={GirlPng} style={{objectFit: "cover", width: "100%", maxWidth: "300px", height: "100%"}}/>
          </div>
          <div className="w-[70%] flex flex-col gap-4 items-start">
            <div className="underline text-[35px] font-[500]">Error <span className="text-[#FA5306]">404</span></div>
            <h1 className="text-[60px] font-[900]">Oops| Page not found.</h1>
            <p className="text-[25px] font-[500] text-start">Please check the URL or use the navigation <br />menu to find what you're looking for.</p>
            <Link href={"/"}>
            <button className="gradientButton">Back to Homepage</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}
