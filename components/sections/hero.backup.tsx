"use client";

import Image from "next/image";
import { ArrowRight, Play, Mic } from "lucide-react";

import { useAudio } from "@/components/audio/AudioContext";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const waveformBars = [
  1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24,
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
        py-[clamp(2rem,5vh,4rem)]
        lg:py-0
      "
    >
      {/* BACKGROUND GLOW */}

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
            grid-cols-[minmax(0,1.1fr)_minmax(120px,0.9fr)]
            items-center
            gap-3

            sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.8fr)]
            sm:gap-6

            lg:grid-cols-2
            lg:gap-14

            xl:gap-20
            2xl:gap-32
          "
        >
          {/* TEXTE */}

          <Reveal>
            <div className="relative z-10 min-w-0">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-blue-400

                  sm:text-xs
                  sm:tracking-[0.3em]

                  lg:text-sm
                  lg:tracking-[0.35em]
                "
              >
                Comédienne voix off française
              </p>

              <h1
                className="
                  mt-3
                  text-[clamp(2rem,9vw,3rem)]
                  font-semibold
                  leading-[1.05]

                  sm:mt-5
                  sm:text-[clamp(2.5rem,7vw,3.5rem)]

                  lg:mt-6
                  lg:text-[clamp(3rem,4vw,5.5rem)]
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
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-relaxed
                  text-neutral-300

                  sm:mt-6
                  sm:text-base

                  lg:mt-8
                  lg:text-lg
                "
              >
                Une voix naturelle, expressive et adaptable pour donner vie à
                vos publicités, films, documentaires et contenus digitaux.
              </p>

              {/* BOUTONS */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  items-start
                  gap-2

                  sm:mt-6
                  sm:gap-3

                  lg:mt-8
                  lg:flex-row
                  lg:flex-wrap
                  lg:gap-4
                "
              >
                <button
                  onClick={toggleAudio}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-4
                    py-3
                    text-xs
                    font-medium
                    text-black
                    transition
                    hover:bg-neutral-200

                    sm:px-5
                    sm:text-sm

                    lg:gap-3
                    lg:px-8
                    lg:py-4
                    lg:text-base
                  "
                >
                  <Play
                    size={16}
                    className="lg:h-[18px] lg:w-[18px]"
                  />

                  {playing ? "Pause" : "Écouter la démo"}
                </button>

                <a
                  href="/demos"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-500/40
                    px-4
                    py-3
                    text-xs
                    transition
                    hover:border-blue-400
                    hover:bg-blue-500/10

                    sm:px-5
                    sm:text-sm

                    lg:gap-3
                    lg:px-8
                    lg:py-4
                    lg:text-base
                  "
                >
                  Voir les démos

                  <ArrowRight
                    size={16}
                    className="lg:h-[18px] lg:w-[18px]"
                  />
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
                min-w-0
                justify-center

                lg:translate-x-6
                xl:translate-x-10
              "
            >
              {/* IMAGE GLOW */}

              <div
                className="
                  absolute
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-blue-500/20
                  blur-3xl

                  sm:h-[240px]
                  sm:w-[240px]

                  lg:h-[clamp(320px,30vw,560px)]
                  lg:w-[clamp(320px,30vw,560px)]
                "
              />

              {/* PHOTO */}

              <div
                className="
                  relative
                  h-[clamp(120px,34vw,180px)]
                  w-[clamp(120px,34vw,180px)]
                  overflow-hidden
                  rounded-full
                  border
                  border-blue-500/30
                  shadow-[0_0_80px_rgba(43,127,255,0.15)]

                  sm:h-[clamp(180px,32vw,240px)]
                  sm:w-[clamp(180px,32vw,240px)]

                  lg:h-[clamp(300px,28vw,500px)]
                  lg:w-[clamp(300px,28vw,500px)]
                "
              >
                <Image
                  src="/images/louisa.webp"
                  alt="Louisa Dck Sutchie - comédienne voix off française"
                  fill
                  sizes="
                    (max-width:640px) 180px,
                    (max-width:1024px) 240px,
                    (max-width:1280px) 35vw,
                    460px
                  "
                  className="object-cover"
                  priority
                />
              </div>

              {/* BADGE */}

              <div
                className="
                  absolute
                  right-[-8px]
                  top-[-35px]
                  rounded-xl
                  border
                  border-blue-500/30
                  bg-[#050914]/80
                  px-2
                  py-2
                  backdrop-blur-md

                  sm:right-[-12px]
                  sm:top-[-20px]
                  sm:px-3
                  sm:py-2

                  lg:right-[clamp(-20px,-2vw,-50px)]
                  lg:top-[clamp(20px,5vw,50px)]
                  lg:rounded-2xl
                  lg:px-[clamp(0.8rem,2vw,1.5rem)]
                  lg:py-[clamp(0.6rem,1.5vw,1.25rem)]
                "
              >
                <p
                  className="
                    whitespace-nowrap
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    text-blue-400

                    sm:text-[10px]
                    sm:tracking-[0.2em]

                    lg:text-xs
                    lg:tracking-[0.3em]
                  "
                >
                  🎙 Voice Off
                </p>

                <p
                  className="
                    mt-1
                    whitespace-nowrap
                    text-[9px]
                    text-neutral-300

                    sm:text-xs

                    lg:mt-2
                    lg:text-sm
                  "
                >
                  🇫🇷 France
                </p>
              </div>

              {/* WAVEFORM */}

              <div
                className="
                  absolute
                  bottom-[-35px]
                  flex
                  h-9
                  max-w-[150px]
                  items-center
                  gap-[2px]
                  overflow-hidden
                  rounded-full
                  border
                  border-blue-500/30
                  bg-neutral-950/80
                  px-3
                  backdrop-blur-md

                  sm:bottom-[-25px]
                  sm:h-11
                  sm:max-w-[190px]
                  sm:gap-[3px]
                  sm:px-4

                  lg:bottom-[clamp(20px,3vw,45px)]
                  lg:h-[clamp(55px,5vw,80px)]
                  lg:max-w-none
                  lg:gap-1
                  lg:px-[clamp(1rem,2vw,2rem)]
                "
              >
                {waveformBars.map((bar) => (
                  <span
                    key={bar}
                    className={
                      playing
                        ? "voice-bar w-[2px] rounded-full bg-blue-400 lg:w-1"
                        : "w-[2px] rounded-full bg-neutral-600 lg:w-1"
                    }
                    style={{
                      animationDelay: `${bar * 70}ms`,
                      height: `${20 + ((bar * 17) % 45)}px`,
                      maxHeight: "70%",
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