import type { Metadata } from "next";

import Link from "next/link";

import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";

import Services from "@/components/sections/Services";



export const metadata: Metadata = {


  title: "Services voix off",


  description:

    "Découvrez les prestations voix off de Louisa Dck Sutchie : publicité, films corporate, narration documentaire et e-learning.",


};







export default function ServicesPage() {


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

            label="Services"

            title="Une voix adaptée à chaque intention."

            description="Chaque projet possède son rythme et son émotion. La voix s’adapte à votre univers pour créer une interprétation naturelle et professionnelle."

          />


        </div>


      </section>







      <Services />








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
            lg:px-8
          "

        >





          <div

            className="
              rounded-3xl
              border
              border-blue-500/20
              bg-blue-500/[0.04]
              p-10
              text-center
              md:p-16
            "

          >




            <h2

              className="
                text-4xl
                font-semibold
                md:text-5xl
              "

            >

              Vous avez un projet voix off ?

            </h2>






            <p

              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                text-neutral-400
              "

            >

              Publicité, narration, vidéo d’entreprise ou formation :
              échangeons sur votre besoin et trouvons la bonne interprétation.

            </p>







            <Link

              href="/contact"

              className="
                mt-8
                inline-flex
                rounded-full
                bg-white
                px-8
                py-4
                font-medium
                text-black
                transition
                hover:bg-neutral-200
              "

            >

              Demander un devis

            </Link>






          </div>





        </div>



      </section>





    </PageLayout>


  );

}