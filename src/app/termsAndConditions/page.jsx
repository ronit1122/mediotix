import React from "react";
import LandingFooter from './../../components/Footer/index.jsx';
import LandingNavbar from './../../components/Navbar/index.jsx';

const data = [
  
    {
      heading: "Charges",
      data : `In order for on boarding to occur, first month charges must be paid. Charges are outlined in your proposal at a monthly rate. Recurring payments are an option to be billed monthly, or at greater time increments, depending on customer preference. Customer is generally billed on the first of the month, excluding invoices for the first month of services, which are to be pro-rated according to their official on boarding date.`
    },
  
    {
      heading: "Agreement Term, Cancellation and Refunds:",
      data : `Customers have agreed to pay the amount agreed upon on their customized proposal, at the beginning of each month that services are to be rendered. Services come only in monthly increments. Mediotix India will not issue refunds for services already rendered. A customer may cancel their service at any time, but agrees to provide Mediotix.com with at least 15 days’ advance notice before the end of the current month, in order to avoid future charges.`
    },
  
    {
      heading: "No Liability:",
      data : `Mediotix Inc., its suppliers, affiliates, officers, directors, employees, subsidiaries, and assigns, shall not be liable for any damages whatsoever, including, without limitation, direct or indirect damages for loss of business profit, personal injuries, business interruptions, state licensing requirements, city ordinances, business information loss, or any other loss. The maximum liability shall be limited to the amount actually paid for the services provided.`
    },
  
    {
      heading: "Billing:",
      data : `Customers may pay invoices via credit card, debit card, cheque or any other medium in favour of Mediotix, Inc.`
    },
  
    {
      heading: "Cancellation of Services:",
      data : `If customer wishes to cancel their service, they must request to cancel service by sending an email or calling Mediotix with at least a 30 days’ advanced notice of the following month. However, to complete the cancellation process, customer must receive a cancellation acknowledgement in writing to prevent services from being performed past the cancelation month.`
    },
  
    {
      heading: "Communication:",
      data : `The customer agrees to be supportive of their digital marketing campaign and agrees to be responsive to Mediotix, requests in a reasonable period of time, and acknowledges if they are not, it may affect performance with no altering of service costs.`
    },
  
    {
      heading: "Terms and Conditions:",
      data : `Mediotix, Inc. may change its terms and conditions without prior notice, at its sole discretion. To document your terms and conditions for your service, we recommend that you print these terms and conditions and store them in a file or electronically.`
    },
    {
      heading: "Governing Law and Venue:",
      data : `By purchasing Mediotix, Inc.’s service you agree that your agreement shall be governed by the laws of the India.`
    },
   
  ];
  
export default function Privacy() {


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LandingNavbar />
      <main id="content" className="container w-[80%] mx-auto py-20 px-4 md:px-0 ">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Terms and Conditions
        </h1>
        {data?.map((item, index) => (
          <div className="mb-10" key={index}>
            <div className="flex items-center gap-1 mb-2">
              {item.heading && <span className="text-lg font-bold text-gray-800">{index + 1}. </span>}
              <h2 className="text-lg font-bold text-gray-800">{item.heading}</h2>
            </div>
            <p className="text-base text-gray-600">{item.data}</p>
          </div>
        ))}
      </main>
      <LandingFooter />
    </div>
  );
}