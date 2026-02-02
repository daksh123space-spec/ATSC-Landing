import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const TimelineItem = ({ year, title, description, side, index, color }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className={`relative flex w-full mb-24 md:mb-40 ${side === 'left' ? 'justify-start md:pr-1/2' : 'justify-end md:pl-1/2'}`}
        >
            <div className={`w-full md:w-[45%] p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md group hover:bg-white/[0.08] transition-all duration-700 shadow-3xl relative overflow-hidden`}>
                {/* Accent Glow */}
                <div
                    style={{ backgroundColor: color }}
                    className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                />

                <span
                    style={{ color: color }}
                    className="font-serif text-5xl mb-6 block italic font-light drop-shadow-lg"
                >
                    {year}
                </span>
                <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-tighter">{title}</h4>
                <p className="text-white/70 font-light leading-relaxed text-lg">{description}</p>

                {/* Connector Dot */}
                <div
                    style={{ backgroundColor: color }}
                    className={`hidden md:block absolute top-14 w-5 h-5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] z-20 transition-all duration-500 group-hover:scale-150 ${side === 'left' ? '-right-[2.45rem]' : '-left-[2.45rem]'}`}
                />
            </div>
        </motion.div>
    );
};

const About: React.FC = () => {
    const containerRef = useRef(null);
    const timelineRef = useRef(null);
    const valuesRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Specific scroll progress for the timeline line to ensure it fills the section
    const { scrollYProgress: milestoneProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(milestoneProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const timelineData = [
        {
            year: "1991",
            title: "The Genesis",
            description: "Established by the National Textile Corporation in Southern Ethiopia, beginning a 35-year journey of industrial excellence.",
            side: "left",
            color: "#D4AF37"
        },
        {
            year: "180,000",
            title: "Industrial Scale",
            description: "Developing a massive 180,000 sqm footprint, featuring our high-performance U-shaped pre-engineered facility.",
            side: "right",
            color: "#60A5FA"
        },
        {
            year: "High End",
            title: "Advanced Craft",
            description: "Mastering complex fabric constructions, from Chiffon and Smokey to Satin Taffeta and Mattress covers.",
            side: "left",
            color: "#F472B6"
        },
        {
            year: "2022",
            title: "Global Apparel",
            description: "Full-scale entry into apparel manufacturing with global strategic alliances, becoming a major player in finished fashion.",
            side: "right",
            color: "#34D399"
        }
    ];

    const values = [
        { name: "Innovation", icon: "lightbulb", delay: 0 },
        { name: "Teamwork", icon: "groups", delay: 0.1 },
        { name: "Leadership", icon: "star", delay: 0.2 },
        { name: "Trust", icon: "handshake", delay: 0.3 },
        { name: "Quality", icon: "energy_program_saving", delay: 0.4 },
        { name: "Honesty", icon: "shield", delay: 0.5 },
        { name: "Simplicity", icon: "deployed_code", delay: 0.6 },
        { name: "Culture", icon: "auto_stories", delay: 0.7 }
    ];

    return (
        <div ref={containerRef} className="bg-charcoal text-white selection:bg-accent-gold selection:text-charcoal overflow-hidden">

            {/* Apple-style Hero Reveal */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 0.3], [0, 200]), scale: useTransform(scrollYProgress, [0, 0.3], [1, 1.1]) }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/about-hero-new.png"
                        alt="ATSC Visionary"
                        className="w-full h-full object-cover opacity-80 brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal"></div>
                </motion.div>

                <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center"
                    >
                        <h1 className="font-serif text-[clamp(4rem,15vw,12rem)] mb-12 leading-[0.85] tracking-tighter">
                            A Legacy in <br />
                            <span className="italic font-light text-accent-gold drop-shadow-2xl">Motion</span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-white/40 uppercase tracking-[0.6em] text-xs font-bold"
                        >
                            Industrial Leadership Since 1991
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Timeline Section */}
            <section ref={timelineRef} className="pt-24 pb-12 px-6 relative max-w-7xl mx-auto overflow-visible">
                <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none overflow-hidden rounded-[4rem]">
                    <img src="/threads-bg.png" alt="Threads Depth" className="w-full h-full object-cover grayscale brightness-50" />
                    <div className="absolute inset-0 bg-charcoal/20 backdrop-blur-[1px]"></div>
                </div>
                <div className="text-center mb-40">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="font-serif text-6xl md:text-8xl tracking-tight"
                    >
                        Our <span className="text-accent-gold italic font-light">Milestones</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/5 overflow-hidden rounded-full">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="w-full h-full bg-gradient-to-b from-accent-gold via-blue-400 to-emerald-400 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                        />
                    </div>

                    {timelineData.map((item, idx) => (
                        <TimelineItem key={idx} {...item} index={idx} />
                    ))}
                </div>
            </section>

            {/* Vision & Mission Card Section */}
            <section className="py-24 px-6 bg-black relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter uppercase italic bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent opacity-80">
                        Vision & Mission
                    </h2>
                </motion.div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-[3.5rem] overflow-hidden group bg-white/[0.02] border border-white/5 p-16 flex flex-col justify-end"
                    >
                        <span className="text-white/5 text-[280px] font-serif absolute -top-10 -right-10 pointer-events-none italic font-normal tracking-tighter">Vision</span>
                        <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8 font-black opacity-80">Strategic Vision</h3>
                        <p className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-white tracking-tighter mb-8 z-10">
                            Becoming the <br />
                            <span className="text-white italic font-light drop-shadow-lg">Global Benchmark</span>
                        </p>
                        <p className="text-white/50 font-light text-lg max-w-md leading-relaxed z-10">
                            To be a company at international standards which will be the most reliable and the highest quality manufacturer in the Textile & Apparel industry.
                        </p>
                    </motion.div>

                    {/* Mission Card: Full Uncompromised Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative h-auto min-h-[600px] rounded-[3.5rem] overflow-hidden group bg-white/[0.03] border border-white/10 p-16"
                    >
                        <span className="text-white/5 text-[280px] font-serif absolute -top-10 -right-20 pointer-events-none italic font-normal tracking-tighter">Mission</span>
                        <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-12 font-black opacity-80 z-10">Our Mission</h3>
                        <div className="space-y-12 z-10 relative">
                            <div className="group/item">
                                <span className="text-accent-gold/40 text-sm block mb-2 font-mono">01</span>
                                <p className="text-2xl md:text-3xl font-serif text-white group-hover/item:text-accent-gold transition-colors duration-500">
                                    To be a pioneer & leader in the textile sector by providing end-to-end solutions and upgrading technology.
                                </p>
                            </div>
                            <div className="group/item">
                                <span className="text-accent-gold/40 text-sm block mb-2 font-mono">02</span>
                                <p className="text-2xl md:text-3xl font-serif text-white/70 group-hover/item:text-white transition-colors duration-500">
                                    Ensuring top-level customer and stakeholder satisfaction through long-term cooperative business ethics.
                                </p>
                            </div>
                            <div className="group/item">
                                <span className="text-accent-gold/40 text-sm block mb-2 font-mono">03</span>
                                <p className="text-2xl md:text-3xl font-serif text-white/50 group-hover/item:text-white transition-colors duration-500">
                                    Creating global economic value while maintaining strict environmental and social responsibilities.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* National Defense Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-charcoal/90" />
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0.4, 0.7], [0, 100]) }}
                    className="absolute inset-0 -z-20 opacity-50 brightness-[0.4]"
                >
                    <img src="/defense-collage.png" alt="Armored" className="w-full h-full object-cover" />
                </motion.div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-accent-gold text-xs tracking-[0.6em] uppercase mb-6 block font-bold">Leading Supplier</span>
                            <h2 className="font-serif text-5xl md:text-6xl mb-12 leading-tight tracking-tight">
                                Securing the Nation through <span className="italic font-light text-accent-gold">National Defense Support</span>
                            </h2>
                            <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
                                We have expanded our wings into garment manufacturing since 2022 and have already become a <span className="text-white font-bold">leading supplier</span> for the <span className="text-accent-gold italic">National Forces’ uniforms requirements</span>. We supply across all product categories required and are expanding into international force requirements.
                            </p>
                            <div className="flex gap-4">
                                <div className="h-[2px] w-20 bg-accent-gold rounded-full" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl aspect-[1.2/1]"
                        >
                            <img src="/defense-1.jpg" alt="Defense Uniforms" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values: Elegant Styled Glassmorphism */}
            <section ref={valuesRef} className="py-40 px-6 max-w-7xl mx-auto text-center relative overflow-hidden rounded-[4rem] mb-20 bg-black/10">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/values-nature-new.jpg"
                        alt="Core DNA"
                        className="w-full h-full object-cover opacity-90 brightness-[0.8] blur-[4px] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h2 className="font-serif text-[clamp(3.5rem,10vw,8rem)] tracking-tight text-white leading-none">Core Values</h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: val.delay }}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "rgba(255,255,255,0.08)",
                                borderColor: "rgba(255,255,255,0.2)"
                            }}
                            className="relative aspect-[1.1/1] rounded-[3rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl flex flex-col items-center justify-center group transition-all duration-500 shadow-2xl"
                        >
                            <span className="material-symbols-outlined text-3xl text-white mb-8 font-light group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out">
                                {val.icon}
                            </span>
                            <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-white/50 group-hover:text-white transition-colors duration-500">
                                {val.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
