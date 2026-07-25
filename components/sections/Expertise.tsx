import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";


const expertise = [

  {
    title: "Publicité",
    text: "Une voix qui donne du rythme et de l'émotion à vos campagnes.",
  },

  {
    title: "Corporate",
    text: "Une narration professionnelle pour vos films et communications.",
  },

  {
    title: "Documentaire",
    text: "Une interprétation immersive pour raconter vos histoires.",
  },

  {
    title: "E-learning",
    text: "Une voix claire et engageante pour vos formations.",
  },

];



export default function Expertise() {


  return (


    <Reveal>


      <section

        className="
          border-t
          border-blue-500/10
          py-20
          md:py-24
        "

      >


        <Container>


          <div className="grid gap-6 md:grid-cols-2">


            {expertise.map((item, index) => (


              <Reveal key={item.title}>


                <div

                  className="
                    rounded-3xl
                    border
                    border-neutral-800
                    bg-neutral-950/40
                    p-8
                    transition
                    duration-500
                    hover:border-blue-500/40
                    hover:bg-blue-500/[0.03]
                  "

                >


                  <span

                    className="
                      text-sm
                      tracking-[0.3em]
                      text-blue-400
                    "

                  >

                    0{index + 1}

                  </span>




                  <h3

                    className="
                      mt-6
                      text-2xl
                      font-medium
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

                    {item.text}

                  </p>



                </div>


              </Reveal>


            ))}


          </div>


        </Container>


      </section>


    </Reveal>


  );

}