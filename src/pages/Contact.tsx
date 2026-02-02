import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', formState);
        alert('Thank you for your message. We will get back to you shortly.');
    };

    return (
        <div className="bg-charcoal min-h-screen text-white">
            {/* Full-Screen Dark Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/contact-hero.jpg"
                        alt="Contact Us"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="font-serif text-6xl md:text-8xl mb-8 tracking-tighter"
                    >
                        Get in <span className="italic font-light text-accent-gold">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl md:text-2xl text-white/60 font-light leading-relaxed"
                    >
                        Reach out to us for inquiries, partnerships, or any other information regarding our textile solutions.
                    </motion.p>
                </div>
            </section>

            {/* Main Contact Content */}
            <section className="py-32 px-6 bg-white text-charcoal">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-5xl font-serif font-black mb-6 tracking-tight">Contact Us Today</h2>
                                <p className="text-xl text-charcoal/60 font-light max-w-md">
                                    We are here to assist you with any questions or requests. Feel free to contact us via phone or email.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-charcoal/5 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-500">
                                        <Phone className="w-6 h-6 text-charcoal group-hover:text-accent-gold transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal/40 mb-1">Phone</h4>
                                        <p className="text-xl font-medium tracking-tight">+251 11 371 9430</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-charcoal/5 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-500">
                                        <Mail className="w-6 h-6 text-charcoal group-hover:text-accent-gold transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal/40 mb-1">Email</h4>
                                        <p className="text-xl font-medium tracking-tight">headquarters@arbaminchtextile.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-charcoal/5 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-500">
                                        <MapPin className="w-6 h-6 text-charcoal group-hover:text-accent-gold transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal/40 mb-1">Address</h4>
                                        <p className="text-xl font-medium tracking-tight leading-snug">
                                            Loli Building-3rd floor, <br />
                                            Bisrate Gebreal, Addis Ababa, Ethiopia.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-charcoal/10">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal/40 mb-6">Follow Us</h4>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            whileHover={{ y: -5 }}
                                            className="w-12 h-12 rounded-xl bg-charcoal text-white flex items-center justify-center hover:bg-accent-gold transition-all duration-300"
                                        >
                                            <Icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-charcoal/5 p-12 md:p-16 rounded-[4rem] border border-charcoal/5 shadow-2xl relative overflow-hidden"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-charcoal/60 ml-2">Name <span className="text-rose-500">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Full Name"
                                        className="w-full h-16 px-8 rounded-2xl bg-white border border-charcoal/10 focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/5 outline-none transition-all duration-300 text-charcoal"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-charcoal/60 ml-2">Email <span className="text-rose-500">*</span></label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="email@example.com"
                                        className="w-full h-16 px-8 rounded-2xl bg-white border border-charcoal/10 focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/5 outline-none transition-all duration-300 text-charcoal"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-[0.2em] text-charcoal/60 ml-2">Message <span className="text-rose-500">*</span></label>
                                    <textarea
                                        required
                                        rows={6}
                                        placeholder="How can we help you?"
                                        className="w-full py-6 px-8 rounded-3xl bg-white border border-charcoal/10 focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/5 outline-none transition-all duration-300 text-charcoal resize-none"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-6 bg-[#e91e63] text-white rounded-2xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl hover:bg-[#d81b60] transition-all duration-300"
                                >
                                    <Send size={18} />
                                    Send Message
                                </motion.button>
                            </form>

                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Global Presence Mini-Section */}
            <section className="py-40 bg-charcoal text-center overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent-gold text-xs tracking-[0.6em] uppercase font-bold mb-6 block"
                    >
                        Headquarters
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-16 tracking-tighter">Rooted in Ethiopia, <br /><span className="italic font-light text-white/40">Serving the World.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { city: 'Addis Ababa', type: 'Corporate HQ', country: 'Ethiopia' },
                            { city: 'Sebeta', type: 'Dyeing & Printing', country: 'Ethiopia' },
                            { city: 'Arba Minch', type: 'Spinning & Weaving', country: 'Ethiopia' }
                        ].map((office, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
                            >
                                <h3 className="text-2xl font-serif text-white mb-2">{office.city}</h3>
                                <p className="text-accent-gold text-xs tracking-widest uppercase font-black mb-4">{office.type}</p>
                                <p className="text-white/30 font-light">{office.country}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Background Map Graphic Placeholder */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                    <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="400" cy="200" r="1" fill="white" />
                        <path d="M100 200C150 150 250 150 300 200S450 250 500 200S650 150 700 200" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Contact;
