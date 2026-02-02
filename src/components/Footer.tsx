import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white/60 py-20 px-6 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto text-center space-y-12">
                <div className="flex flex-col items-center gap-6">
                    <img
                        src="/logo-full.png"
                        alt="ATSC Logo"
                        className="h-24 w-auto object-contain brightness-110"
                    />
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-6 text-xs text-white/30">
                    <p>© 2026 Arbaminch Textile Company</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
