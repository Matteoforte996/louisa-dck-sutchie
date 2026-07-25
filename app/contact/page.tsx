import type { Metadata } from "next";

import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";

import Contact from "@/components/sections/Contact";




export const metadata: Metadata = {


  title: "Contact | Louisa Dck Sutchie",


  description:

    "Contactez Louisa Dck Sutchie pour vos projets voix off : publicité, corporate, narration, documentaire et e-learning.",


};






export default function ContactPage() {


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

            label="Contact"

            title="Parlons de votre projet voix off."

            description="
              Vous avez un film, une publicité, une formation
              ou une narration ? Décrivez votre besoin
              et trouvons ensemble la voix adaptée.
            "

          />



        </div>



      </section>







      <Contact />






    </PageLayout>


  );

}