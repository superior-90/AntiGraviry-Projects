'use client'

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section } from "@/components/ui/Section";

const MENU_CATEGORIES = [
    {
        title: "Signature Pizzas",
        items: [
            {
                name: "Classic Margherita",
                description: "San Marzano tomato sauce, fresh buffalo mozzarella, basil, extra virgin olive oil.",
                price: 18,
                image: "/images/margherita.png",
                tag: "Best Seller"
            },
            {
                name: "Truffle & Mushroom",
                description: "Wild mushrooms, truffle cream base, thyme, mozzarella, parmesan shavings.",
                price: 24,
                image: "/images/specialty.png",
                tag: "Chef's Choice"
            },
            {
                name: "Double Pepperoni",
                description: "Crispy cup pepperoni, spicy salami, mozzarella, hot honey drizzle.",
                price: 22,
                image: "/images/hero-pizza.png",
            }
        ]
    },
    {
        title: "Vegetarian",
        items: [
            {
                name: "Garden Veggie",
                description: "Roasted bell peppers, red onions, mushrooms, black olives, fresh oregano.",
                price: 20,
                image: "/images/veggie.png",
                tag: "Vegetarian"
            },
            {
                name: "Four Cheese",
                description: "Mozzarella, gorgonzola, parmesan, ricotta, garlic butter base.",
                price: 21,
                image: "/images/margherita.png", // Reusing image
            },
            {
                name: "Spinach & Artichoke",
                description: "Creamy white base, spinach, artichoke hearts, roasted garlic.",
                price: 22,
                image: "/images/veggie.png", // Reusing image
            }
        ]
    },
    {
        title: "Meat Lovers",
        items: [
            {
                name: "The Carnivore",
                description: "Pepperoni, italian sausage, meatballs, bacon, mozzarella.",
                price: 26,
                image: "/images/hero-pizza.png", // Reusing image
            },
            {
                name: "Spicy Hawaiian",
                description: "Roasted pineapple, jalapeños, crispy pancetta, mozzarella.",
                price: 23,
                image: "/images/specialty.png", // Reusing image
            }
        ]
    }
];

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <div className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-muted/10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Our <span className="text-primary">Menu</span></h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our curated selection of artisanal pizzas, salads, and sides.
                    </p>
                </div>
            </div>

            {/* Menu Categories */}
            {MENU_CATEGORIES.map((category) => (
                <Section key={category.title} className="py-12 md:py-16 border-b border-border/40 last:border-0">
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif">{category.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.items.map((item) => (
                            <ProductCard key={item.name} {...item} />
                        ))}
                    </div>
                </Section>
            ))}

            <Footer />
        </main>
    );
}
