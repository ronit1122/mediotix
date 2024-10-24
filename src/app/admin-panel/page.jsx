"use client"
import React, {useState} from "react"
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/Navbar/index.jsx'
import { gauravKumar, publicReactionsFour, publicReactionsOne, publicReactionsThree, publicReactionsTwo, sectionOneBanner, sectionThreeImage, sectionTwoImage, whatWeDoOne, whatWeDoTwo } from '../../assets/home/export.js';
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho} from '../../assets/clients/export.js';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {mx360Logo} from '../../assets/companyLogo/export.js';
import CaseStudies from '../../components/CaseStudies/index.jsx'
import Testimonial from '../../components/Testimonial/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import PublicReactions from '../../components/PublicReactions/index.jsx'
import ContactUsForm from '../../components/ContactUsForm/index.jsx';
import HeadBanner from './../../assets/contactUs/headBanner.png';
import worldMap from './../../assets/contactUs/worldMap.svg';
import { useMutation } from "@apollo/client";
import HomePagebannerUploadMutation from './../../__mutations__/HomepageBannerImage.mutation.js';


const HomePageBannerForm = () => {
  const [heading, setHeading] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [title, setTitle] = useState('');
  const [show, setShow] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  
  const [MutationGetInTouchForm, { loading: GetInTouchFormMutationLoading }] = useMutation(HomePagebannerUploadMutation);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file); // Save the file in state
  };

  const _MutationGetInTouchForm = async () => {
    try {
      const { data } = await MutationGetInTouchForm({
        variables: {
          heading,
          imageFile,
          subTitle,
          title,
          show,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await _MutationGetInTouchForm();
  };

  return (
    <div classname="bg-white">
      <Navbar />
    <form onSubmit={handleSubmit}>
      <div>
        <label>Heading</label>
        <input
          classname="bg-white"
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
      </div>
      <div>
        <label>Subtitle</label>
        <input
          type="text"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Show</label>
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
        />
      </div>
      <div>
        <label>Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <button classname="text-white" type="submit" >
        {GetInTouchFormMutationLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
    </div>
  );
};

export default HomePageBannerForm;