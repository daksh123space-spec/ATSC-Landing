import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <header className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-charcoal">
                <video
                    className="w-full h-full object-cover opacity-80"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-charcoal"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-[1400px] mx-auto pt-20">
                <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6 text-white/80">Est. Ethiopia 1984</span>
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight mb-8 leading-[1] text-shadow max-w-5xl">
                    Elevating Textile <br /><span className="italic font-light">Excellence</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto font-light leading-relaxed mb-12">
                    Crafting fabrics of unparalleled quality with innovative expertise to push boundaries.
                </p>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <Link
                        to="/services"
                        className="bg-white text-charcoal px-10 py-4 rounded-full font-medium tracking-wide hover:bg-off-white hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Explore Now
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white px-10 py-4 rounded-full font-medium tracking-wide flex items-center gap-2 hover:gap-4 transition-all group backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 shadow-lg"
                    >
                        Contact
                    </Link>
                </div>
            </div>

        </header>
    );
};

export default Hero;
