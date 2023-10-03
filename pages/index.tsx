import Image from "next/image";
import { Inter } from "next/font/google";
import ReusableHead from "@/components/Head";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      
    >
      <ReusableHead
        title="CloneUi"
        description="Craft Stunning Websites, Effortlessly.
        Elegance Meets Speed in Our Modern React UI Library."
      />

      <Hero title={"Craft Stunning Websites, Effortlessly.Elegance Meets Speed in Our Modern React UI Library."}   buttonText={"Get Started"} backgroundColor={"#030303"} />
     
    </main>
  );
}
