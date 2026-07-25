import { Resend } from "resend";

import { siteConfig } from "@/components/config/site";





const resend = new Resend(

  process.env.RESEND_API_KEY

);









export async function POST(

  request: Request

) {



  try {



    const body = await request.json();





    const {


      name,

      email,

      project,

      message,


    } = body;









    const result = await resend.emails.send({





      from:

        "Louisa Dck Website <onboarding@resend.dev>",






      to:

        siteConfig.email,








      subject:


        `Nouvelle demande voix off - ${project}`,







      html:

      `

        <h2>
          Nouvelle demande de contact
        </h2>


        <p>
          <strong>Nom :</strong>
          ${name}
        </p>


        <p>
          <strong>Email :</strong>
          ${email}
        </p>


        <p>
          <strong>Projet :</strong>
          ${project}
        </p>


        <p>
          <strong>Message :</strong>
        </p>


        <p>
          ${message}
        </p>

      `




    });









    if (result.error) {



      console.error(result.error);




      return Response.json(


        {

          success: false,

          error: result.error.message,


        },


        {

          status: 500,

        }


      );



    }









    return Response.json({


      success: true,


    });







  }

  catch(error) {



    console.error(error);





    return Response.json(


      {

        success: false,


      },


      {

        status: 500,


      }


    );



  }



}