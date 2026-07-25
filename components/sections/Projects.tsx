import Container from "@/components/ui/Container";



const projects = [
  {
    number: "01",
    title: "Publicité",
    description:
      "Spots radio, campagnes digitales, vidéos de marque et contenus promotionnels.",
  },
  {
    number: "02",
    title: "Films institutionnels",
    description:
      "Une voix professionnelle pour présenter une entreprise, un service ou une vision.",
  },
  {
    number: "03",
    title: "E-learning",
    description:
      "Des contenus pédagogiques avec une voix claire, naturelle et engageante.",
  },
  {
    number: "04",
    title: "Narration",
    description:
      "Documentaires, podcasts et contenus narratifs avec une interprétation immersive.",
  },
];



export default function Projects() {


  return (


    <section

      className="
        border-t
        border-neutral-900
        py-20
        md:py-24
      "

    >



      <Container>





        <div className="grid gap-6 md:grid-cols-2">





          {projects.map((project) => (



            <div

              key={project.title}

              className="

                group

                relative

                overflow-hidden

                rounded-2xl

                border

                border-neutral-800

                p-8

                transition-all

                duration-500

                hover:border-neutral-600

                hover:bg-neutral-900/40

              "

            >





              <div

                className="
                  text-sm
                  tracking-[0.3em]
                  text-neutral-600
                "

              >

                {project.number}

              </div>







              <h3

                className="

                  mt-8

                  text-2xl

                  font-medium

                  transition

                  duration-300

                  group-hover:text-white

                "

              >

                {project.title}

              </h3>







              <p

                className="

                  mt-4

                  max-w-md

                  leading-relaxed

                  text-neutral-400

                "

              >

                {project.description}

              </p>







              <div

                className="

                  mt-8

                  h-px

                  w-12

                  bg-neutral-700

                  transition-all

                  duration-500

                  group-hover:w-24

                "

              />





            </div>



          ))}





        </div>





      </Container>



    </section>


  );

}