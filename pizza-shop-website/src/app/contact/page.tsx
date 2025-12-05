import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-12 md:pt-40 md:pb-20 bg-muted/10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Get in <span className="text-primary">Touch</span></h1>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold font-serif mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Location</h4>
                                        <p className="text-muted-foreground">123 Gourmet Avenue, Food District<br />New York, NY 10012</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Phone</h4>
                                        <p className="text-muted-foreground">(555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Email</h4>
                                        <p className="text-muted-foreground">hello@midnightslice.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Clock className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Hours</h4>
                                        <p className="text-muted-foreground">Mon - Sun: 11:00 AM - 2:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-xl">
                        <h3 className="text-2xl font-bold font-serif mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" type="text" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <Input id="subject" type="text" placeholder="Reservation question" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" rows={4} placeholder="How can we help you?" />
                            </div>
                            <Button type="submit" className="w-full text-lg">Send Message</Button>
                        </form>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
