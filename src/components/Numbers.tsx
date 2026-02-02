import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface NumberStatProps {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

const NumberStat: React.FC<NumberStatProps> = ({ value, label, suffix = "", prefix = "", decimals = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const count = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const displayValue = useTransform(count, (latest) =>
        prefix + latest.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }) + suffix
    );

    React.useEffect(() => {
        if (isInView) {
            count.set(value);
        }
    }, [isInView, value, count]);

    return (
        <div ref={ref} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm hover:border-accent-gold/50 transition-colors duration-300 group">
            <motion.span className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent-gold mb-3 font-bold">
                {displayValue}
            </motion.span>
            <span className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase font-medium group-hover:text-white transition-colors">
                {label}
            </span>
        </div>
    );
};

const Numbers: React.FC = () => {
    const stats = [
        { value: 35, label: "Years of Excellence", suffix: "+" },
        { value: 6000, label: "Jobs by 2026", suffix: "+" },
        { value: 180000, label: "Sq.M Land Area" },
        { value: 1.34, label: "ETB Investment", suffix: "B", decimals: 2 }
    ];

    const currentCertifications = [
        { name: "Gold Tax Payer", icon: "military_tech" },
        { name: "ISO Certified", icon: "verified" }
    ];

    const upcomingCertifications = [
        { name: "OEKO-TEX®", logo: "/logos/oeko-tex.png" },
        { name: "Sedex", logo: "/logos/sedex.png" },
        { name: "Higg Index", logo: "/logos/higg-index.png" },
        { name: "CTPAT™", logo: "/logos/ctpat.png" },
        { name: "Global Recycled Standard", logo: "/logos/grs.png" },
        { name: "BSCI", logo: "/logos/bsci.png" }
    ];

    const partners = [
        { logo: "/logos/indochine.png", invert: false },
        { logo: "/logos/shin.png", invert: true },
        { logo: "/logos/epic.png", invert: false },
        { logo: "/logos/antex.png", invert: false },
        { logo: "/logos/everest.png", invert: true },
        { logo: "/logos/injo.png", invert: true },
        { logo: "/logos/tal.png", invert: true }
    ];

    return (
        <section className="relative z-20 py-32 bg-charcoal overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-gold/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 inline-block rounded-full border border-accent-gold/30 px-4 py-1.5 bg-black/20 backdrop-blur-sm"
                    >
                        <span className="text-accent-gold text-xs tracking-[0.2em] uppercase font-medium">Proof of Scale</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight font-black"
                    >
                        Numbers That Speak <span className="text-[#FFDF00] drop-shadow-[0_0_15px_rgba(255,223,0,0.5)]">Excellence</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto"
                    >
                        Over three decades of continuous growth, innovation, and commitment to global standards
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <NumberStat
                                value={stat.value}
                                label={stat.label}
                                suffix={stat.suffix}
                                decimals={stat.decimals}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Sections */}
                <div className="space-y-16 mb-24">
                    {/* Current Certifications */}
                    <div className="text-center">
                        <h3 className="text-white/50 text-sm tracking-[0.3em] uppercase mb-8 font-medium italic">Accreditations</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {currentCertifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 backdrop-blur-sm"
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold border border-accent-gold/30">
                                        <span className="material-symbols-outlined text-xl">{cert.icon}</span>
                                    </div>
                                    <div className="text-left">
                                        <span className="text-gray-300 text-sm md:text-base tracking-widest uppercase font-bold block">{cert.name}</span>
                                        <span className="text-gray-500 text-[10px] tracking-widest uppercase">Verified Standard</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Marquee */}
                    <div className="relative mb-24">
                        <div className="text-center mb-10">
                            <h3 className="text-white/30 text-xs tracking-[0.3em] uppercase font-medium italic">Other Certifications</h3>
                        </div>

                        <div className="flex overflow-hidden group py-10 relative">
                            <motion.div
                                className="flex whitespace-nowrap gap-16 items-center"
                                animate={{ x: [0, -1500] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 35
                                }}
                            >
                                {[...upcomingCertifications, ...upcomingCertifications, ...upcomingCertifications].map((cert, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center min-w-[280px] px-10"
                                    >
                                        <div className="w-48 h-48 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center p-8 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                            <img
                                                src={cert.logo}
                                                alt={cert.name}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${cert.name}&background=ffffff10&color=fff&size=200`;
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Strategic Partners Marquee */}
                <div className="relative pt-16 border-t border-white/5">
                    <div className="text-center mb-10">
                        <h3 className="text-accent-gold/60 text-xs tracking-[0.4em] uppercase font-bold italic">Strategic Partners for Apparel</h3>
                    </div>

                    <div className="flex overflow-hidden group py-10 relative">
                        <motion.div
                            className="flex whitespace-nowrap gap-24 items-center"
                            animate={{ x: [0, -2000] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 45
                            }}
                        >
                            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center min-w-[300px] px-8"
                                >
                                    {partner.logo ? (
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 w-full h-32 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                            <img
                                                src={partner.logo}
                                                alt="Strategic Partner"
                                                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                                onError={(e) => {
                                                    console.error(`Failed to load ${partner.logo}`);
                                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Partner&background=ffffff&color=000&size=200`;
                                                }}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient Fades for Marquee */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Numbers;
