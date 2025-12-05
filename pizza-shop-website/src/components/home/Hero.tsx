"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-pizza.png"
                    alt="Delicious Pizza"
                    fill
                    className="object-cover brightness-[0.6]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tight text-white drop-shadow-2xl">
                        Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Night</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                        Experience the finest artisanal pizzas, handcrafted with passion and fired to perfection.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                            View Full Menu
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white text-white hover:bg-white hover:text-black">
                            Book a Table
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            >
                <span className="text-sm tracking-widest uppercase opacity-70">Scroll</span>
            </motion.div>
        </div>
    );
}
