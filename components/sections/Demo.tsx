"use client";


import { Pause, Play } from "lucide-react";

import { useAudio } from "@/components/audio/AudioContext";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";



const demos = [

  {
    title: "Démo générale",

    description:
      "Une sélection représentative de mon univers voix off.",

    file:
      "/audio/voice-demo.MP3",

  },


  {
    title: "Publicité",

    description:
      "Une voix dynamique et expressive pour vos campagnes et contenus de marque.",

    file:
      "/audio/publicite.MP3",

  },


  {
    title: "Corporate",

    description:
      "Une narration professionnelle pour vos films d’entreprise et communications.",

    file:
      "/audio/corporate.MP3",

  },


  {
    title: "Documentaire",

    description:
      "Une interprétation immersive pour accompagner vos récits et images.",

    file:
      "/audio/documentaire.MP3",

  },


  {
    title: "E-learning",

    description:
      "Une voix claire et engageante pour vos formations digitales.",

    file:
      "/audio/elearning.MP3",

  },

];



const bars = [

  20, 35, 55, 30, 70,
  45, 65, 35, 60, 25,
  50, 40

];



export default function Demo() {


  const {

    playing,

    currentTrack,

    playTrack,

    toggleAudio,

  } = useAudio();






  return (


    <section

      className="
        border-t
        border-blue-500/10
        py-20
        md:py-24
      "

    >


      <Container>





        <Reveal>


          <div className="max-w-3xl">


            <p

              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-blue-400
              "

            >

              Démos voix off

            </p>





            <h2

              className="
                mt-6
                text-4xl
                font-semibold
                md:text-5xl
              "

            >

              Chaque projet possède sa propre identité.

            </h2>





            <p

              className="
                mt-6
                text-lg
                text-neutral-400
              "

            >

              Découvrez différents styles d’interprétation
              adaptés aux besoins de vos productions.

            </p>



          </div>


        </Reveal>









        <div

          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
          "

        >





          {demos.map((demo) => {


            const active =
              currentTrack === demo.file && playing;





            return (



              <Reveal key={demo.title}>


                <article

                  className={`

                    group

                    relative

                    overflow-hidden

                    rounded-3xl

                    border

                    p-8

                    transition-all

                    duration-500


                    ${
                      active

                      ? "border-blue-400/60 bg-blue-500/[0.08]"

                      : "border-neutral-800 bg-neutral-950/40 hover:border-blue-500/40"

                    }

                  `}

                >







                  <div

                    className="
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-blue-500/10
                      blur-3xl
                    "

                  />








                  <div className="relative">







                    <div

                      className="
                        flex
                        items-start
                        justify-between
                        gap-6
                      "

                    >





                      <div>



                        <h3

                          className="
                            text-2xl
                            font-semibold
                          "

                        >

                          {demo.title}

                        </h3>





                        <p

                          className="
                            mt-4
                            leading-relaxed
                            text-neutral-400
                          "

                        >

                          {demo.description}

                        </p>



                      </div>








                      <button

                        onClick={() => {


                          if(active){

                            toggleAudio();

                          }

                          else {

                            playTrack(demo.file);

                          }


                        }}

                        className={`

                          flex

                          h-14

                          w-14

                          shrink-0

                          items-center

                          justify-center

                          rounded-full


                          transition


                          ${
                            active

                            ? "bg-blue-400 text-black"

                            : "bg-white text-black hover:bg-blue-400"

                          }

                        `}

                      >


                        {active

                          ?

                          <Pause size={20}/>

                          :

                          <Play size={20}/>

                        }


                      </button>



                    </div>









                    <div

                      className="
                        mt-10
                        flex
                        h-12
                        items-center
                        gap-1
                      "

                    >



                      {bars.map((height,index)=>(


                        <span

                          key={index}

                          className={

                            active

                            ?

                            "voice-bar w-1 rounded-full bg-blue-400"

                            :

                            "w-1 rounded-full bg-neutral-700"

                          }

                          style={{

                            height:`${height}%`,

                            animationDelay:
                              `${index * 80}ms`

                          }}

                        />


                      ))}



                    </div>








                    <div

                      className="
                        mt-6
                        flex
                        items-center
                        gap-3
                      "

                    >



                      <span

                        className={`

                          h-2

                          w-2

                          rounded-full


                          ${
                            active

                            ?

                            "bg-blue-400"

                            :

                            "bg-neutral-700"

                          }

                        `}

                      />





                      <span

                        className="
                          text-xs
                          uppercase
                          tracking-[0.25em]
                          text-neutral-500
                        "

                      >

                        {active

                          ?

                          "Lecture en cours"

                          :

                          "Écouter la démo"

                        }


                      </span>



                    </div>






                  </div>






                </article>


              </Reveal>


            );


          })}



        </div>




      </Container>



    </section>


  );

}