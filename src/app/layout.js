import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme.js"; 
import ApolloClientProvider from './apolloProvider';
import DataLayerInitializer from './../utils/dataLayerInitializer';


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Mediotix",
  description: "A leading MarTech agency with a global presence, dedicated to helping businesses worldwide.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/favicon.ico" />
         <meta name="robots" content="index, follow" />
         {/* Google Tag Manager */}
         <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NG9SH8Q');
            `,
          }}
        />
         <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Mediotix",
            "url": "https://www.mediotix.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.mediotix.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mediotix",
            "alternateName": "Mediotix",
            "url": "https://www.mediotix.com/",
            "logo": "https://www.mediotix.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmediotixLogo.27576937.gif&w=1920&q=75",
            "sameAs": [
              "https://www.instagram.com/mediotix/",
              "https://www.youtube.com/@mediotixindia2476",
              "https://www.facebook.com/profile.php?id=61555917506821",
              "https://www.linkedin.com/company/mediotix"
            ]
          })
        }} />
        {/* End Google Tag Manager */}

        {/* ✅ Your Google Fonts links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body className={inter.className}>
          {/* Google Tag Manager (noscript) */}
           <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NG9SH8Q"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
        <ApolloClientProvider>
          <DataLayerInitializer />
          {children}
        </ApolloClientProvider>
      </body>
    </html>
  );
}
