import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const services = [
        {
            title: "Fabric Weaving",
            description: "Daily Capacity 62000 meters",
            video: "/fabric-video.mp4",
            icon: null
        },
        {
            title: "Dyeing and Printing",
            description: "Daily Capacity 200,000 Meters",
            video: "/fabricunwrappinganimation.mp4",
            icon: "palette"
        },
        {
            title: "Yarn Spinning",
            description: "Daily Capacity 20 Tons",
            video: "/qualitycontrol.mp4",
            icon: "settings_input_component"
        }
    ];

    return (
        <section ref={targetRef} className="relative h-[600vh] bg-charcoal">
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 relative h-full flex flex-col justify-center items-center">

                    {/* Heading - two lines with different styles */}
                    <div className="text-center relative z-0 px-8 mb-20">
                        <h2 className="font-serif font-black text-white text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight tracking-tight uppercase">
                            Explore our wide variety of
                        </h2>
                        {/* Decorative line above */}
                        <div className="w-32 h-0.5 bg-white mx-auto mb-4 opacity-30"></div>
                        <motion.h2
                            style={{
                                color: '#D4AF37',
                                textShadow: useTransform(scrollYProgress, [0, 0.15], ["0px 0px 0px rgba(212,175,55,0)", "0px 0px 15px rgba(212,175,55,0.4)"])
                            }}
                            className="font-serif italic text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight relative overflow-hidden group"
                        >
                            <span className="relative z-10">Textile Services</span>
                            {/* Shining Effect */}
                            <motion.div
                                animate={{
                                    left: ["-100%", "200%"]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-50 z-20"
                            />
                        </motion.h2>
                        {/* Decorative line below */}
                        <div className="w-32 h-0.5 bg-white mx-auto opacity-30"></div>
                        <p className="text-gray-400 leading-relaxed font-light text-lg md:text-xl max-w-3xl mx-auto mt-8">
                            Explore our diverse range of textiles catering to fashion, home furnishings, and industrial needs.
                        </p>
                    </div>

                    {/* Cards container - perfectly centered, overlapping text */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="relative h-[70vh] w-full max-w-5xl">
                            {services.map((service, index) => {
                                // Timeline for each card with pause at center
                                const startProgress = 0.15 + (index * 0.30);
                                const centerStartProgress = startProgress + 0.15;
                                const centerEndProgress = startProgress + 0.25;
                                const exitProgress = startProgress + 0.40;

                                const isLastCard = index === services.length - 1;

                                // Arc motion: Bottom-Right -> Center -> Bottom-Left
                                const xInput = isLastCard
                                    ? [startProgress, centerStartProgress, centerEndProgress, 1]
                                    : [startProgress, centerStartProgress, centerEndProgress, exitProgress];

                                const xOutput = isLastCard
                                    ? ["100%", "0%", "0%", "0%"]
                                    : ["100%", "0%", "0%", "-100%"];

                                const yInput = isLastCard
                                    ? [startProgress, centerStartProgress, centerEndProgress, 1]
                                    : [startProgress, centerStartProgress, centerEndProgress, exitProgress];

                                const yOutput = isLastCard
                                    ? ["80%", "0%", "0%", "0%"]
                                    : ["80%", "0%", "0%", "80%"];

                                // Rotation for natural arc feel
                                const rotateInput = isLastCard
                                    ? [startProgress, centerStartProgress, centerEndProgress, 1]
                                    : [startProgress, centerStartProgress, centerEndProgress, exitProgress];

                                const rotateOutput = isLastCard
                                    ? [12, 0, 0, 0]
                                    : [12, 0, 0, -12];

                                // Scale only (no opacity fade)
                                const scaleInput = xInput;
                                const scaleOutput = isLastCard
                                    ? [0.75, 1, 1, 1]
                                    : [0.75, 1, 1, 0.75];

                                const x = useTransform(scrollYProgress, xInput, xOutput);
                                const y = useTransform(scrollYProgress, yInput, yOutput);
                                const rotate = useTransform(scrollYProgress, rotateInput, rotateOutput);
                                const scale = useTransform(scrollYProgress, scaleInput, scaleOutput);

                                // Brightness: dim when not centered
                                const brightness = useTransform(
                                    scrollYProgress,
                                    [startProgress, centerStartProgress, centerEndProgress, exitProgress],
                                    [0.5, 1.1, 1.1, 0.5]
                                );

                                // Glow effect when centered
                                const glowIntensity = useTransform(
                                    scrollYProgress,
                                    [startProgress, centerStartProgress, centerEndProgress, exitProgress],
                                    [0, 0.45, 0.45, 0]
                                );

                                return (
                                    <motion.div
                                        key={index}
                                        style={{
                                            x,
                                            y,
                                            rotate,
                                            scale,
                                            filter: useTransform(brightness, (v) => `brightness(${v})`),
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            top: 0,
                                            left: 0,
                                            zIndex: index * 10,
                                            boxShadow: useTransform(
                                                glowIntensity,
                                                (v) => `
                                                    0 0 ${100 * v}px rgba(255, 255, 255, ${v * 0.8}), 
                                                    0 0 ${180 * v}px rgba(212, 175, 55, ${v * 0.3}),
                                                    inset 0 0 ${30 * v}px rgba(255, 255, 255, ${v * 0.5})
                                                `
                                            )
                                        }}
                                        className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-white/40"
                                    >
                                        {/* Solid BLACK background layer to completely block text */}
                                        <div className="absolute inset-0 bg-black"></div>

                                        {/* Video layer */}
                                        <div className="absolute inset-0">
                                            <video
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                            >
                                                <source src={service.video} type="video/mp4" />
                                            </video>
                                        </div>

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 p-12">
                                            {service.icon && (
                                                <div className="mb-6 text-accent-gold opacity-100">
                                                    <span className="material-symbols-outlined text-5xl font-light">{service.icon}</span>
                                                </div>
                                            )}
                                            <h3 className="font-serif text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">{service.title}</h3>
                                            <p className="text-xl text-gray-300 font-light text-white">
                                                {service.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Button - Repositioned at bottom of sticky container to avoid overlap */}
                    <div className="absolute bottom-16 z-50">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-charcoal rounded-full font-bold uppercase tracking-[0.2em] hover:bg-accent-gold hover:text-white hover:scale-105 transition-all duration-300 shadow-2xl flex-nowrap whitespace-nowrap group"
                        >
                            <span>Explore Services</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
