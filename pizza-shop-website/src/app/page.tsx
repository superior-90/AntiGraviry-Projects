import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { WhyUs } from "@/components/home/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Hero />
      <FeaturedMenu />
      <WhyUs />

      {/* Chef Section - Simple inline for diversity */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Meet the <span className="text-primary">Master</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Chef Marco Rossi brings over 20 years of culinary excellence from Naples to your table.
              His philosophy is simple: strict adherence to tradition, with a touch of modern flair.
              Every dough is fermented for 48 hours to achieve that perfect airy lightness.
            </p>
            <div className="pt-4">
              <span className="font-serif text-2xl italic text-secondary">"Pizza is not just food, it's an emotion."</span>
              <p className="mt-2 font-bold">- Chef Marco</p>
            </div>
          </div>
          <div className="flex-1 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/chef.png"
              alt="Chef Marco"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
