import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";



const steps = [

  {
    number: "01",
    title: "Votre projet",
    text:
      "Vous partagez votre texte, vos objectifs et l’intention souhaitée pour votre voix.",
  },

  {
    number: "02",
    title: "Enregistrement",
    text:
      "La voix est interprétée avec précision pour correspondre à votre univers et votre message.",
  },

  {
    number: "03",
    title: "Livraison",
    text:
      "Un fichier final prêt à être intégré dans votre publicité, film ou contenu digital.",
  },

];



export default function Process() {


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

              Processus

            </p>




            <h2

              className="
                mt-6
                text-4xl
                font-semibold
                md:text-5xl
              "

            >

              Une collaboration simple et efficace.

            </h2>




            <p

              className="
                mt-6
                text-lg
                text-neutral-400
              "

            >

              De la première prise de contact
              jusqu’au fichier final, chaque étape
              est pensée pour être fluide.

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



          {steps.map((step) => (


            <Reveal key={step.number}>


              <article

                className="
                  rounded-3xl
                  border
                  border-neutral-800
                  bg-neutral-950/40
                  p-8
                  transition
                  hover:border-blue-500/40
                "

              >


                <span

                  className="
                    text-5xl
                    font-semibold
                    text-blue-400
                  "

                >

                  {step.number}

                </span>



                <h3

                  className="
                    mt-8
                    text-2xl
                    font-medium
                  "

                >

                  {step.title}

                </h3>



                <p

                  className="
                    mt-4
                    leading-relaxed
                    text-neutral-400
                  "

                >

                  {step.text}

                </p>



              </article>


            </Reveal>


          ))}


        </div>





      </Container>


    </section>


  );

}