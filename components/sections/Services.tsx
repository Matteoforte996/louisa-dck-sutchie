import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";



const services = [

  {
    number: "01",

    icon: "🎬",

    title: "Publicité",

    description:
      "Une voix dynamique et mémorable pour vos campagnes, spots radio, vidéos digitales et identités de marque.",

    tag: "Brand Voice",

  },


  {
    number: "02",

    icon: "🏢",

    title: "Corporate",

    description:
      "Une narration professionnelle et naturelle pour vos films d’entreprise, présentations et communications internes.",

    tag: "Institutionnel",

  },


  {
    number: "03",

    icon: "📖",

    title: "Documentaire",

    description:
      "Une interprétation immersive pour accompagner vos récits, films documentaires et contenus éditoriaux.",

    tag: "Narration",

  },


  {
    number: "04",

    icon: "🎓",

    title: "E-learning",

    description:
      "Une voix claire, chaleureuse et engageante pour vos formations et contenus pédagogiques.",

    tag: "Formation",

  },


];






export default function Services() {



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






        <div

          className="
            grid
            gap-6
            md:grid-cols-2
          "

        >





          {services.map((service) => (





            <Reveal key={service.title}>


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
                    -right-20
                    -top-20
                    h-48
                    w-48
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
                      items-start
                      justify-between
                    "

                  >





                    <div>


                      <div

                        className="
                          text-4xl
                        "

                      >

                        {service.icon}

                      </div>






                      <span

                        className="
                          mt-6
                          block
                          text-sm
                          tracking-[0.3em]
                          text-blue-400
                        "

                      >

                        {service.number}

                      </span>



                    </div>







                    <span

                      className="
                        rounded-full
                        border
                        border-neutral-800
                        px-4
                        py-2
                        text-xs
                        uppercase
                        tracking-wider
                        text-neutral-500
                      "

                    >

                      {service.tag}

                    </span>





                  </div>









                  <h3

                    className="
                      mt-8
                      text-3xl
                      font-semibold
                      transition
                      group-hover:text-blue-100
                    "

                  >

                    {service.title}

                  </h3>









                  <p

                    className="
                      mt-5
                      leading-relaxed
                      text-neutral-400
                    "

                  >

                    {service.description}

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