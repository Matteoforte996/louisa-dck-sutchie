import Link from "next/link";

import Container from "@/components/ui/Container";



export default function NotFound() {


  return (


    <main

      className="
        flex
        min-h-screen
        items-center
        justify-center
      "

    >


      <Container>


        <div

          className="
            mx-auto
            max-w-xl
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

            Erreur 404

          </p>





          <h1

            className="
              mt-6
              text-5xl
              font-semibold
            "

          >

            Cette page n'existe pas.

          </h1>





          <p

            className="
              mt-6
              text-lg
              text-neutral-400
            "

          >

            La page recherchée est introuvable.
            Retournez à l'accueil pour découvrir
            l'univers voix off de Louisa Dck Sutchie.

          </p>







          <Link

            href="/"

            className="
              mt-10
              inline-flex
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

            Retour accueil

          </Link>





        </div>


      </Container>


    </main>


  );

}