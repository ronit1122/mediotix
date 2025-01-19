"use client"
import React, {useState, useRef} from "react"
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
import sendDataToSheetMutation from './../../__mutations__/sendDataToSheetMutation.js';


export default function Home() {
  const formRef = useRef(null);
  // FORM MUTATION
  const toast = useToast()
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [MutationGetInTouchForm, { loading: GetInTouchFormMutationLoading }] = useMutation(GetInTouchFormMutation);
  const [MutationSendDataToSheet, { loading: sendDataToSheetMutationLoading }] = useMutation(sendDataToSheetMutation);
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [job, setJob] = useState('')
  const [mobileFormVisible, setMobileFormVisible] = useState(false)

    // FUNCTION TO DELETE REPORT
    const _MutationGetInTouchForm = () => {
    
      _MutationSendDataToSheet()

      // return new Promise(async (resolve, reject) => {
      //   try {
      //     const { data } = await MutationGetInTouchForm({
      //       variables: { 
      //         email: email,
      //         name: name,
      //         phone: Number(phone),
      //       },
      //     });
    

      //     if (data?.FormHomepage?.status === "FORM_SUBMITTED") {
      //       // Reset form fields
           
      //       handleRunDriveScript()
      //       handleSendMail() // handle mail send
      //       home_get_in_touch_form_submit() // handle data layer push
      //       // Resolve the promise with the data
      //       resolve(data);
      //     } else {
      //       // Reject the promise with an error message
      //       reject(new Error('Form submission failed.'));
      //     }
      //   } catch (error) {
      //     console.log(error, "error")
      //     // Reject the promise with the caught error
      //     reject(error);
      //   }
      // });
    };

      
    const _MutationSendDataToSheet = async() => {
       
      const { data } = await MutationSendDataToSheet({
        variables: { 
          email: email,
          name: name,
          phone: Number(phone),
          jobName: job,
          message: message,
          tabName: "Join Our Team"
        },
      });


      if (data?.FormGoogleSheet?.status === "FORM_SUBMITTED") {
        
      } 
  
}
    
    const handleSendMail = () => {

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_CONNECTION_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      const userData = {
          from_name: name,
          from_email: email,
          from_phone: phone,
      }
  
      // emailjs.send(serviceID, templateID, userData, userID)
      //   .then((response) => {
      //   }, (error) => {
  
      //   });
  
    };

    const handleRunDriveScript = async () => {

      const url = "https://script.google.com/macros/s/AKfycbyAabmZmpaSdcBDCVTqaE3E11Aj2KstT9quMcANXz_4p5jvpexCYSB87Nqy4t7vOfnLfg/exec";
  
      
      if (formRef.current) {
        const formData = new FormData(formRef.current);
  
        console.log(formData, "formData")
        try {
          const response = await fetch(url, {
            method: "POST",
            body: formData,
          });
  
          const result = await response.text();
          console.log("Response from Google Script:", result, formRef.current, formData);
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      home_get_in_touch_form_submit()
      _MutationGetInTouchForm()
      // toast.promise(_MutationGetInTouchForm(), {
      //   success: { title: 'Done!', description: 'Form submitted successfully', duration: 1000, position: 'top-right' },
      //   error: { title: 'Wait!!', description: 'Something went wrong', position: 'top-right' },
      //   loading: { title: 'Sending...', description: 'Please wait', position: 'top-right' },
      // })

      
    }

    const home_get_in_touch_form_submit = () => {
      if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            'event': 'join_our_team_form_submit',
            'job_applied_for': job
          })
        }
        console.log('Event pushed to dataLayer');
    };


    
  
  return (
    <div className="  flex w-[90%] tablet:w-[85%]  gap-[4%] py-[50px] tablet:py-[6%] mx-auto relative">
        <div style={{zIndex: "10"}}  class="grid grid-cols-1 tablet:grid-cols-2 gap-[35px] tablet:gap-4 w-full">
           <div className="tablet:mt-12">
              <h4 className=" text-[#212121] font-[900]"  style={{fontSize: "clamp(26px, 3vw, 40px)"}}>
                Want to work with us? <br/> Join Our Team
              </h4>
              <p className="tablet:mt-[40px]">We'd love to have more skilled and talented people on board.<br/> Check out our job opening!</p>
           </div>
           <form ref={formRef} onSubmit={e =>{handleSubmit(e)}} >
           <div className="rounded-[8px] flex flex-col gap-4 p-[20px] tablet:p-[30px]" style={{background: isLargerThan900 ? "linear-gradient(180deg, #FF7D78 0%, #FF9363 100%)" : "white", border: !isLargerThan900 ? "2px solid #ccc" : "none"}}>
            
            <div className="grid mobile:grid-cols-2 gap-4">
             <div>
               <label for="name" class="block mb-2 text-sm font-medium tablet:text-white ">Full Name</label>
               <input name="name" required onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Enter Full Name" />
             </div>
             <div>
               <label for="email" class="block mb-2 text-sm font-medium tablet:text-white ">Your Email Address*</label>
               <input name="email" required  onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Enter Email Address" />
             </div>
            </div>

             <div className="grid mobile:grid-cols-2 gap-4">
             <div>
               <label for="phone" class="block mb-2 text-sm font-medium tablet:text-white ">Phone Number</label>
               <input name="phone" required onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" id="phone" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Phone Number" />
             </div>
             <div>
               <label for="name" class="block mb-2 text-sm font-medium tablet:text-white ">Job Aplied For</label>
               <input name="name" required onChange={(e) => setJob(e.target.value)} value={job} type="text" id="name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Enter job" />
             </div>
             </div>

             <div>
               <label for="name" class="block mb-2 text-sm font-medium tablet:text-white ">Message</label>
               <textarea name="name" required onChange={(e) => setMessage(e.target.value)} value={message} type="text" id="name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Enter message" />
             </div>
             
             <button type="submit" className="naviteButtonInverted">Apply</button>
           </div>
           </form>

        
         </div>
        <div style={{zIndex: "0"}} className="absolute bottom-[-15%]  left-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
    </div>
  );
}
