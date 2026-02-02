import React from 'react';

const SuccessStories: React.FC = () => {
    const stories = [
        {
            company: "Star Designs Inc.",
            description: "Star Designs Inc. partnered with us to create a line of premium fabrics that exceeded their quality expectations, resulting in a 30% increase in sales.",
            icon: "trending_up"
        },
        {
            company: "Global Home Furnishings",
            description: "Global Home Furnishings worked with us to develop a range of durable textiles for their furniture products, leading to improved customer satisfaction and repeat business.",
            icon: "storefront"
        }
    ];

    return (
        <section className="relative z-20 py-32 px-6 md:px-12 bg-charcoal border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-20">
                    <div className="mb-6 inline-block rounded-full border border-accent-gold/30 px-4 py-1.5 backdrop-blur-sm">
                        <span className="text-accent-gold text-xs tracking-[0.2em] uppercase font-medium">Case Studies</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">Explore Our <span className="text-[#FFDF00] drop-shadow-[0_0_15px_rgba(255,223,0,0.4)]">Success</span> Stories</h2>
                    <p className="text-gray-400 leading-relaxed font-light text-lg max-w-2xl mx-auto">
                        Dive deep into how our fabrics have revolutionized industries worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
                    {stories.map((story, index) => (
                        <div key={index} className="group relative p-12 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:bg-white/10 transition-all duration-500">
                            <div className="mb-8 text-white/80 group-hover:text-accent-gold transition-colors duration-300">
                                <span className="material-symbols-outlined text-4xl font-light">{story.icon}</span>
                            </div>
                            <h3 className="font-serif text-3xl text-white mb-6">{story.company}</h3>
                            <p className="text-gray-400 font-light leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                                {story.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
