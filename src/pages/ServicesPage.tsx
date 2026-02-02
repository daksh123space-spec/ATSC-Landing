import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ServiceSection = ({ title, content, stats, images, index }: any) => {
    const isEven = index % 2 === 0;

    return (
        <section className={`py-40 px-6 border-b border-white/5 ${index % 2 === 1 ? 'bg-white/[0.01]' : ''}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Text Content */}
                    <div className={`space-y-12 ${!isEven ? 'lg:order-2' : ''}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-accent-gold text-xs tracking-[0.5em] uppercase font-bold mb-8 block">Section 0{index + 1}</span>
                            <h2 className="font-serif text-6xl md:text-8xl text-white mb-10 tracking-tighter leading-none">{title}</h2>
                            <div className="space-y-6">
                                {content.map((p: string, i: number) => (
                                    <p key={i} className="text-xl text-white/60 font-light leading-relaxed">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Interactive Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="p-8 rounded-[2.5rem] bg-gradient-to-br from-accent-gold/10 to-transparent border border-accent-gold/20"
                        >
                            <p className="text-accent-gold text-sm font-medium italic opacity-80">
                                Driving industrial excellence through vertical integration and advanced technology.
                            </p>
                        </motion.div>
                    </div>

                    {/* Visuals & Stats */}
                    <div className={`space-y-12 ${!isEven ? 'lg:order-1' : ''}`}>
                        {/* Image Grid */}
                        {images && images.length > 0 && (
                            <div className="grid grid-cols-12 gap-4 h-[500px]">
                                {images.length === 1 ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="col-span-12 h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl"
                                    >
                                        <img src={images[0]} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt={title} />
                                    </motion.div>
                                ) : (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="col-span-7 h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl"
                                        >
                                            <img src={images[0]} className="w-full h-full object-cover" alt={title} />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20, y: 40 }}
                                            whileInView={{ opacity: 1, x: 0, y: 40 }}
                                            viewport={{ once: true }}
                                            className="col-span-5 h-[80%] rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl translate-y-20"
                                        >
                                            <img src={images[1]} className="w-full h-full object-cover" alt={title} />
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-6 pt-12">
                            {stats.map((stat: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:bg-white/[0.06] transition-all duration-500 shadow-xl"
                                >
                                    <div className="text-accent-gold text-3xl font-bold mb-2 tracking-tighter drop-shadow-sm">{stat.value}</div>
                                    <div className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-black">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesPage: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const services = [
        {
            title: "Yarn Spinning",
            images: ["/yarn-spinning-1.png", "/yarn-spinning-2.png"],
            content: [
                "The spinning department consists of a total of 15,000 spindles of ring spinning frames for fine counts spinning and 1,728 rotors of the modern open-end spinning machines for low & medium counts spinning with high productivity.",
                "The plant is capable of producing different types of cotton, polyester staple fibre, cotton fibre & their blends yarns. Yarn produced in the Arbaminch plant is mainly used for weaving and sold for the local market.",
                "Our preparatory section is capable of delivering either carded or combed inputs in the case of cotton fibre processing depending on the quality of yarn required by the customer."
            ],
            stats: [
                { label: "Daily Yarn Capacity", value: "20 Tons" },
                { label: "Efficiency", value: "80%" },
                { label: "Ring Spindles", value: "15,000" },
                { label: "Avg. Yarn Count", value: "Ne 20" }
            ]
        },
        {
            title: "Fabric Weaving",
            images: ["/fabric-weaving-1.png"],
            content: [
                "The weaving department at our Arbaminch factory has 232 rapier looms equipped with microprocessors that can produce about 31,200 linear meters of grey fabrics per day at 3,336 picks per meter weft density and at 85% loom efficiency.",
                "Our weaving capacity has been doubled by installing an additional 100 water jet looms at our expansion project in Sebeta town, bringing the total output of grey fabrics to 62,000 linear meters per day.",
                "This expansive infrastructure allows us to meet the growing demands of both local and international markets with unmatched speed and precision."
            ],
            stats: [
                { label: "Daily Capacity", value: "62,000 Mtrs" },
                { label: "Water Jet Looms", value: "100" },
                { label: "Rapier Looms", value: "232" },
                { label: "Efficiency", value: "85%" }
            ]
        },
        {
            title: "Dyeing & Printing",
            content: [
                "Our state-of-the-art dyeing & printing plant in Sebeta Town was built at a cost of 1.34 billion ETB, featuring the latest in textile finishing infrastructure and utilities.",
                "The facility is capable of producing high-quality printed and dyed fabrics with a maximum daily capacity of 200,000 meters, depending on the specific fabric quality and requirements.",
                "Our rotary printing and jet dyeing machines ensure that every meter of fabric meets international standards for color fastness and finish quality."
            ],
            stats: [
                { label: "Max Daily Capacity", value: "200k Mtrs" },
                { label: "Total Investment", value: "1.34B ETB" },
                { label: "Rotary Printing", value: "3 Units" },
                { label: "Jet Dyeing", value: "14 Units" }
            ]
        }
    ];

    return (
        <div className="bg-charcoal min-h-screen text-white pt-24">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-accent-gold z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Epic Video Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60 scale-105"
                    >
                        <source src="/services-hero-video.mp4" type="video/mp4" />
                    </video>
                    {/* Multi-layered overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal"></div>
                    <div className="absolute inset-0 bg-charcoal/20"></div>
                </div>

                <div className="relative z-10 text-center px-6 mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.span
                            initial={{ letterSpacing: "0.2em", opacity: 0 }}
                            animate={{ letterSpacing: "0.8em", opacity: 0.8 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="text-accent-gold text-[11px] uppercase mb-10 block font-black"
                        >
                            A Heritage of Excellence
                        </motion.span>

                        <h1 className="font-serif text-[clamp(4.5rem,14vw,11rem)] leading-[0.85] tracking-tighter mb-12 drop-shadow-2xl">
                            The Pinnacle of <br />
                            <span className="italic font-light text-white/40">Textile Mastery</span>
                        </h1>

                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="w-16 h-[1px] bg-accent-gold/30"></div>
                            <div className="w-2 h-2 rounded-full bg-accent-gold/40"></div>
                            <div className="w-16 h-[1px] bg-accent-gold/30"></div>
                        </div>

                        <p className="max-w-4xl mx-auto text-xl md:text-2xl text-white font-light leading-relaxed drop-shadow-xl opacity-90">
                            Experience the epitome of textile innovation with our cutting-edge services <br className="hidden md:block" />
                            that redefine quality and craftsmanship.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Scroll Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-12 flex items-center gap-4"
                >
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 rotate-180 [writing-mode:vertical-lr]">Scroll</div>
                    <div className="w-px h-24 bg-gradient-to-b from-accent-gold/50 to-transparent"></div>
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="relative z-10">
                {services.map((service, idx) => (
                    <ServiceSection key={idx} {...service} index={idx} />
                ))}
            </div>

            {/* Professional Footer CTA */}
            <section className="py-60 px-6 bg-black text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 blur-[150px] rounded-full"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="font-serif text-6xl md:text-8xl mb-8 tracking-tighter text-white">Scale your <span className="italic font-light text-accent-gold underline decoration-white/10 underline-offset-[16px]">Production</span>.</h2>
                    <p className="text-xl text-white/40 font-light mb-20 leading-relaxed max-w-2xl mx-auto">
                        Leverage Ethiopia's leading textile infrastructure for your next project. Our vertical model ensures quality, speed, and reliability.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <a
                            href="/contact"
                            className="px-16 py-7 bg-white text-charcoal rounded-full font-bold uppercase tracking-[0.2em] hover:bg-accent-gold hover:text-white transition-all duration-500 shadow-2xl"
                        >
                            Request Consultation
                        </a>
                        <a
                            href="/about"
                            className="px-12 py-7 border border-white/20 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500 text-xs"
                        >
                            Our Story
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ServicesPage;
