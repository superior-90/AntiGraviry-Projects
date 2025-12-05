import { Section } from "@/components/ui/Section";
import { Flame, Leaf, Clock } from "lucide-react";

const FEATURES = [
    {
        icon: Flame,
        title: "Wood Fired",
        description: "Baked to perfection in our custom-built Italian brick oven at 900°F."
    },
    {
        icon: Leaf,
        title: "Fresh Ingredients",
        description: "We source our produce locally every morning to ensure maximum freshness."
    },
    {
        icon: Clock,
        title: "Fast Delivery",
        description: "Hot and fresh pizza delivered to your doorstep in under 45 minutes."
    }
];

export function WhyUs() {
    return (
        <Section className="bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-card/50 hover:bg-card transition-colors duration-300 border border-transparent hover:border-border">
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                            <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
