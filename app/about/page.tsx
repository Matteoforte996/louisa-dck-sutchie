import type { Metadata } from "next";

import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";

import About from "@/components/sections/About";



export const metadata: Metadata = {


  title: "À propos",


  description:

    "Découvrez Louisa Dck Sutchie, comédienne voix off française. Son univers, son approche et son travail autour de la voix et de la narration.",


};





export default function AboutPage() {


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

            label="À propos"

            title="Une voix française au service des histoires."

            description="Une voix française pensée pour transmettre une émotion, raconter une histoire et donner une identité forte à chaque projet."

          />


        </div>


      </section>





      <About />



    </PageLayout>


  );

}