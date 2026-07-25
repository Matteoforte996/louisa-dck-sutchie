"use client";


import Image from "next/image";

import { ArrowRight, Play } from "lucide-react";

import { useAudio } from "@/components/audio/AudioContext";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";





const waveformBars = [

  1,2,3,4,5,6,
  7,8,9,10,11,12,
  13,14,15,16,17,18,
  19,20,21,22,23,24

];








export default function Hero() {



  const {

    playing,

    toggleAudio,

  } = useAudio();







  return (



    <section


      className="

        relative

        flex

        min-h-[calc(100vh-70px)]

        max-h-[900px]

        items-center

        overflow-hidden

        py-20

        lg:py-0

      "


    >







      <div


        className="

          pointer-events-none

          absolute

          right-0

          top-1/4

          h-[450px]

          w-[450px]

          rounded-full

          bg-blue-500/10

          blur-[120px]

        "


      />









      <Container>





        <div


          className="

            grid

            gap-10

            lg:grid-cols-2

            lg:gap-14

            lg:items-center

          "


        >







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


                Comédienne voix off française


              </p>









              <h1


                className="

                  mt-6

                  text-5xl

                  font-semibold

                  leading-[1.05]

                  md:text-6xl

                  xl:text-7xl

                "


              >



                Louisa Dck





                <span


                  className="

                    block

                    text-neutral-400

                  "


                >


                  Sutchie


                </span>



              </h1>









              <p


                className="

                  mt-8

                  max-w-xl

                  text-lg

                  leading-relaxed

                  text-neutral-300

                "


              >


                Une voix naturelle, expressive et adaptable

                pour donner vie à vos publicités, films,

                documentaires et contenus digitaux.



              </p>









              <div


                className="

                  mt-8

                  flex

                  flex-wrap

                  gap-4

                "


              >









                <button


                  onClick={toggleAudio}


                  className="

                    flex

                    items-center

                    gap-3

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



                  <Play size={18}/>




                  {playing

                    ?

                    "Pause"

                    :

                    "Écouter la démo"

                  }



                </button>









                <a


                  href="/demos"


                  className="

                    flex

                    items-center

                    gap-3

                    rounded-full

                    border

                    border-blue-500/40

                    px-8

                    py-4

                    transition

                    hover:border-blue-400

                    hover:bg-blue-500/10

                  "


                >



                  Voir les démos



                  <ArrowRight size={18}/>



                </a>







              </div>





            </div>





          </Reveal>












          {/* IMAGE */}





          <Reveal>





            <div


              className="

                relative

                flex

                justify-center

              "


            >





              <div


                className="

                  absolute

                  h-72

                  w-72

                  rounded-full

                  bg-blue-500/20

                  blur-3xl

                  md:h-96

                  md:w-96

                "


              />









              <div


                className="

                  relative

                  h-[300px]

                  w-[300px]

                  overflow-hidden

                  rounded-full

                  border

                  border-blue-500/30

                  shadow-[0_0_80px_rgba(43,127,255,0.15)]

                  md:h-[360px]

                  md:w-[360px]

                  lg:h-[380px]

                  lg:w-[380px]

                  xl:h-[420px]

                  xl:w-[420px]

                "


              >





                <Image


                  src="/images/louisa.webp"


                  alt="Louisa Dck Sutchie - comédienne voix off française"


                  fill


                  sizes="

                    (max-width:768px) 300px,

                    (max-width:1280px) 380px,

                    420px

                  "


                  className="

                    object-cover

                  "


                  priority



                />



              </div>









              {/* BADGE */}





              <div


                className="

                  absolute

                  right-0

                  top-10

                  rounded-2xl

                  border

                  border-blue-500/30

                  bg-[#050914]/80

                  px-5

                  py-4

                  backdrop-blur-md

                "


              >





                <p


                  className="

                    text-xs

                    uppercase

                    tracking-[0.3em]

                    text-blue-400

                  "


                >


                  🎙 Voice Off


                </p>






                <p


                  className="

                    mt-2

                    text-sm

                    text-neutral-300

                  "


                >


                  🇫🇷 France


                </p>






              </div>









              {/* WAVEFORM */}





              <div


                className="

                  absolute

                  bottom-5

                  flex

                  h-16

                  items-center

                  gap-1

                  rounded-full

                  border

                  border-blue-500/30

                  bg-neutral-950/80

                  px-6

                  backdrop-blur-md

                  md:bottom-10

                  md:h-20

                  md:px-8

                "


              >







                {waveformBars.map((bar)=>(




                  <span


                    key={bar}


                    className={

                      playing

                      ?

                      "voice-bar w-1 rounded-full bg-blue-400"

                      :

                      "h-5 w-1 rounded-full bg-neutral-600"

                    }



                    style={{


                      animationDelay:

                        `${bar * 70}ms`,



                      height:

                        `${20 + ((bar * 17) % 45)}px`



                    }}


                  />





                ))}





              </div>







            </div>





          </Reveal>







        </div>






      </Container>






    </section>



  );

}