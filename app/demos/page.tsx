import type { Metadata } from "next";


import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";

import Demo from "@/components/sections/Demo";




export const metadata: Metadata = {


  title: "Démo voix off",


  description:

    "Écoutez la démo voix off de Louisa Dck Sutchie.",


};






export default function DemosPage() {


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

            label="Démo"

            title="Découvrez ma voix."

            description="Un extrait représentatif de mon univers vocal, entre émotion, narration et interprétation."

          />


        </div>


      </section>






      <Demo />






      <section

        className="
          border-t
          border-blue-500/10
          py-20
        "

      >


        <div

          className="
            mx-auto
            max-w-7xl
            px-6
            text-center
            lg:px-8
          "

        >


          <h2

            className="
              text-4xl
              font-semibold
            "

          >

            Un projet en tête ?

          </h2>





          <p

            className="
              mx-auto
              mt-5
              max-w-xl
              text-neutral-400
            "

          >

            Échangeons sur votre besoin et trouvons
            la voix adaptée à votre projet.

          </p>






          <a

            href="/contact"

            className="
              mt-8
              inline-flex
              rounded-full
              bg-white
              px-8
              py-4
              text-black
              transition
              hover:bg-neutral-200
            "

          >

            Me contacter

          </a>



        </div>


      </section>





    </PageLayout>


  );

}