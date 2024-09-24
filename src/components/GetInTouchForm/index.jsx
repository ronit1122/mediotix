"use client"
import React, {useState} from "react"
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {publicReactionsOne, publicReactionsTwo, publicReactionsThree, publicReactionsFour} from './../../assets/home/export.js';
import { useMutation } from "@apollo/client";
import { useToast } from '@chakra-ui/react'
import emailjs from 'emailjs-com';
// mutations
import GetInTouchFormMutation from './../../__mutations__/getInTouchForm.mutation.js';
import { useMediaQuery } from '@chakra-ui/react'

export default function Home() {

  // FORM MUTATION
  const toast = useToast()
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [MutationGetInTouchForm, { loading: GetInTouchFormMutationLoading }] = useMutation(GetInTouchFormMutation);
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [mobileFormVisible, setMobileFormVisible] = useState(false)

    // FUNCTION TO DELETE REPORT
    const _MutationGetInTouchForm = () => {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await MutationGetInTouchForm({
            variables: { 
              email: email,
              name: name,
              phone: Number(phone),
            },
          });
    
          console.log(data, data?.FormHomePage?.status === "FORM_SUBMITTED")
          if (data?.FormHomePage?.status === "FORM_SUBMITTED") {
            // Reset form fields
           
            handleSendMail() // handle mail send
            home_get_in_touch_form_submit() // handle data layer push
            // Resolve the promise with the data
            resolve(data);
          } else {
            // Reject the promise with an error message
            reject(new Error('Form submission failed.'));
          }
        } catch (error) {
          console.log(error, "error")
          // Reject the promise with the caught error
          reject(error);
        }
      });
    };
    
    const handleSendMail = () => {

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_CONNECTION_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      const userData = {
          from_name: name,
          from_email: email,
          from_phone: phone,
      }
  
      emailjs.send(serviceID, templateID, userData, userID)
        .then((response) => {
          setEmail('');
          setName('');
          setPhone('');
        }, (error) => {
  
        });
  
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      
      toast.promise(_MutationGetInTouchForm(), {
        success: { title: 'Done!', description: 'Form submitted successfully', duration: 1000, position: 'top-right' },
        error: { title: 'Wait!!', description: 'Something went wrong', position: 'top-right' },
        loading: { title: 'Sending...', description: 'Please wait', position: 'top-right' },
      })

      
    }

    const home_get_in_touch_form_submit = () => {
      if (typeof window !== 'undefined' && window.dataLayer) {
          dataLayer.push({
              'event': 'home_get_in_touch_form_submit'
          });
        }
        console.log('Event pushed to dataLayer');
    };
  
  return (
    <div className=" flex w-[90%] tablet:w-[85%]  gap-[4%] pt-[4%] pb-[6%] mx-auto relative">
        <div style={{zIndex: "10"}}  class="grid grid-cols-1 tablet:grid-cols-2 gap-4 w-full">
           <div className="mt-12">
              <h2 className=" text-[#FF7D78] font-[900]"  style={{fontSize: "clamp(26px, 3vw, 40px)"}}>
                  Get in Touch
              </h2>
              <p >Please feel free to connect with us for your quick enquiry
                <br />
              For additional enquiries or support, kindly drop us an email at <br /> <a className="text-[#ff7554] hover:underline" href="mailto:info@mediotix.com">info@mediotix.com</a>.</p>
              <button onClick={() => setMobileFormVisible(!mobileFormVisible)} className="naviteButton block mt-7 tablet:hidden">Apply Now</button>
           </div>
          {isLargerThan900 &&  <form onSubmit={handleSubmit}>
           <div className="rounded-[8px] flex flex-col gap-4 p-[20px] tablet:p-[30px]" style={{background: isLargerThan900 ? "linear-gradient(180deg, #FF7D78 0%, #FF9363 100%)" : "white", border: !isLargerThan900 ? "2px solid #ccc" : "none"}}>
             <div>
               <label for="name" class="block mb-2 text-sm font-medium tablet:text-white ">Full name</label>
               <input required onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Full Name" />
             </div>
             <div>
               <label for="email" class="block mb-2 text-sm font-medium tablet:text-white ">Business Email Address</label>
               <input required  onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Business Email Address" />
             </div>
             <div>
               <label for="phone" class="block mb-2 text-sm font-medium tablet:text-white ">Phone Number</label>
               <input required onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" id="phone" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Phone Number" />
             </div>
             <button type="submit" className="naviteButtonInverted">Submit</button>
           </div>
           </form>}

          {(!isLargerThan900 && mobileFormVisible) &&  <form onSubmit={handleSubmit}>
           <div className="rounded-[8px] flex flex-col gap-4 p-[20px] tablet:p-[30px]" style={{background: isLargerThan900 ? "linear-gradient(180deg, #FF7D78 0%, #FF9363 100%)" : "white", border: !isLargerThan900 ? "2px solid #ccc" : "none"}}>
             <div>
               <label for="name" class="block mb-2 text-sm font-medium tablet:text-white ">Full name</label>
               <input required onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Full Name" />
             </div>
             <div>
               <label for="email" class="block mb-2 text-sm font-medium tablet:text-white ">Business Email Address</label>
               <input required  onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Business Email Address" />
             </div>
             <div>
               <label for="phone" class="block mb-2 text-sm font-medium tablet:text-white ">Phone Number</label>
               <input required onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" id="phone" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Phone Number" />
             </div>
             <button type="submit" className="naviteButtonInverted">Submit</button>
           </div>
           </form>}
         </div>
        <div style={{zIndex: "0"}} className="absolute top-[-15%] hidden tablet:block right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
    </div>
  );
}
