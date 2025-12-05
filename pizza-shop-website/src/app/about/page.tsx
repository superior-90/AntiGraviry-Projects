import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-12 md:pt-40 md:pb-20 bg-muted/10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Our <span className="text-primary">Story</span></h1>
                </div>
            </div>

            <Section>
                <div className="flex flex-col md:flex-row items-center gap-12 sm:gap-16">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif">From Naples with <span className="text-secondary">Love</span></h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                Midnight Slice began with a simple dream: to bring the authentic taste of Neapolitan pizza to the modern nightlife. Founded by Chef Marco Rossi, our journey started in a small family kitchen in Naples, where the secrets of the perfect fermentation were passed down through generations.
                            </p>
                            <p>
                                We believe that pizza is more than just food; it's a social experience. That's why we've designed our space to be warm, inviting, and perfect for late-night gatherings.
                            </p>
                            <p>
                                Our ingredients are sourced directly from sustainable farms. The flour comes from Italian mills, the tomatoes from the volcanic soils of San Marzano, and the mozzarella is delivered fresh daily.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 relative aspect-square w-full max-w-md mx-auto">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform translate-x-4 translate-y-4" />
                        <Image
                            src="/images/chef.png"
                            alt="Chef Marco"
                            fill
                            className="object-cover rounded-2xl relative z-10 shadow-2xl"
                        />
                    </div>
                </div>
            </Section>

            <Section className="bg-primary text-primary-foreground">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-bold font-serif mb-2">20+</div>
                        <div className="opacity-90">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold font-serif mb-2">15k</div>
                        <div className="opacity-90">Happy Customers</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold font-serif mb-2">48h</div>
                        <div className="opacity-90">Dough Fermentation</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold font-serif mb-2">100%</div>
                        <div className="opacity-90">Organic Flour</div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
