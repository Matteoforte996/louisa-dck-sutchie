import type { Metadata } from "next";

import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

import { siteConfig } from "@/components/config/site";




export const metadata: Metadata = {

  title: "Mentions légales",

  description:
    "Mentions légales du site Louisa Dck Sutchie.",

};







export default function MentionsLegalesPage() {


  return (


    <PageLayout>



      <section

        className="
          py-20
          md:py-24
        "

      >


        <div

          className="
            mx-auto
            max-w-7xl
            px-6
            lg:px-8
          "

        >


          <PageHeader

            label="Informations"

            title="Mentions légales"

            description="Informations relatives à l'éditeur et à l'utilisation du site."

          />


        </div>


      </section>







      <section

        className="
          border-t
          border-blue-500/10
          py-20
          md:py-24
        "

      >



        <Container>


          <div

            className="
              max-w-3xl
              space-y-10
              text-neutral-300
            "

          >





            <div>


              <h2 className="text-2xl font-semibold text-white">

                Éditeur du site

              </h2>


              <p className="mt-4 leading-relaxed text-neutral-400">


                Le présent site est édité par :


                <br />


                {siteConfig.name}


                <br />


                Comédienne voix off française


                <br /><br />


                Email :


                <br />


                {siteConfig.email}


              </p>


            </div>









            <div>


              <h2 className="text-2xl font-semibold text-white">

                Hébergement

              </h2>


              <p className="mt-4 leading-relaxed text-neutral-400">


                Le site est hébergé par un prestataire
                d'hébergement web professionnel.


                <br />


                Les informations relatives à l'hébergeur
                seront complétées lors de la mise en ligne.


              </p>


            </div>









            <div>


              <h2 className="text-2xl font-semibold text-white">

                Propriété intellectuelle

              </h2>


              <p className="mt-4 leading-relaxed text-neutral-400">


                L'ensemble des contenus présents sur ce site
                (textes, images, éléments graphiques et contenus audio)
                sont protégés par le droit de la propriété intellectuelle.


              </p>


            </div>









            <div>


              <h2 className="text-2xl font-semibold text-white">

                Contact

              </h2>


              <p className="mt-4 leading-relaxed text-neutral-400">


                Pour toute question concernant le site :


                <br /><br />


                {siteConfig.email}


              </p>


            </div>






          </div>



        </Container>



      </section>




    </PageLayout>


  );

}