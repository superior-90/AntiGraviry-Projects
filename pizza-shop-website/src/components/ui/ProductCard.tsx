import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    image: string;
    tag?: string;
}

export function ProductCard({ name, description, price, image, tag }: ProductCardProps) {
    return (
        <div className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full">
            {tag && (
                <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                </div>
            )}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">{name}</h3>
                    <span className="text-lg font-bold text-secondary">${price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {description}
                </p>

                <Button className="w-full gap-2 group/btn" variant="secondary">
                    Add to Order <Plus className="h-4 w-4 transition-transform group-hover/btn:rotate-90" />
                </Button>
            </div>
        </div>
    );
}
