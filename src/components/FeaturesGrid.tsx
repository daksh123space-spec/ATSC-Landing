import React from 'react';

const FeaturesGrid: React.FC = () => {
    return (
        <section className="relative z-20 pb-32 px-4 md:px-8 bg-charcoal">
            <div className="max-w-[1600px] mx-auto">
                <div className="bg-charcoal/90 backdrop-blur-xl border border-white/5 p-8 md:p-12 max-w-2xl mb-16 rounded-sm shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-white/30"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/60">The Philosophy</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">Uncompromising Detail</h2>
                    <p className="text-gray-400 leading-relaxed font-light text-lg">
                        Every fiber is selected for its strength and luster. We merge centuries-old techniques with contemporary aesthetic standards to create textiles that are not just made, but curated.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Series 01 */}
                    <div className="group cursor-pointer relative overflow-hidden h-[600px] lg:h-[700px] lg:col-span-1">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4tOJd1609avFO__MrygoGfk6k1Q-Ji0y9U-axLTHmVRXnqj2h4dbeOO6L3yf_A8JxqREo_l_fa6G6QxtFVMwtI9EFuuovZX6Uk7PY6zCH_dghR1ca4HwsWFYOSS7_KjDg9aCaBzqlLfVGB-6q-shSvWGGsT4v6Ozd3l6C_PYQtSHO2WO0YAxrKHviFaRCohWwllbuaknV0Bn93z71XyuZzvJ0V-yEtMg7FJUzwvjYsM8DP2d7t8oo9XhQ_oOn9n4s9d4aheXDnHSJ")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2 block">Series 01</span>
                            <h3 className="font-serif text-3xl text-white mb-2">Etro-Inspired Patterns</h3>
                            <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                                Intricate designs blending traditional Ethiopian motifs with global luxury.
                            </p>
                        </div>
                    </div>

                    {/* Master Weavers */}
                    <div className="group cursor-pointer relative overflow-hidden h-[600px] lg:h-[700px] lg:col-span-2">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlg4M5WrImfhJ0L8P6n_ORaeiX_2LCvo88tL65QFGWrrmLfg0sYMYc6l6KELiT7aQfAo3McH0TUXDrh2zWkeSreUEi_MByK16aWGcbwkqvwW_NMwJfubnqscSFhoWJ7BQZmXOpW4s1dmUvNPI1kniD_yjjzKwe8cyJvwFWeNr9yFptxt4RLpHnFU6mbQTvCM7IcYHcAKD_BSfXO8QYM18MrT3JX0L1MQ0S9u08BdYpB8fqty0SkU-HICVGxtauzmViunwdDBMz1-8Y")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2 block">The Artisan</span>
                            <h3 className="font-serif text-3xl md:text-5xl text-white mb-2">Master Weavers</h3>
                            <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                                Hand-finished by artisans with generations of expertise in textile manufacturing.
                            </p>
                        </div>
                    </div>

                    {/* Triple-Filtered Cotton */}
                    <div className="group cursor-pointer relative overflow-hidden h-[600px] lg:h-[700px] md:col-span-2 lg:col-span-2">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbJPyrfW0Ij07cnDpWdXiQM_-wJ75xr3WXgLMn36bqZkqxYCGOORe4rshNUlPZmD4yEo30w9eOlsBfVYxY7oUutCHcykfnmNr6O5zn9qOEA78mgBbI-haju6cZA2DRtRTTNyqpfVYhbGsFmiSiYJyj0qRm4aSwGLZiM0EXVchg3yvH8DOVkKYj3d0ZB1f_mXxs64qyJUkO4fDNUxK2kqTejFUnSuetPIcF-gVh9D2o8ftAF9yO_faQVhWPkphMmznYnCtOIne3gVAc")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2 block">Materiality</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">Triple-Filtered Cotton</h3>
                            <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Removing impurities at a microscopic level for unmatched softness.
                            </p>
                        </div>
                    </div>

                    {/* Sustainable Sourcing */}
                    <div className="group cursor-pointer relative overflow-hidden h-[600px] lg:h-[700px] lg:col-span-1">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgO7lNjPYMJJFMCcR2RSeA1YL7oZDPCBRUgks8CDYk7IsgA5nTW5RD1RqZoUmkHV4aRdyy2YOGeDITvebE6ULjAp2awBYq4YBMHqJ0ByL64FC2XBPiOPKxp7P_Q9Kf6E8QAQNe8JAlq_oZv7t5F7ApoH4hEyIzWHVCxe7Z9bgxav1fsRM-zHRl8oUroQwWb7U_GtQmCsVTnxHR-ywIU38_3uxWFAQaflzg_H2xZhwaeIslf7ZxvTty3imDCGgPUfCF8yL0nbtXy2Ty")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2 block">Origin</span>
                            <h3 className="font-serif text-3xl text-white mb-2">Sustainable Sourcing</h3>
                            <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Regenerative agricultural practices from local farmers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
