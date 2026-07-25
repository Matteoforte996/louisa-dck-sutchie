"use client";


import { useState } from "react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";





export default function Contact() {


  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);






  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {


    e.preventDefault();


    setLoading(true);

    setSent(false);




    const currentForm =
      e.currentTarget;



    const form =
      new FormData(currentForm);







    const response = await fetch(

      "/api/contact",

      {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },


        body: JSON.stringify({

          name:
            form.get("name"),

          email:
            form.get("email"),

          project:
            form.get("project"),

          message:
            form.get("message"),

        }),

      }

    );






    setLoading(false);







    if(response.ok){


      setSent(true);


      currentForm.reset();


    }




  }







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
            gap-10
            lg:grid-cols-2
          "

        >






          {/* FORMULAIRE */}





          <Reveal>


            <form

              onSubmit={handleSubmit}

              className="
                rounded-3xl
                border
                border-neutral-800
                bg-neutral-950/40
                p-8
                md:p-10
              "

            >



              <div className="grid gap-6">





                <div>


                  <label className="text-sm text-neutral-400">

                    Nom

                  </label>



                  <input

                    name="name"

                    required

                    placeholder="Votre nom"

                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900
                      px-4
                      py-3
                      text-white
                      outline-none
                      focus:border-blue-500
                    "

                  />


                </div>








                <div>


                  <label className="text-sm text-neutral-400">

                    Email

                  </label>




                  <input

                    name="email"

                    type="email"

                    required

                    placeholder="Votre email"

                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900
                      px-4
                      py-3
                      text-white
                      outline-none
                      focus:border-blue-500
                    "

                  />



                </div>








                <div>


                  <label className="text-sm text-neutral-400">

                    Type de projet

                  </label>




                  <select

                    name="project"

                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900
                      px-4
                      py-3
                      text-white
                      outline-none
                      focus:border-blue-500
                    "

                  >

                    <option>
                      Publicité
                    </option>

                    <option>
                      Corporate
                    </option>

                    <option>
                      Documentaire
                    </option>

                    <option>
                      E-learning
                    </option>

                    <option>
                      Autre
                    </option>


                  </select>



                </div>









                <div>


                  <label className="text-sm text-neutral-400">

                    Message

                  </label>





                  <textarea

                    name="message"

                    required

                    rows={6}

                    placeholder="Décrivez votre projet..."

                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900
                      px-4
                      py-3
                      text-white
                      outline-none
                      focus:border-blue-500
                    "

                  />



                </div>








                <button

                  type="submit"

                  disabled={loading}

                  className="
                    mt-4
                    rounded-full
                    bg-white
                    px-8
                    py-4
                    font-medium
                    text-black
                    transition
                    hover:bg-neutral-200
                    disabled:opacity-50
                  "

                >


                  {loading

                    ? "Envoi..."

                    : "Envoyer ma demande"

                  }


                </button>








                {sent && (


                  <p

                    className="
                      text-blue-400
                    "

                  >

                    Merci, votre demande a bien été envoyée.

                  </p>


                )}





              </div>





            </form>



          </Reveal>









          {/* TEXTE DROITE */}





          <Reveal>


            <div

              className="
                rounded-3xl
                border
                border-blue-500/20
                bg-blue-500/[0.04]
                p-8
                md:p-10
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

                Collaboration

              </p>






              <h2

                className="
                  mt-6
                  text-3xl
                  font-semibold
                "

              >

                Une voix qui donne
                une identité à votre projet.

              </h2>







              <p

                className="
                  mt-6
                  leading-relaxed
                  text-neutral-400
                "

              >

                Publicité, narration, corporate,
                documentaire ou e-learning :
                chaque projet reçoit une interprétation
                adaptée à son message.

              </p>







              <div

                className="
                  mt-8
                  space-y-4
                "

              >

                <p className="text-neutral-300">
                  🎙 Publicité
                </p>


                <p className="text-neutral-300">
                  🎬 Films corporate
                </p>


                <p className="text-neutral-300">
                  🎓 Formation e-learning
                </p>


                <p className="text-neutral-300">
                  🌍 Projets internationaux
                </p>


              </div>





            </div>



          </Reveal>







        </div>







      </Container>






    </section>


  );

}