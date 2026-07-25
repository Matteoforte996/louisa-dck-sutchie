import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";


const reviews = [

  {
    text:
      "Une collaboration professionnelle, une excellente écoute et une qualité audio remarquable.",

    author:
      "Client Fiverr",

  },


  {
    text:
      "Une voix parfaitement adaptée au projet avec un rendu naturel et professionnel.",

    author:
      "Client international",

  },


  {
    text:
      "Un accompagnement efficace et un résultat final de grande qualité.",

    author:
      "Projet voix off",

  },

];



const domains = [

  "Publicité",
  "Corporate",
  "Documentaire",
  "E-learning",
  "Contenus digitaux",

];





export default function Reviews() {


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

              Une voix choisie
              par des clients du monde entier.

            </h2>





            <p

              className="
                mt-6
                text-neutral-400
                leading-relaxed
              "

            >

              Une expérience construite autour de projets
              professionnels, avec une approche humaine
              et une interprétation adaptée à chaque univers.

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




          {[
            ["★★★★★", "4,9/5 sur Fiverr"],
            ["+1000", "Avis clients"],
            ["International", "Projets réalisés"],

          ].map((item)=>(


            <Reveal key={item[1]}>


              <div

                className="
                  rounded-3xl
                  border
                  border-blue-500/20
                  bg-blue-500/[0.03]
                  p-8
                  text-center
                "

              >


                <div

                  className="
                    text-3xl
                    font-semibold
                    text-blue-400
                  "

                >

                  {item[0]}

                </div>



                <p

                  className="
                    mt-3
                    text-neutral-400
                  "

                >

                  {item[1]}

                </p>



              </div>



            </Reveal>


          ))}



        </div>









        <div

          className="
            mt-10
            grid
            gap-6
            md:grid-cols-3
          "

        >



          {reviews.map((review)=>(


            <Reveal key={review.author}>


              <article

                className="
                  rounded-3xl
                  border
                  border-neutral-800
                  bg-neutral-950/40
                  p-8
                "

              >



                <div

                  className="
                    text-blue-400
                    tracking-widest
                  "

                >

                  ★★★★★

                </div>




                <p

                  className="
                    mt-5
                    leading-relaxed
                    text-neutral-300
                  "

                >

                  "{review.text}"

                </p>




                <p

                  className="
                    mt-5
                    text-sm
                    text-neutral-500
                  "

                >

                  — {review.author}

                </p>



              </article>



            </Reveal>


          ))}



        </div>









        <Reveal>


          <div

            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-3
            "

          >


            {domains.map((domain)=>(


              <span

                key={domain}

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

                {domain}

              </span>


            ))}



          </div>


        </Reveal>





      </Container>



    </section>


  );

}