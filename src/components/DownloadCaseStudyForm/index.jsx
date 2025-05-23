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
import sendDataToSheetMutation from './../../__mutations__/sendDataToSheetMutation.js';

export default function Home({clientName}) {

  // FORM MUTATION
  const toast = useToast()
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [MutationGetInTouchForm, { loading: GetInTouchFormMutationLoading }] = useMutation(GetInTouchFormMutation);
  const [MutationSendDataToSheet, { loading: sendDataToSheetMutationLoading }] = useMutation(sendDataToSheetMutation);
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [designation, setDesignation] = useState('')


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
    
          if (data?.FormHomepage?.status === "FORM_SUBMITTED") {
            // Reset form fields
            handleSendMail() // handle mail send
            downloadCaseStudiesDataLayerPush()
            _MutationSendDataToSheet() // send data to sheet
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

    const _MutationSendDataToSheet = async() => {
       
      const { data } = await MutationSendDataToSheet({
        variables: { 
          email: email,
          name: name,
          phone: Number(phone),
          companyName: companyName,
          designation: designation,
          tabName: "Get Case Studies",
        },
      });
  
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
  
      emailjs.send(serviceID, templateID, userData, userID)
        .then((response) => {
          setEmail('');
          setName('');
          setPhone('');
          setCompanyName('')
          setDesignation('')
        }, (error) => {
  
        });
  
    };

    const downloadCaseStudiesDataLayerPush = () => {
    
      if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            'event': 'get_case_studies',
            'case_studies': clientName,
          });   
      };
    }

    
    const handleSubmit = (e) => {
      e.preventDefault()
      
      toast.promise(_MutationGetInTouchForm(), {
        success: { title: 'Done!', description: 'Form submitted successfully', duration: 1000, position: 'top-right' },
        error: { title: 'Wait!!', description: 'Something went wrong', position: 'top-right' },
        loading: { title: 'Sending...', description: 'Please wait', position: 'top-right' },
      })

      
    }
  
  return (
    <div className=" flex w-[100%]  gap-[4%] pt-[4%] pb-[6%] mx-auto relative">
           <form onSubmit={handleSubmit} style={{width: "100%"}}>
           <div className="rounded-[8px] flex flex-col gap-4 p-[20px] tablet:p-[30px] w-full" style={{background: "linear-gradient(180deg, #FF7D78 0%, #FF9363 100%)" }}>
            <p className="text-[18px] font-[900] text-white">Download Case Study</p>
             <div>
               {/* <label for="name" class="block mb-2 text-sm font-medium tablet:text-white ">Full name</label> */}
               <input required onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Full Name" />
             </div>
             <div>
               {/* <label for="email" class="block mb-2 text-sm font-medium tablet:text-white ">Business Email Address</label> */}
               <input required  onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Business Email Address" />
             </div>
             <div>
               {/* <label for="phone" class="block mb-2 text-sm font-medium tablet:text-white ">Phone Number</label> */}
               <input required onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" id="phone" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Phone Number" />
             </div>
             <div>
               {/* <label for="phone" class="block mb-2 text-sm font-medium tablet:text-white ">Company Name</label> */}
               <input required onChange={(e) => setCompanyName(e.target.value)} value={companyName} type="tel" id="companyName*" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Company Name*" />
             </div>
             <div>
               {/* <label for="phone" class="block mb-2 text-sm font-medium tablet:text-white ">Designation</label> */}
               <input required onChange={(e) => setDesignation(e.target.value)} value={designation} type="tel" id="designation*" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Designation*" />
             </div>
             <button type="submit" className="naviteButtonInverted">Get Case Studies</button>
           </div>
           </form>

       
        {/* <div style={{zIndex: "0"}} className="absolute top-[-15%] hidden tablet:block right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div> */}
    </div>
  );
}
