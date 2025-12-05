"use client"
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";

const FEATURED_ITEMS = [
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
        name: "Garden Veggie",
        description: "Roasted bell peppers, red onions, mushrooms, black olives, fresh oregano.",
        price: 20,
        image: "/images/veggie.png",
        tag: "Vegetarian"
    }
];

export function FeaturedMenu() {
    return (
        <Section className="bg-background relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our <span className="text-primary">Signatures</span></h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Hand-tossed dough, premium ingredients, and a wood-fired oven. Taste the difference in every slice.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FEATURED_ITEMS.map((item) => (
                    <ProductCard key={item.name} {...item} />
                ))}
            </div>
        </Section>
    );
}