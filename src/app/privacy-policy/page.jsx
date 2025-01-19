import React from "react";
// import { Helmet } from "react-helmet";
import LandingFooter from './../../components/Footer/index.jsx';
import LandingNavbar from './../../components/Navbar/index.jsx';

export const metadata = {
  title: 'Privacy Policy | How Mediotix Protects Your Personal Data',
  description: 'Understand how Mediotix handles your personal data with transparency and care. Review our Privacy Policy for details on data collection and protection',
  alternates: {
    canonical: 'https://www.mediotix.com/privacy-policy/',
  },
};

export default function Privacy() {
  // Hii
  return (
    <main className="flex flex-col bg-white">
  <LandingNavbar />
  <div
    id="content"
    className={`py-20 w-[70%] mx-auto flex flex-col gap-8 mt-20 font-medium font-montserrat text-[#546E7A]`}
    style={{ fontSize: "clamp(13px, 1.5vw, 15px)" }}
  >
    <div className="flex flex-col text-center">
      <h1
        className="font-bold text-[#263238]"
        style={{ fontSize: "clamp(25px, 3vw, 40px)" }}
      >
        Privacy Policy
      </h1>
    </div>
    {data?.map((item, index) => (
      <div key={index} className="flex flex-col">
        <div className="flex text-[#263238] text-2xl font-bold gap-2.5">
          {item.heading && <span>{index}. </span>}
          {item.heading}
        </div>
        <p>
          {item.data}
          {item?.hyperlink === true ? (
            <a
              target="_blank"
              className="underline text-blue-600"
              href="https://developers.google.com/terms/api-services-user-data-policy"
              rel="noreferrer"
            >
              Google API Services User Data Policy
            </a>
          ) : null}
        </p>
        {item.list && (
          <ul className="list-disc pl-5 py-2">
            {item.list.map((each, i) => (
              <li key={i}>{each}</li>
            ))}
          </ul>
        )}
        {item.desc && <p className="pt-2">{item.desc}</p>}
      </div>
    ))}
    <div className="py-5">
      <p>
      If you wish to learn more about our Privacy Policy, fill out our contact form or simply call +91-9990663211. You can also write to us at info@mediotix.com
      </p>
      <p>Thank you for your understanding and cooperation.</p>
    </div>
    {/* <p>13th Nov 2023</p> */}
  </div>
  <LandingFooter />
    </main>
  );
}


const data = [
  {
    data: `Mediotix understands the privacy and security concerns you may have about your personal information. Acknowledging the sensitivity, we leave no stone unturned to protect your data from all sorts of risks, and make sure it is used in compliance with the law. This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.`
  },
  {
    data: `Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.`
  },
  {
    heading: <h2>How We Collect Information</h2>,
    data: 'Refers to information concerning an identifiable living person derived from specific data or a combination of that data and additional information in our possession or likely to be acquired.',
    list: [
        `Log Files: Like many other Web sites, our site makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.`,
        `Cookies and Web Beacons: We use cookies to store information about visitors’ preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.`
    ]
  },
  {
    heading: <h3>How We Use Your Information</h3>,
    data: 'We may use the information we collect from you when you fill out a form or sign up for our newsletter, respond to a survey or marketing communication in the following ways:',
    list: [
        `To allow us to better service you in responding to your requests.`,
        `To send periodic emails regarding our services and vital updates.`
    ],
    desc: `NOTE: We do not sell, misuse or distribute your data for any purpose, unless required by law or as authorized by you or your signatory. We are obligated to share your information in case it is required by law or when required by law-enforcement or government officials.`
  },
  {
    heading: <h3>How We Protect Your Information</h3>,
    data: 'We maintain strict technical, administrative, and physical safeguards to protect your personal information against loss, misuse, or unauthorized access. We train our employees to maintain appropriate standards of conduct with regard to the protection of information. We also take the necessary steps to require that third parties who assist in our provision of services follow our privacy practices and comply with data protection laws',
    desc: 'Our data Privacy Policy is protected by Industry endorsed technology and widely deployed security protocol used in today’s cut-throat market scenarios. Bringing such advanced and stringent security protocol into the practice ensures you a safe transmission of collected data.'
  },
  {
    heading: <h3>Third Party Links</h3>,
    data: 'Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.'
  },
  {
    heading: <h4>Policy Changes</h4>,
    data: `These policies may be amended by us at any time and without notice, but will be posted on this page. You agree that your continued use of our websites, product or service after that date will constitute your consent and acceptance of the amendment.`
  },
  {
    heading: <h4>Disclaimer</h4>,
    data: `Information shared over the Internet is subject to several security perils. Therefore, in the case of any losses/damage, alteration or deletion, incidental or consequential or any malfunction in the system due to unlawful use or access, Mediotix holds no responsibilities for any such consequences.`
  },

  {
    heading: <h5>Google Play Distribution Agreement</h5>,
    data: 'Please be aware that our app, when distributed on Google Play, is subject to the Google Play Developer Distribution Agreement.'
  },
  // {
  //   heading:'Contact Us',
  //   data:'For questions regarding these policies, please contact us.'
  // }
];
