"use client";


import Reveal from "@/components/ui/Reveal";



interface PageHeaderProps {

  label: string;

  title: string;

  description: string;

}





export default function PageHeader({

  label,

  title,

  description,

}: PageHeaderProps) {


  return (


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

          {label}

        </p>







        <h1

          className="
            mt-6
            text-4xl
            font-semibold
            leading-tight
            md:text-6xl
          "

        >

          {title}

        </h1>







        <p

          className="
            mt-6
            max-w-2xl
            text-lg
            leading-relaxed
            text-neutral-400
          "

        >

          {description}

        </p>






      </div>


    </Reveal>


  );

}