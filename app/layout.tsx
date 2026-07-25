import type { Metadata } from "next";

import "./globals.css";

import { AudioProvider } from "@/components/audio/AudioContext";

import { siteConfig } from "@/components/config/site";


export const metadata: Metadata = {


  title: {

    default:
      "Louisa Dck Sutchie | Comédienne voix off française",

    template:
      "%s | Louisa Dck Sutchie",

  },



  description:

    "Louisa Dck Sutchie est une comédienne voix off française. Publicité, films corporate, narration documentaire et e-learning avec une voix naturelle et expressive.",





  keywords: [


    "Louisa Dck Sutchie",

    "voix off française",

    "comédienne voix off",

    "voix publicité",

    "voix corporate",

    "narration professionnelle",

    "documentaire voix off",

    "e-learning voix",

    "studio voix off",


  ],





  authors: [

    {

      name:
        "Louisa Dck Sutchie",

    },

  ],





  creator:
    "Louisa Dck Sutchie",





  publisher:
    "Louisa Dck Sutchie",






  metadataBase:

    new URL(
      "https://www.louisa-dck-sutchie.com"
    ),





  alternates: {


    canonical:
      "/",


  },






  icons: {


    icon:
      "/favicon.ico",


    apple:
      "/favicon.ico",


  },







  robots: {


    index:
      true,


    follow:
      true,


  },









  openGraph: {


    title:
      "Louisa Dck Sutchie | Comédienne voix off française",



    description:

      "Une voix française naturelle et expressive pour publicité, corporate, narration et contenus digitaux.",



    url:

      "https://www.louisa-dck-sutchie.com",



    siteName:

      "Louisa Dck Sutchie",



    locale:

      "fr_FR",



    type:

      "website",




    images: [


      {

        url:
          "/images/og-image.webp",

        width:
          1200,

        height:
          630,

        alt:
          "Louisa Dck Sutchie - Comédienne voix off française",


      },


    ],



  },








  twitter: {


    card:
      "summary_large_image",



    title:

      "Louisa Dck Sutchie | Voix off française",



    description:

      "Comédienne voix off française pour publicité, corporate, documentaire et e-learning.",




    images: [


      "/images/og-image.webp",


    ],


  },





};







export default function RootLayout({


  children,


}: Readonly<{


  children: React.ReactNode;


}>) {


  return (


    <html lang="fr">



      <body>


        <AudioProvider>


          {children}


        </AudioProvider>



      </body>



    </html>


  );

}