import React from 'react';
import { Link } from 'react-router-dom';

const Waitlist: React.FC = () => {
    return (
        <section className="py-32 px-4 bg-charcoal relative">
            <div
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4tOJd1609avFO__MrygoGfk6k1Q-Ji0y9U-axLTHmVRXnqj2h4dbeOO6L3yf_A8JxqREo_l_fa6G6QxtFVMwtI9EFuuovZX6Uk7PY6zCH_dghR1ca4HwsWFYOSS7_KjDg9aCaBzqlLfVGB-6q-shSvWGGsT4v6Ozd3l6C_PYQtSHO2WO0YAxrKHviFaRCohWwllbuaknV0Bn93z71XyuZzvJ0V-yEtMg7FJUzwvjYsM8DP2d7t8oo9XhQ_oOn9n4s9d4aheXDnHSJ")', mixBlendMode: 'overlay' }}
            />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">Get in Touch</h2>
                <p className="text-xl text-gray-400 font-light mb-12 max-w-xl mx-auto">
                    Have a question or looking to collaborate? Reach out to our team.
                </p>
                <form className="max-w-md mx-auto flex flex-col gap-6">
                    <input
                        className="w-full bg-transparent border-b border-white/30 py-4 px-2 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors text-center text-lg"
                        placeholder="Full Name"
                        type="text"
                    />
                    <input
                        className="w-full bg-transparent border-b border-white/30 py-4 px-2 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors text-center text-lg"
                        placeholder="Email Address"
                        type="email"
                    />
                    <Link to="/contact" className="w-full">
                        <button
                            className="mt-8 bg-white text-charcoal px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full"
                            type="button"
                        >
                            Contact
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default Waitlist;
