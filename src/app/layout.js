import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme.js"; 
import ApolloClientProvider from './apolloProvider';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediotix",
  description: "A leading MarTech agency with a global presence, dedicated to helping businesses worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        {/* End Google Tag Manager */}
        {/* <link
          href="https://db.onlinewebfonts.com/c/cefa2bca89ec27b6b9c51c215bce8ba2?family=Nexa-Regular"
          rel="stylesheet"
        /> */}
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
          {children}
        </ApolloClientProvider>
      </body>
    </html>
  );
}
