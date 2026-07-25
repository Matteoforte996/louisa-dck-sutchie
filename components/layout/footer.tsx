import Link from "next/link";

import Container from "@/components/ui/Container";

import { siteConfig } from "@/components/config/site";





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





const legalLinks = [


  {
    label: "Mentions légales",
    href: "/mentions-legales",
  },


  {
    label: "Politique de confidentialité",
    href: "/politique-confidentialite",
  },


];









export default function Footer() {



  return (


    <footer

      className="
        border-t
        border-blue-500/10
        py-12
      "

    >



      <Container>



        <div

          className="
            grid
            gap-12
            md:grid-cols-3
          "

        >






          {/* IDENTITE */}



          <div>


            <h3

              className="
                text-xl
                font-semibold
              "

            >

              Louisa Dck

              <span className="text-blue-400">
                .
              </span>


            </h3>





            <p

              className="
                mt-4
                max-w-xs
                text-sm
                leading-relaxed
                text-neutral-400
              "

            >

              Comédienne voix off française.
              Une voix naturelle et expressive
              au service de vos projets.


            </p>


          </div>









          {/* NAVIGATION */}



          <div>


            <p

              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-blue-400
              "

            >

              Navigation


            </p>





            <nav

              className="
                mt-5
                flex
                flex-col
                gap-3
              "

            >


              {links.map((link)=>(


                <Link


                  key={link.href}


                  href={link.href}


                  className="
                    text-sm
                    text-neutral-400
                    transition
                    hover:text-white
                  "

                >

                  {link.label}


                </Link>


              ))}


            </nav>


          </div>









          {/* CONTACT */}



          <div>


            <p

              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-blue-400
              "

            >

              Contact


            </p>






            <a


              href={`mailto:${siteConfig.email}`}


              className="
                mt-5
                block
                text-neutral-300
                transition
                hover:text-white
              "

            >

              {siteConfig.email}


            </a>









            <div

              className="
                mt-6
                flex
                flex-wrap
                gap-5
                text-sm
                text-neutral-500
              "

            >



              <a

                href={siteConfig.socials.fiverr}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  transition
                  hover:text-blue-400
                "

              >

                Fiverr


              </a>






              <a

                href={siteConfig.socials.linkedin}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  transition
                  hover:text-blue-400
                "

              >

                LinkedIn


              </a>






              <a

                href={siteConfig.socials.instagram}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  transition
                  hover:text-blue-400
                "

              >

                Instagram


              </a>



            </div>



          </div>






        </div>









        {/* LEGAL */}



        <div

          className="
            mt-12
            border-t
            border-neutral-900
            pt-6
          "

        >



          <div

            className="
              flex
              flex-wrap
              gap-5
              text-sm
              text-neutral-500
            "

          >



            {legalLinks.map((link)=>(


              <Link


                key={link.href}


                href={link.href}


                className="
                  transition
                  hover:text-white
                "

              >

                {link.label}


              </Link>


            ))}



          </div>







          <p

            className="
              mt-6
              text-sm
              text-neutral-500
            "

          >

            © {new Date().getFullYear()} {siteConfig.name}.
            Tous droits réservés.


          </p>





        </div>





      </Container>



    </footer>


  );


}