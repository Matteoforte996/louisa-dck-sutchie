import Image from "next/image";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";



const badges = [

  "Voix off française",

  "Publicité",

  "Corporate",

  "Narration",

  "E-learning",

];





const values = [

  {
    title: "L’intention avant tout",

    text:
      "Chaque texte possède une émotion particulière. L’objectif est de trouver le ton qui correspond réellement au message.",
  },


  {
    title: "Une interprétation naturelle",

    text:
      "Une voix authentique, expressive et adaptée à votre audience pour créer une connexion avec votre public.",
  },


  {
    title: "Une collaboration fluide",

    text:
      "Échange, adaptation et précision pour accompagner chaque projet jusqu’au rendu final.",
  },

];





export default function About() {


  return (


    <section

      className="
        relative
        overflow-hidden
        border-t
        border-blue-500/10
        py-20
        md:py-24
      "

    >






      <div

        className="
          pointer-events-none
          absolute
          left-0
          top-1/3
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "

      />







      <Container>






        <div

          className="
            relative
            grid
            gap-14
            lg:grid-cols-2
            lg:items-center
          "

        >







          {/* IMAGE */}



          <Reveal>


            <div

              className="
                flex
                justify-center
              "

            >



              <div

                className="
                  relative
                  h-[420px]
                  w-[420px]
                  max-w-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-blue-500/30
                  shadow-[0_0_80px_rgba(43,127,255,0.15)]
                "

              >



                <Image

                  src="/images/louisa.webp"

                  alt="Louisa Dck Sutchie - comédienne voix off française"

                  fill

                  sizes="420px"

                  className="object-cover"

                />



              </div>



            </div>



          </Reveal>









          {/* TEXTE */}



          <Reveal>


            <div>



              <p

                className="
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-blue-400
                "

              >

                Mon univers

              </p>







              <h2

                className="
                  mt-6
                  text-4xl
                  font-semibold
                  leading-tight
                  md:text-5xl
                "

              >

                Une voix française
                au service des histoires.

              </h2>







              <p

                className="
                  mt-8
                  text-lg
                  leading-relaxed
                  text-neutral-300
                "

              >

                Comédienne voix off française, j’accompagne
                les marques, agences et créateurs dans leurs
                projets audio et vidéo.

              </p>







              <p

                className="
                  mt-5
                  text-lg
                  leading-relaxed
                  text-neutral-400
                "

              >

                Chaque projet demande une intention différente.
                Mon rôle est de trouver la couleur vocale adaptée :
                naturelle, émotionnelle et cohérente avec votre message.

              </p>







              <div

                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "

              >



                {badges.map((badge) => (


                  <span

                    key={badge}

                    className="
                      rounded-full
                      border
                      border-blue-500/30
                      bg-blue-500/5
                      px-5
                      py-2
                      text-sm
                      text-blue-100
                    "

                  >

                    {badge}

                  </span>


                ))}



              </div>





            </div>


          </Reveal>






        </div>









        {/* VALEURS */}





        <div

          className="
            mt-20
            grid
            gap-6
            md:grid-cols-3
          "

        >





          {values.map((value) => (


            <Reveal key={value.title}>


              <article

                className="
                  rounded-3xl
                  border
                  border-neutral-800
                  bg-neutral-950/40
                  p-8
                  hover:border-blue-500/40
                  transition
                "

              >



                <h3

                  className="
                    text-xl
                    font-semibold
                  "

                >

                  {value.title}

                </h3>




                <p

                  className="
                    mt-4
                    leading-relaxed
                    text-neutral-400
                  "

                >

                  {value.text}

                </p>



              </article>


            </Reveal>


          ))}



        </div>







      </Container>






    </section>


  );

}