

import {
    cashkaroBg,
    diceBg,
    finolexBg,
    gskBg,
    heroElectronixBg,
    homeDelhiBg,
    maxHealthBg,
    pvrBg,
    watchoBg,
    azentioBg,
    euroKidsBg,
    investUpBg,
    lakmeAcademySeoBg,
    lakmeAcademyPaidAdsBg,
  } from './../assets/caseStudiesPage/export';
import {
  cashkaroWhite,
  diceWhite,
  finolexWhite,
  gskWhite,
  heroElectronixWhite,
  homeDelhiWhite,
  maxHealthWhite,
  pvrWhite,
  watchoWhite,
  azentioWhite,
  euroKidsWhite,
  investUpWhite,
  lakmeAcademyPaidAdsWhite,
} from './../assets/clientsWhiteLogos/export.js';


  export const cases = [
    {
      name: "Watcho",
      logoAlt: "watcho logo",
      imgAlt: "watcho image",
      logo: watchoWhite,
      img: watchoBg,
      tagline: <p>A Well-informed Data-driven Strategy that Boosted Sign-ups by <span  style={{fontWeight: 900}}>200%</span></p>,
      desc: "Dice Academy is an academic institute located in New Delhi, India. The Academy offers online and offline courses in Graphics, Motion Graphics, Web Design, Web development, and Web Animation. They have trained over 5000 students.",
      challenges: [
        "Investing in advertising efforts but not achieving expected ROI",
        "Getting high volume of leads but 80% being spam or irrelevant entries",
        "Difficulty in targeting the right audience & poor graphics for FB campaigns",
      ],
      approach: [
        "Elevated the quality score of Google ad campaigns & optimized bidding strategies",
        "Researched new keywords & implemented a negative keyword strategy, leading to decreased no. of spam entries",
        "Optimized demographics including age, location & interests, and designed engaging graphics resulting in a substantial increase in lead generation",
      ],
      outcomes: [
        {
          value: "5X",
          desc: "Increment in End Results",
        },
        {
          value: "65%",
          desc: "Decreased Spam Entries",
        },
        {
          value: "10X",
          desc: "Increase in No. of Leads",
        },
      ],
      solution : 'Online/Offline Academy',
      vertical: "Edu-tech",
      primeTg: [
        'M/F - 18-32',
        'Students, Professionals, etc'
      ],
      route: 'watcho',
      metaTitle: "Watcho Case Study: Boosting Engagement & Conversions ",
      metaDescription: "Know how Mediotix helped Watcho increase user engagement and conversions through targeted marketing strategies",
      canonical: "https://www.mediotix.com/case-studies/watcho",
  
    },
    {
      name: "Max Healthcare",
      logo: maxHealthWhite,
      logoAlt: "Max Healthcare Logo",
      imgAlt: "Max Healthcare background Image",
      tagline: <p>Know how <span  style={{fontWeight: 900}}>850%</span> Increment happened in Conversion Rate within 3 months</p>,
      img: maxHealthBg,
      desc: "India’s largest healthcare organizations operating 17 healthcare facilities (3500+ beds) across the NCR Delhi, Haryana, Punjab, Uttarakhand, and Maharashtra. Their vision is to provide the highest standards of clinical excellence and patient care.",
      challenges: [
        "They were not able to track marketing campaigns & user’s journey",
        "Difficulty in developing engaging content to drive users towards booking doctor consultations, aiming for a significant increase in conversion rates",
        "Unstructured reporting & tracking of major KPIs such as booking consultations, revenue, etc.",
      ],
      approach: [
        "Created separate landing pages for paid campaigns with clear CTAs to monitor user’s journey",
        "Conducted thorough research & produced captivating content resulting in increased no. of consultation leads",
        "Expert guidance in creating customized analytics reports to track essential KPIs effectively",
      ],
      outcomes: [
        {
          value: "75%",
          desc: "Boosted video Consultation",
        },
        {
          value: "85%",
          desc: "Increased Conversion Rate",
        },
        {
          value: "120%",
          desc: "Improved online appointments",
        },
      ],
      solution : 'Hospital & other Health services',
      vertical: "Healthcare",
      primeTg: [
        'M/F - 28-65',
        'Someone looking for Doctor Consultancy & Hospitals'
      ],
      route: 'max-healthcare',
      metaTitle: "Max Healthcare: Boosting Consultations & Conversions",
      metaDescription: "Max Healthcare boosted consultations and conversion rates through targeted strategies & optimized campaigns in this case study",
      canonical: "https://www.mediotix.com/case-studies/max-healthcare",
  
    },
    {
      name: "Lakmé Academy (Paid ads)",
      logoAlt: "Lakme Academy logo",
      imgAlt: "Lakme Academy background image",
      logo: lakmeAcademyPaidAdsWhite,
      img: lakmeAcademyPaidAdsBg,
      tagline: <p>Boosting Results with <span style={{fontWeight: 900}}>6X</span> Better Quality Leads Through Paid Ads.</p>,
      desc: "Lakmé Academy offers skill-oriented training in Cosmetology, Makeup, Hair, Skin, Nail Art, and Manicure & Pedicure that helps build skills for national and international fashion requirements.",
      challenges: [
        "High Competition: Overcrowded industry with many established players",
        "Targeting Niche Segments: Needed precise targeting",
        "Cost-Effectiveness: Maintaining a competitive Cost Per Lead",
      ],
      approach: [
        "Leveraged Google and Meta Ads, balancing intent-driven and interest-driven leads",
        "Continuously A/B tested ad creatives and messaging for optimized CTR and CPL",
        "Refined audience segments over time, focusing on high-converting demographics",
      ],
      outcomes: [
        {
          value: "40%",
          desc: "Reduced CPL",
        },
        {
          value: "6X",
          desc: "Improved Quality Leads",
        },
        {
          value: "2X",
          desc: "Increased CVR",
        },
      ],
      route: 'lakme-academy-paidAds',
      metaTitle: "Lakmé Academy Paid Ads Success Story | Mediotix",
      metaDescription: "Discover how Mediotix enhanced Lakmé Academy's local SEO, improving visibility & keyword rankings for beauty & cosmetology courses",
      canonical: "https://www.mediotix.com/case-studies/lakme-academy-paidAds",
  
    },
    {
      name: "PVR Cinemas",
      logoAlt: "Pvr Cinemas logo",
      imgAlt: "Pvr Cinemas background Image",
      logo: pvrWhite,
      tagline: <p>An Innovative Analytics Approach that Delivered <span  style={{fontWeight: 900}}>150%</span> Increase in Conversions</p>,
      img: pvrBg,
      desc: "India’s leading cinema exhibitor company with 1704 screens across 114 cities, renowned for its world-class multiplexes & immersive cinematic experiences.",
      challenges: [
        "Tracking platform-level marketing campaigns & user funnel journey.",
        "Wanted to run affiliate campaign with multiple vendors on cost per sale model.",
        "Ticket booking checkout to thankyou page drop-off rate was too high",
      ],
      approach: [
        "Used GTM for the website, reducing dependency on developers & enabling efficient tagging setup.",
        "Made customized events for essential pages like Ticket booking, Food, Gift Card booking seats, payment summary Journey.",
        "Pioneered affiliate pixel methodology on Google Tag Manager achieved 100% attribution for affiliate orders to external vendors.",
      ],
      outcomes: [
        {
          value: "2X",
          desc: "Reduced Drop-off Rate",
        },
        {
          value: "25%",
          desc: "Improved affiliate partnership with accurate tagging.",
        },
        {
          value: "150%",
          desc: "Increased Ticket Bookings",
        },
      ],
  
      solution : 'Cinema-Ticket Booking',
      vertical: "Entertainment",
      primeTg: [
        'M/F - 18-54',
        'Cinemalovers, Entertainment seekers, etc'
      ],
      route: 'pvr-cinemas',
      metaTitle: "PVR Cinemas Case Study: Boosting Bookings & Reducing Costs",
      metaDescription: "PVR Cinemas optimized ticket booking, reduced drop-offs by 2X, and grew affiliate partnerships with Mediotix’s targeted strategy & tagging techniques",
      canonical: "https://www.mediotix.com/case-studies/pvr-cinemas",
    
    },
    {
      name: "Finolex Pipes & Fitting",
      logoAlt: "FINOLEX PIPES & FITTING Logo",
      imgAlt: "FINOLEX PIPES & FITTING Image",
      logo: finolexWhite,
      img: finolexBg,
      tagline: <p>Unique SEO Strategy that Achieved <span  style={{fontWeight: 900}}>90%</span> Boost in Keyword Visibility & Performance</p>,
      desc: "Reliance LYF is one of India's beloved brands for making innovative products and performance-based electronics accessible to everyone. They are highly committed to enhancing customer lifestyle with their range of products.",
      challenges: [
        "Difficulty in ranking high search volume keywords due to limited brand awareness",
        "Slow page speed impacting SEO performance and user experience",
        "Higher bounce rate",
      ],
      approach: [
        "Formulated a comprehensive SEO strategy focused on targeting high search volume keywords for optimal visibility and reach",
        "Resolved issues such as LCP, FCP, INP, etc. Leading to a notable improvement in page speed",
        "Revamped content structure & improved UI/UX, resulting in reduction of bounce rate",
      ],
      outcomes: [
        {
          value: "95%",
          desc: "Improved Rankings on SERP",
        },
        {
          value: "65%",
          desc: "Boost in Organic Traffic",
        },
        {
          value: "30%",
          desc: "Decrease in Bounce Rate",
        },
      ],
      solution : 'Home Appliances',
      vertical: "Electronics",
      primeTg: [
        'M/F - 28-54',
        'Homeowners planning to invest in various appliances'
      ],
      route: 'finolex-pipes-and-fitting',
      metaTitle: "Finolex Pipes Case Study: Boosted Conversions & Engagement",
      metaDescription: "Mediotix helped Finolex Pipes drive higher conversions and improve user engagement with targeted, data-driven marketing strategies",
      canonical: "https://www.mediotix.com/case-studies/finolex-pipes-and-fitting",
  
    },
    {
      name: "Euro kids",
      logo: euroKidsWhite,
      logoAlt: "Euro kids Logo",
      imgAlt: "Euro kids background Image",
      tagline: <p>Driving <span  style={{fontWeight: 900}}>70%</span> More Organic Traffic with Strategic SEO!</p>,
      img: euroKidsBg,
      desc: "India’s largest healthcare organizations operating 17 healthcare facilities (3500+ beds) across the NCR Delhi, Haryana, Punjab, Uttarakhand, and Maharashtra. Their vision is to provide the highest standards of clinical excellence and patient care.",
      challenges: [
        "Performance Marketing – Google & Meta Ads",
        "SEO & Hyper Local – 50 Keywords",
        "Social Media – Facebook, Instagram",
      ],
      approach: [
        "We ran targeted ad campaigns to generate high-quality leads, focusing on parents seeking preschool education.",
        "Optimized 50 high-value keywords to improve organic search rankings.",
        "Managed EuroKids' social profiles, creating engaging content to increase brand awareness and community interaction.",
      ],
      outcomes: [
        {
          value: "40%",
          desc: "Reduced CPL",
        },
        {
          value: "70%",
          desc: "Increase Organic Traffic",
        },
        {
          value: "120",
          desc: "Admissions in Quarter",
        },
      ],
      solution : 'Hospital & other Health services',
      vertical: "Healthcare",
      primeTg: [
        'M/F - 28-65',
        'Someone looking for Doctor Consultancy & Hospitals'
      ],
      route: 'euro-kids',
      metaTitle: "EuroKids SEO Growth Case Study | Mediotix",
      metaDescription: "Learn how Mediotix boosted EuroKids' SEO, driving organic traffic & achieving top rankings for preschool education keywords across India",
      canonical: "https://www.mediotix.com/case-studies/euro-kids/",
  
    },
    {
      name: "Invest Up",
      logoAlt: "Invest Up logo",
      imgAlt: "Invest Up background image",
      logo: investUpWhite,
      img: investUpBg,
      tagline: <p>Achieved a <span style={{fontWeight: 900}}>90%</span> Rise in SERP Rankings for Stronger Reach!</p>,
      desc: "Invest UP is Uttar Pradesh's government agency focused on promoting and facilitating investment in the state to enhance economic growth and infrastructure development.",
      challenges: [
        "Difficulty in ranking high search volume keywords.",
        "Slow page speed impacting SEO performance and user experience",
        "Higher bounce rate",
      ],
      approach: [
        "Formulated a comprehensive SEO strategy focused on targeting high search volume keywords for optimal visibility and reach.",
        "Resolved issues such as LCP, FCP, INP, etc. Leading to a notable improvement in page speed.",
        "Revamped content structure & improved UI/UX, resulting in reduction of bounce rate.",
      ],
      outcomes: [
        {
          value: "90%",
          desc: "Improved Rankings on SERP",
        },
        {
          value: "65%",
          desc: "Boost in Organic Traffic",
        },
        {
          value: "30",
          desc: "Decreased Bounce Rate",
        },
      ],
      route: 'invest-up',
      metaTitle: "Invest UP Digital Transformation | SEO Case Study by Mediotix",
      metaDescription: "Mediotix partnered with Invest UP to improve SEO strategies, enhancing visibility for investment opportunities in Uttar Pradesh. Discover the impact here",
      canonical: "https://www.mediotix.com/case-studies/invest-up",
  
    },
    {
      name: "Lakmé Academy (SEO)",
      logoAlt: "Lakme Academy logo",
      imgAlt: "Lakme Academy background image",
      logo: lakmeAcademyPaidAdsWhite,
      img: lakmeAcademySeoBg,
      tagline: <p>Transforming Search Rankings with an <span style={{fontWeight: 900}}>80%</span> Rise in Top 10 Keywords!</p>,
      desc: "Lakmé Academy offers skill-oriented training in Cosmetology, Makeup, Hair, Skin, Nail Art, and Manicure & Pedicure that helps build skills for national and international fashion requirements.",
      challenges: [
        "Call Inquiries: Low call volume from local listings, impacting leads.",
        "Local SEO Optimization: Keeping the GMB profile updated with keywords, photos, and posts to improve visibility.",
        "High Competition in Local Search: Competing with similar niche for top visibility.",
      ],
      approach: [
        "Boost visibility with localized pages linked to 10 GMB profiles.",
        "Add products on GMBs for easier customer discovery.",
        "Improve rankings with optimized descriptions, regular posts, and active customer interaction.",
      ],
      outcomes: [
        {
          value: "3X",
          desc: "Surge in Calls",
        },
        {
          value: "95%",
          desc: "Increase in Total Views",
        },
        {
          value: "80%",
          desc: "Boost in Top 3 keywords",
        },
      ],
      route: 'lakme-academy-seo',
      metaTitle: "Lakmé Academy Paid Ads Success Story | Mediotix",
      metaDescription: "Discover how Mediotix enhanced Lakmé Academy's local SEO, improving visibility & keyword rankings for beauty & cosmetology courses",
      canonical: "https://www.mediotix.com/case-studies/lakme-academy-seo",
  
    },
    {
      name: "Azentio",
      logoAlt: "Azentio logo",
      imgAlt: "Azentio background image",
      logo: azentioWhite,
      img: azentioBg,
      tagline: <p><span style={{fontWeight: 900}}>75%</span> Optimized GMB Listings, Leading to Stronger Hyperlocal Results!</p>,
      desc: "Azentio provides global consulting, implementation, and assurance services. They offer customized tech solutions, support services, and managed services like cloud solutions and security, catering to banking, insurance, ERP, and more.",
      challenges: [
        "Difficulty in ranking high search volume keywords due to high competition.",
        "Slow page speed impacting SEO performance and user experience.",
        "Content Quality and Relevance, Lack of Local Reviews.",
      ],
      approach: [
        "Formulated a comprehensive SEO strategy focused on targeting high search volume keywords for optimal visibility and reach.",
        "Resolved issues such as LCP, FCP, INP, etc. Leading to a notable improvement in page speed.",
        "Revamped content structure, quality & relevance , improved UI/UX,",
        "Optimized GMB listings & improved Google rankings, resulting in increased call conversions.",
      ],
      outcomes: [
        {
          value: "70%",
          desc: "Improved Rankings on SERP",
        },
        {
          value: "85%",
          desc: "Boost in Organic Traffic",
        },
        {
          value: "90%",
          desc: "Optimized GMB listings & Improved Local SEO",
        },
      ],
      route: 'azentio',
      metaTitle: "Azentio's Case Study | SEO Success by Mediotix",
      metaDescription: "See how Mediotix optimized Azentio's SEO, ranking vertical-specific keywords & improving digital visibility for BFSI & ERP solutions.",
      canonical: "https://www.mediotix.com/case-studies/azentio",
  
    },
    {
      name: "Home Delhi",
      logoAlt: "Home Delhi logo",
      imgAlt: "Home Delhi background image",
      logo:homeDelhiWhite,
      img: homeDelhiBg,
      tagline:<p>Integrated SEO Strategy which Resulted in <span  style={{fontWeight: 900}}>90%</span> Increased Ranking on Keywords</p>,
      desc: "Home is Delhi’s quintessential home away from home. A beacon for the arts, hospitality, and entertainment in all their forms. Nestled in the heart of South Delhi.",
      challenges: [
        "Low Indexing & Google crawling rate",
        "Organic traffic was all time low",
        "Generic keywords were not ranking on SERP",
      ],
      approach: [
        "Reduced the Indexing & Crawling related issues.",
        "Conducted an exhaustive analysis to identify a mix of high-volume and long-tail keywords",
        "Optimized each page meticulously for targeted keywords",
      ],
      outcomes: [
        {
          value: "150%",
          desc: "Improved Ranking on High Difficulty Keywords",
        },
        {
          value: "100%",
          desc: "Reduced Page Crawling & Indexing Issues",
        },
        {
          value: "2X",
          desc: "Improved Organic Traffic",
        },
      ],
      solution : 'Fine Dining',
      vertical: "Food & Beverages",
      primeTg: [
        'M/F - 28-54',
        'Businessmen, Tourists, Partylovers, etc'
      ],
      route: 'home-delhi',
      metaTitle: "Home Delhi Case Study | Improved Organic Traffic & Rankings ",
      metaDescription: "Home Delhi saw a 150% boost in keyword rankings and 2X growth in organic traffic through Mediotix’s strategic SEO",
      canonical: "https://www.mediotix.com/case-studies/home-delhi",
  
    },
    {
      name: "Dice Academy",
      logoAlt: "Dice Academy logo",
      imgAlt: "Dice Academy background image",
      logo: diceWhite,
      img: diceBg,
      tagline: <p>The Story of How a Marketing Strategy Helped in Growth of Conversions by <span style={{fontWeight: 900}}>700%</span></p>,
      desc: "Dice Academy is an academic institute located in New Delhi, India. The Academy offers online and offline courses in Graphics, Motion Graphics, Web Design, Web development, and Web Animation. They have trained over 5000 students.",
      challenges: [
        "Investing in advertising efforts but not achieving expected ROI",
        "Getting high volume of leads but 80% being spam or irrelevant entries",
        "Difficulty in targeting the right audience & poor graphics for FB campaigns",
      ],
      approach: [
        "Elevated the quality score of Google ad campaigns & optimized bidding strategies",
        "Researched new keywords & implemented a negative keyword strategy, leading to decreased no. of spam entries",
        "Optimized demographics including age, location & interests, and designed engaging graphics resulting in a substantial increase in lead generation",
      ],
      outcomes: [
        {
          value: "5X",
          desc: "Increment in End Results",
        },
        {
          value: "65%",
          desc: "Decreased Spam Entries",
        },
        {
          value: "10X",
          desc: "Increase in No. of Leads",
        },
      ],
      solution : 'Online/Offline Academy',
      vertical: "Edu-tech",
      primeTg: [
        'M/F - 18-32',
        'Students, Professionals, etc'
      ],
      route: 'dice-academy',
      metaTitle: "Dice Academy Case Study: 10X Leads & 65% Spam Reduction",
      metaDescription: "Dice Academy achieved a 10X increase in leads and a 65% reduction in spam entries through optimized ad campaigns and targeted strategies from Mediotix",
      canonical: "https://www.mediotix.com/case-studies/dice-academy",
  
  },
  {
    name: "Cashkaro",
    logo: cashkaroWhite,
    logoAlt: "Max Healthcare Logo",
    imgAlt: "Max Healthcare background Image",
    tagline: <p>The Story of How a Marketing Strategy Helped in Growth of Conversions by <span  style={{fontWeight: 900}}>700%</span></p>,
    img: cashkaroBg,
    desc: "India’s largest healthcare organizations operating 17 healthcare facilities (3500+ beds) across the NCR Delhi, Haryana, Punjab, Uttarakhand, and Maharashtra. Their vision is to provide the highest standards of clinical excellence and patient care.",
    challenges: [
      "They were not able to track marketing campaigns & user’s journey",
      "Difficulty in developing engaging content to drive users towards booking doctor consultations, aiming for a significant increase in conversion rates",
      "Unstructured reporting & tracking of major KPIs such as booking consultations, revenue, etc.",
    ],
    approach: [
      "Created separate landing pages for paid campaigns with clear CTAs to monitor user’s journey",
      "Conducted thorough research & produced captivating content resulting in increased no. of consultation leads",
      "Expert guidance in creating customized analytics reports to track essential KPIs effectively",
    ],
    outcomes: [
      {
        value: "75%",
        desc: "Boosted video Consultation",
      },
      {
        value: "85%",
        desc: "Increased Conversion Rate",
      },
      {
        value: "120%",
        desc: "Improved online appointments",
      },
    ],
    solution : 'Hospital & other Health services',
    vertical: "Healthcare",
    primeTg: [
      'M/F - 28-65',
      'Someone looking for Doctor Consultancy & Hospitals'
    ],
    route: 'cashkaro',
    metaTitle: "CashKaro Case Study: Boosting Cashback & Conversions",
    metaDescription: "Mediotix helped CashKaro increase cashback conversions & drive higher engagement through optimized campaigns & data-driven marketing strategies",
    canonical: "https://www.mediotix.com/case-studies/cashkaro",

  },
  {
    name: "Qubo Hero Electronix",
    logoAlt: "Dice Academy logo",
    imgAlt: "Dice Academy background image",
    logo: heroElectronixWhite,
    img: heroElectronixBg,
    tagline: <p><span style={{fontWeight: 900}}>150%</span> Increased Conversions Rate within 6 months by Optimizing Conversion Funnel</p>,
    desc: "Qubo is Hero Electronix’s, A Hero Group Company, foray into the Consumer Technology Market with the launch of a range of Connected Smart Devices. Their vision is to create connected & smart solutions powered by advanced artificial intelligence making lives better connected to the things that matter the most.",
    challenges: [
      "Improve the customer experience and prepare for an increase in smart camera and door locator orders.",
      "Use machine learning technology to forecast website audience behavior.",
      "With the Qubo mobile order campaign, businesses can use consumer data to reach the ideal customers.",
    ],
    approach: [
      "Implemented Google Analytics 4 advanced features for real-time tracking",
      "Utilized predictive audiences to engage prospective customers",
      "Strategic utilization of Google Ads App Campaigns for tailored message adaptation",
    ],
    outcomes: [
      {
        value: "150%",
        desc: "Increased Conversions for ‘Likely 7 days purchase’",
      },
      {
        value: "70%",
        desc: "Audience’s Cost-per-action Reduced",
      },
      {
        value: "120%",
        desc: "Increased revenue for the same group",
      },
    ],
    solution : 'Security Gadgets',
    vertical: "Security",
    primeTg: [
      'M/F - 28-54',
      'Offices, Stores, etc'
    ],
    route: 'qubo-hero-electronix',
    metaTitle: "Qubo Hero Electronix Case Study | 150% Conversion boost",
    metaDescription: "Mediotix’s marketing success stories—conversions, sign-ups, & SEO growth through innovative strategies, Transform your brand with us!",
    canonical: `https://www.mediotix.com/case-studies/qubo-hero-electronix`,
},
{
    name: "GSK",
    logoAlt: "GSK logo",
    imgAlt: "GSK background image",
    logo: gskWhite,
    img: gskBg,
    tagline: <p>A Well-informed Data-driven Strategy that Boosted Sign-ups by <span  style={{fontWeight: 900}}>200%</span></p>,
    desc: "GSK is a global biopharma company with a purpose to unite science, technology, and talent to get ahead of disease together. They prioritize innovation in vaccines and specialty medicines to prevent and treat disease.",
    challenges: [
      "Drive valuable traffic to the website",
      "Improve the vaccination sign-up forms and lower CPA",
      "Assign the right credit to each ad touchpoint while keeping customer data secure.",
    ],
    approach: [
      "Google Analytics 4 advanced features have been implemented.",
      "Accurately attributed conversions by connecting first-party website data to ad campaign data.",
      "Measured conversion lift using a geo-based experiment.",
    ],
    outcomes: [
      {
        value: "75%",
        desc: "Increased Campaign Reach",
      },
      {
        value: "200%",
        desc: "Increment in Vaccination Sign-ups",
      },
      {
        value: "150%",
        desc: "Saved & reinvested the equivalent of the platform fee by passing unnecessary impressions",
      },
    ],
    solution : 'Medicines & Vaccines',
    vertical: "Pharmaceutical",
    primeTg: [
      'M/F - 28-45',
      'HCPs, Patients, etc'
    ],
    route: 'gsk',
    metaTitle: "GSK Case Study: 75% More Reach & 200% Growth in Sign-Ups",
    metaDescription: "Mediotix helped GSK boost vaccination sign-ups by 200% through data-driven strategies, GA4, & optimized ad targeting for better performance",
    canonical: "https://www.mediotix.com/case-studies/gsk",

},
  ];
  