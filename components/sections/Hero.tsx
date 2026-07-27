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
        min-h-[calc(100svh-130px)]
        items-center
        overflow-hidden
        py-[clamp(3rem,8vh,6rem)]
        lg:py-0
      "

    >



      <div

        className="
          pointer-events-none
          absolute
          right-0
          top-1/4
          h-[clamp(350px,35vw,650px)]
          w-[clamp(350px,35vw,650px)]
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
            lg:grid-cols-[1fr_1fr]
            xl:gap-20
            2xl:gap-32
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
                  text-[clamp(3rem,4vw,5.5rem)]
                  font-semibold
                  leading-[1.05]
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
                  max-w-2x1
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
                    ? "Pause"
                    : "Écouter la démo"
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
                lg:translate-x-6
                xl:translate-x-10
              "

            >




              <div

                className="
                  absolute
                  h-[clamp(320px,30vw,560px)]
                  w-[clamp(320px,30vw,560px)]
                  rounded-full
                  bg-blue-500/20
                  blur-3xl
                "

              />








              <div

                className="
                  relative
                  h-[clamp(300px,28vw,520px)]
                  w-[clamp(300px,28vw,520px)]
                  overflow-hidden
                  rounded-full
                  border
                  border-blue-500/30
                  shadow-[0_0_80px_rgba(43,127,255,0.15)]
                "

              >


                <Image

                  src="/images/louisa.webp"

                  alt="Louisa Dck Sutchie - comédienne voix off française"

                  fill

                  sizes="
                    (max-width:768px) 280px,
                    (max-width:1280px) 35vw,
                    460px
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
                  right-[clamp(-20px,-2vw,-50px)]
                  top-[clamp(20px,5vw,50px)]
                  rounded-2xl
                  border
                  border-blue-500/30
                  bg-[#050914]/80
                  px-[clamp(1rem,2vw,1.5rem)]
                  py-[clamp(0.75rem,1.5vw,1.25rem)]
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
                  bottom-[clamp(20px,3vw,45px)]
                  flex
                  h-[clamp(55px,5vw,80px)]
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-blue-500/30
                  bg-neutral-950/80
                  px-[clamp(1rem,2vw,2rem)]
                  backdrop-blur-md
                "

              >


                {waveformBars.map((bar)=>(


                  <span

                    key={bar}

                    className={
                      playing

                      ? "voice-bar w-1 rounded-full bg-blue-400"

                      : "h-5 w-1 rounded-full bg-neutral-600"
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