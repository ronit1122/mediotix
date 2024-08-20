"use client"
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import {googlePartner, microsoftPartner, googleMapsPartner, shopifyPartner} from './../../assets/footer/export.js';
import {mediotixLogoWhite} from './../../assets/companyLogo/export.js';


function Index() {

//   function _DataLayerFooterClicks(routeName) {
//     window.dataLayer.push({
//       event: "footer_navi_click",
//       footer_navigation_click: routeName,
//     });
//   }

//   function _DataLayerMediaIconsClicks(routeName) {
//     window.dataLayer.push({
//       event: "footer_navi_social_media_click",
//       social_media: routeName,
//     });
//   }


  return (
    <div style={{background: "linear-gradient(270deg, #FF9363 0%, #FF7D78 100%)", fontSize: "clamp(12px, 3vw, 15px)" }} className="font-montserrat text-white flex flex-col ">

      <div className="flex flex-col w-[95%] md:w-[85%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between pt-12 mt-10 mb-16 pb-8 gap-8">
          <div className="flex flex-col gap-4 w-full md:w-[30%]">
            <Link
              href="/"
              aria-label="home"
              className="mb-4"
            >
              <Image src={mediotixLogoWhite} alt="MX360 Logo" />
            </Link>
            <p className="mb-2">
               A marketing automation tool brought into existence by Mediotix, with a combined legacy of 15 years into performance marketing and analytics.
            </p>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex gap-5">
                <a
                //   onClick={() => _DataLayerMediaIconsClicks("Linked In")}
                  href="#"
                  aria-label="linkedin"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>
                <a
                //   onClick={() => _DataLayerMediaIconsClicks("Instagram")}
                  href="#"
                  aria-label="instagram"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a
                //   onClick={() => _DataLayerMediaIconsClicks("Twitter")}
                  href="#"
                  aria-label="twitter"
                >
                  <FaXTwitter className="text-white text-xl" />
                </a>
                <a
                //   onClick={() => _DataLayerMediaIconsClicks("Facebook")}
                  href="#"
                  aria-label="facebook"
                >
                  <FaFacebookF className="text-white text-xl" />
                </a>
            
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-evenly md:w-[30%] gap-4 text-center md:text-left">
            <div className="flex flex-col gap-8 w-full md:w-full">
              <Link
                // onClick={() => _DataLayerFooterClicks("/about-us")}
                href="/about-us"
                aria-label="about-us"
              >
                <p className="">Solution</p>
              </Link>
              <Link href="/blog" aria-label="blog">
                <p className="]">Resources</p>
              </Link>
              <Link
                // onClick={() => _DataLayerFooterClicks("/contact-us")}
                href="/contact-us"
                aria-label="contact-us"
              >
                <p className="">Mx360</p>
              </Link>
            </div>

            <div className="flex flex-col gap-8 w-full md:w-full">
              <Link
                // onClick={() => _DataLayerFooterClicks("/integrations")}
                href="/integrations"
                aria-label="integrations"
              >
                <p className="">About Us</p>
              </Link>
              <Link
                // onClick={() => _DataLayerFooterClicks("/features")}
                href="/features"
                aria-label="features"
              >
                <p className="">Contact Us</p>
              </Link>
              <Link
                // onClick={() => _DataLayerFooterClicks("/pricing")}
                href="/pricing"
                aria-label="pricing"
              >
                <p className="">Lorem Ipsum</p>
              </Link>
            </div>

            <div className="flex flex-col gap-8 w-full md:w-full">
              <Link
                // onClick={() => _DataLayerFooterClicks("/case-studies")}
                href="/case-studies"
                aria-label="case-studies"
              >
                <p className="">Case Studies</p>
              </Link>
              <Link
                // onClick={() => _DataLayerFooterClicks("/terms-and-conditions")}
                href="/terms-and-conditions"
                aria-label="terms-and-conditions"
              >
                <p className="text-nowrap">Terms & Conditions</p>
              </Link>
              <Link
                // onClick={() => _DataLayerFooterClicks("/privacy-policy")}
                href="/privacy-policy"
                aria-label="privacy-policy"
              >
                <p className="">Privacy Policy</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-start gap-4 w-full md:w-[40%]">
            <Image
              className="w-[clamp(60px,6vw,90px)]"
              src={googlePartner}
              alt="Google Partner"
            />
              <Image
                className="w-[clamp(60px,6vw,90px)]"
                src={microsoftPartner}
                alt="Microsoft Partner"
              />
            <Image
              className="w-[clamp(60px,6vw,90px)]"
              src={googleMapsPartner}
              alt="google maps Partner"
            />
            <Image
              className="w-[clamp(60px,6vw,90px)]"
              src={shopifyPartner}
              alt="shopify Partner"
            />
          </div>
        </div>

        <hr className="bg-white h-[3px]" />

        <div className="flex justify-between items-center py-6 text-sm">
          <p>© Copyright {new Date().getFullYear()} - Mediotix</p>
          {/* <div className="flex gap-1">
            <p>Powered by</p>
            <a
              href="https://mediotix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff9795]"
            >
              Mediotix
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}


export default Index;
