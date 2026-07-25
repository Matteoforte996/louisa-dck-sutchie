import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";



const expertise = [

  {
    icon: "🎙️",
    title: "Publicité",
    description:
      "Une voix impactante pour vos campagnes, spots radio et contenus de marque.",
  },

  {
    icon: "🏢",
    title: "Films corporate",
    description:
      "Une narration professionnelle pour vos communications et films d’entreprise.",
  },

  {
    icon: "📖",
    title: "Narration",
    description:
      "Une interprétation immersive pour documentaires et récits audiovisuels.",
  },

  {
    icon: "🎓",
    title: "E-learning",
    description:
      "Une voix claire et engageante pour vos formations digitales.",
  },

  {
    icon: "💻",
    title: "Applications digitales",
    description:
      "Des voix adaptées aux interfaces, expériences utilisateurs et contenus numériques.",
  },

  {
    icon: "🌍",
    title: "Contenus internationaux",
    description:
      "Une voix française adaptée aux projets destinés à un public mondial.",
  },

];





export default function References() {


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


          <div

            className="
              mx-auto
              max-w-3xl
              text-center
            "

          >





            <p

              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-blue-400
              "

            >

              Expertise

            </p>








            <h2

              className="
                mt-6
                text-4xl
                font-semibold
                md:text-5xl
              "

            >

              Une voix adaptée
              à chaque univers.

            </h2>








            <p

              className="
                mt-6
                text-lg
                leading-relaxed
                text-neutral-400
              "

            >

              Publicité, narration, formation ou communication :
              chaque projet possède son intention, son rythme
              et son émotion.

            </p>





          </div>



        </Reveal>









        <div

          className="
            mt-12
            grid
            gap-6
            md:grid-cols-3
          "

        >





          {expertise.map((item)=>(



            <Reveal key={item.title}>


              <article

                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-neutral-800
                  bg-neutral-950/40
                  p-8
                  transition-all
                  duration-500
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.03]
                "

              >





                <div

                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-32
                    w-32
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "

                />








                <div className="relative">






                  <div

                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-500/30
                      bg-blue-500/10
                      text-xl
                    "

                  >

                    {item.icon}

                  </div>








                  <h3

                    className="
                      mt-6
                      text-xl
                      font-medium
                      transition
                      group-hover:text-blue-100
                    "

                  >

                    {item.title}

                  </h3>








                  <p

                    className="
                      mt-4
                      leading-relaxed
                      text-neutral-400
                    "

                  >

                    {item.description}

                  </p>







                  <div

                    className="
                      mt-8
                      h-px
                      w-12
                      bg-blue-500/40
                      transition-all
                      duration-500
                      group-hover:w-24
                      group-hover:bg-blue-400
                    "

                  />






                </div>





              </article>



            </Reveal>



          ))}




        </div>








      </Container>







    </section>



  );

}