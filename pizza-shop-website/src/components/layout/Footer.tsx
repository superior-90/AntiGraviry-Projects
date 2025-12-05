import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border/40 text-card-foreground">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-serif tracking-tight">
                            Midnight<span className="text-primary">Slice</span>.
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Premium artisanal pizzas handcrafted with passion and the finest ingredients. Experience the taste of the night.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Explore</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Visit Us</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>123 Gourmet Avenue</li>
                            <li>Food District, NY 10012</li>
                            <li>(555) 123-4567</li>
                            <li>hello@midnightslice.com</li>
                        </ul>
                    </div>

                    {/* Hours & Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Open Hours</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                            <li>Mon-Sun: 11:00 AM - 2:00 AM</li>
                        </ul>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Midnight Slice. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
