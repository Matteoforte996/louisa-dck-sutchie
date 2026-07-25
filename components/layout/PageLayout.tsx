import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function PageLayout({

  children,

}: {

  children: React.ReactNode;

}) {


  return (

    <div className="min-h-screen bg-neutral-950 text-white">


      <Header />


      <main className="pt-32">

        {children}

      </main>


      <Footer />


    </div>

  );

}