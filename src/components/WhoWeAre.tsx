import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhoWeAre: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the background image
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="relative z-20 py-48 md:py-64 px-6 md:px-12 bg-charcoal overflow-hidden border-t border-white/5">
            {/* Professional Background Image Layer with Parallax */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y, height: "120%" }}
                    className="absolute inset-0 top-[-10%]"
                >
                    <img
                        src="/about-bg.png"
                        alt="ATSC Facility"
                        className="w-full h-full object-cover grayscale-[20%] brightness-[0.7]"
                    />
                </motion.div>
                {/* Refined Overlays for depth and readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-90"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content Column */}
                    <div className="lg:col-span-7 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="mb-8 inline-flex items-center gap-3">
                                <div className="h-[1px] w-8 bg-accent-gold"></div>
                                <span className="text-accent-gold text-sm tracking-[0.4em] uppercase font-semibold">About Us</span>
                            </div>

                            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-10 leading-[1.1] font-medium italic tracking-tight">
                                Perfection in every <span className="text-accent-gold italic">thread</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Content Column */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div className="h-px w-20 bg-accent-gold/50 mb-8 lg:hidden"></div>

                            <p className="text-2xl md:text-3xl text-white font-light leading-snug">
                                Arbaminch Textile SC is dedicated to delivering excellence in textile crafting with a culture of innovation.
                            </p>

                            <p className="text-lg text-gray-300 font-light leading-relaxed tracking-wide border-l-2 border-accent-gold/30 pl-6">
                                Founded by visionary leaders committed to surpassing global standards in fabric production.
                                We blend traditional craftsmanship with cutting-edge technology to create fabrics that inspire the world of fashion.
                            </p>

                            <Link to="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-8 px-10 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md hover:border-accent-gold/50 hover:shadow-[0_0_20px_rgba(255,223,0,0.2)] text-white text-sm tracking-[0.2em] uppercase transition-all duration-300 group flex items-center gap-3"
                                >
                                    <span>Read Our Story</span>
                                    <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Subtle floating texture element */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 right-[-5%] w-64 h-64 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none"
            />
        </section>
    );
};

export default WhoWeAre;
