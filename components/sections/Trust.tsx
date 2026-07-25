import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";



const stats = [

  {
    value: "★★★★★",
    label: "Avis clients",
  },

  {
    value: "International",
    label: "Clients & projets",
  },

  {
    value: "Voix off",
    label: "Expertise professionnelle",
  },

];





const sectors = [

  "Publicité",

  "Corporate",

  "Documentaire",

  "E-learning",

  "Réseaux sociaux",

  "Contenus digitaux",

];







export default function Trust() {


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

              Confiance

            </p>








            <h2

              className="
                mt-6
                text-4xl
                font-semibold
                md:text-5xl
              "

            >

              Une voix professionnelle
              pour des projets exigeants.

            </h2>








            <p

              className="
                mt-6
                text-lg
                leading-relaxed
                text-neutral-400
              "

            >

              Des clients choisissent une interprétation naturelle,
              précise et adaptée à leur univers pour donner vie
              à leurs contenus audio et vidéo.

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





          {stats.map((item)=>(


            <Reveal key={item.label}>


              <div

                className="
                  rounded-3xl
                  border
                  border-neutral-800
                  bg-neutral-950/40
                  p-8
                  text-center
                  transition-all
                  duration-500
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.03]
                "

              >





                <div

                  className="
                    text-3xl
                    font-semibold
                    text-blue-400
                  "

                >

                  {item.value}

                </div>







                <p

                  className="
                    mt-4
                    text-neutral-400
                  "

                >

                  {item.label}

                </p>





              </div>



            </Reveal>



          ))}





        </div>









        <Reveal>


          <div

            className="
              mt-12
              rounded-3xl
              border
              border-blue-500/20
              bg-blue-500/[0.04]
              p-8
              text-center
            "

          >



            <p

              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-blue-400
              "

            >

              Domaines d'intervention

            </p>






            <div

              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-3
              "

            >



              {sectors.map((sector)=>(



                <span

                  key={sector}

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

                  {sector}

                </span>



              ))}





            </div>





          </div>



        </Reveal>







      </Container>





    </section>


  );

}