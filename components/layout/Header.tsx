"use client";


import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { Menu, X } from "lucide-react";





const links = [


  {
    label: "Accueil",
    href: "/",
  },


  {
    label: "Démos",
    href: "/demos",
  },


  {
    label: "Services",
    href: "/services",
  },


  {
    label: "À propos",
    href: "/about",
  },


  {
    label: "Contact",
    href: "/contact",
  },


];








export default function Header() {



  const [open, setOpen] = useState(false);


  const pathname = usePathname();







  return (



    <header

      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-blue-500/10
        bg-[#050914]/80
        backdrop-blur-xl
      "

    >





            <div

        className="
          flex
          w-full
          items-center
          justify-between
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
          py-1
        "

      >







        {/* LOGO */}



        <Link

          href="/"

          className="
            flex
            items-center
          "

        >



          <Image

            src="/images/logo-ld.webp"

            alt="Louisa Dck Sutchie - Comédienne voix off française"

            width={80}

            height={80}

            priority

            className="
                h-[55px]
                w-[55px]
                object-contain
                sm:h-[65px]
                sm:w-[65px]
                lg:h-[75px]
                lg:w-[75px]
                xl:h-[85px]
                xl:w-[85px]
            "

          />



        </Link>









        {/* NAVIGATION DESKTOP */}






        <nav

          className="
            hidden
            items-center
            gap-8
            md:flex
          "

        >





          {links.map((link)=>{


            const active =
              pathname === link.href;






            return (



              <Link


                key={link.href}


                href={link.href}


                className={`


                  relative


                  text-sm


                  transition




                  ${
                    active

                    ?

                    "text-blue-400"

                    :

                    "text-neutral-300 hover:text-white"

                  }


                `}



              >




                {link.label}





                {active && (


                  <span

                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-px
                      w-full
                      bg-blue-400
                    "

                  />


                )}



              </Link>



            );


          })}



        </nav>









        {/* MOBILE BUTTON */}






        <button



          onClick={() => setOpen(!open)}



          className="
            rounded-full
            border
            border-blue-500/30
            p-3
            text-white
            md:hidden
          "



          aria-label="Menu"



        >



          {open

            ?

            <X size={22}/>

            :

            <Menu size={22}/>

          }



        </button>






      </div>









      {/* MENU MOBILE */}






      <div



        className={`



          overflow-hidden



          border-t



          border-blue-500/10



          bg-[#050914]



          transition-all



          duration-500






          ${
            open

            ?

            "max-h-96 opacity-100"

            :

            "max-h-0 opacity-0"

          }



        `}



      >







        <nav


          className="
            flex
            flex-col
            gap-5
            px-6
            py-8
          "


        >







          {links.map((link)=>{





            const active =
              pathname === link.href;







            return (





              <Link



                key={link.href}



                href={link.href}



                onClick={() => setOpen(false)}



                className={`



                  text-lg



                  transition





                  ${
                    active

                    ?

                    "text-blue-400"

                    :

                    "text-neutral-300 hover:text-white"

                  }



                `}



              >



                {link.label}



              </Link>



            );



          })}








        </nav>






      </div>







    </header>



  );

}