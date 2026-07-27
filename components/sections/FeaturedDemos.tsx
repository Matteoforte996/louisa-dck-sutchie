"use client";


import { Pause, Play } from "lucide-react";

import { useAudio } from "@/components/audio/AudioContext";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";





const demos = [

  {
    title: "Démo générale",

    description:
      "Un aperçu de mon univers vocal : émotion, narration et interprétation.",

    file:
      "/audio/voice-demo.MP3",

  },

];







function WaveMini() {


  return (

    <div

      className="
        flex
        h-8
        items-center
        gap-1
      "

    >

      {[1,2,3,4,5,6,7].map((item)=>(

        <span

          key={item}

          className="
            voice-bar
            h-5
            w-1
            rounded-full
            bg-blue-400
          "

          style={{

            animationDelay:
              `${item * 80}ms`

          }}

        />

      ))}


    </div>

  );

}









export default function FeaturedDemos() {



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

              Écouter la voix

            </p>







            <h2

              className="
                mt-6
                text-4xl
                font-semibold
                md:text-5xl
              "

            >

              Découvrez ma voix.

            </h2>







            <p

              className="
                mt-6
                text-lg
                leading-relaxed
                text-neutral-400
              "

            >

              Un extrait représentatif de mon univers vocal,
              entre émotion, narration et interprétation.

            </p>



          </div>



        </Reveal>









        <div

          className="
            mt-12
            grid
            gap-6
            max-w-2xl
          "

        >







          {demos.map((demo)=>{


            const active =
              currentTrack === demo.file && playing;



            return (



              <Reveal key={demo.title}>


                <article


                  className={`

                    group

                    rounded-3xl

                    border

                    p-8

                    transition-all

                    duration-500


                    ${
                      active

                      ?

                      "border-blue-400/60 bg-blue-500/[0.08] shadow-[0_0_40px_rgba(43,127,255,0.12)]"

                      :

                      "border-neutral-800 bg-neutral-950/40 hover:border-blue-500/40 hover:bg-blue-500/[0.03]"

                    }

                  `}


                >







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
                          font-medium
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







                      <div

                        className="
                          mt-6
                          flex
                          items-center
                          gap-3
                        "

                      >



                        {active && <WaveMini />}






                        <span

                          className="
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-neutral-500
                          "

                        >

                          {active

                            ? "Lecture en cours"

                            : "Écouter"

                          }


                        </span>



                      </div>





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

                          ?

                          "bg-blue-400 text-black"

                          :

                          "bg-white text-black hover:bg-blue-400"

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







                </article>





              </Reveal>



            );


          })}






        </div>







      </Container>






    </section>


  );

}