import Link from "next/link";


import PageLayout from "@/components/layout/PageLayout";


import Hero from "@/components/sections/Hero";
import FeatureDemos from "@/components/sections/FeaturedDemos";
import Reviews from "@/components/sections/Reviews";
import References from "@/components/sections/References";





export default function Home() {


  return (



    <PageLayout>




      <Hero />





      <FeatureDemos />










      <Reviews />





      <References />














      <section

        className="
          border-t
          border-blue-500/10
          py-24
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
              relative
              overflow-hidden
              rounded-3xl
              border
              border-blue-500/20
              bg-blue-500/[0.04]
              p-10
              md:p-16
            "

          >







            <div

              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-64
                w-64
                rounded-full
                bg-blue-500/10
                blur-3xl
              "

            />









            <div className="relative">







              <p

                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                "

              >

                Contact

              </p>









              <h2

                className="
                  mt-6
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-tight
                  md:text-6xl
                "

              >

                Un projet voix off ?

                <span

                  className="
                    block
                    text-neutral-400
                  "

                >

                  Donnons-lui la bonne voix.

                </span>


              </h2>









              <p

                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-neutral-400
                "

              >

                Publicité, narration, corporate,
                documentaire ou e-learning :
                échangeons autour de votre projet.

              </p>









              <Link

                href="/contact"

                className="
                  mt-10
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

                Me contacter


              </Link>







            </div>








          </div>







        </div>







      </section>







    </PageLayout>



  );

}