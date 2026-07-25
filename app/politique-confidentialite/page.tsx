import type { Metadata } from "next";

import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

import { siteConfig } from "@/components/config/site";





export const metadata: Metadata = {


  title:
    "Politique de confidentialité",


  description:
    "Politique de confidentialité et protection des données du site Louisa Dck Sutchie.",


};









export default function PolitiqueConfidentialitePage() {



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


            label="Confidentialité"


            title="Politique de confidentialité"


            description="Informations concernant la collecte et l'utilisation des données personnelles."


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

                Collecte des données

              </h2>



              <p className="mt-4 leading-relaxed text-neutral-400">


                Lorsque vous utilisez le formulaire de contact,
                certaines informations peuvent être collectées :


                <br /><br />


                - Nom


                <br />

                - Adresse email


                <br />

                - Informations transmises dans votre message



              </p>


            </div>









            <div>


              <h2 className="text-2xl font-semibold text-white">

                Utilisation des données

              </h2>



              <p className="mt-4 leading-relaxed text-neutral-400">


                Les informations envoyées via le formulaire
                sont utilisées uniquement afin de répondre
                à votre demande de contact et d'échanger
                concernant un éventuel projet voix off.


              </p>


            </div>









            <div>


              <h2 className="text-2xl font-semibold text-white">

                Conservation des données

              </h2>



              <p className="mt-4 leading-relaxed text-neutral-400">


                Les données sont conservées uniquement pendant
                la durée nécessaire au traitement de votre demande.


                <br /><br />


                Elles ne sont jamais vendues ni transmises
                à des tiers à des fins commerciales.


              </p>


            </div>









            <div>


              <h2 className="text-2xl font-semibold text-white">

                Vos droits

              </h2>



              <p className="mt-4 leading-relaxed text-neutral-400">


                Conformément au règlement général sur la protection
                des données (RGPD), vous pouvez demander l'accès,
                la modification ou la suppression de vos données.


                <br /><br />


                Pour exercer vos droits :


                <br /><br />


                {siteConfig.email}


              </p>


            </div>









            <div>


              <h2 className="text-2xl font-semibold text-white">

                Cookies

              </h2>



              <p className="mt-4 leading-relaxed text-neutral-400">


                Ce site utilise uniquement les technologies
                nécessaires à son fonctionnement.


                <br /><br />


                Aucun cookie publicitaire n'est utilisé
                sans consentement préalable.


              </p>


            </div>







          </div>




        </Container>



      </section>





    </PageLayout>


  );

}