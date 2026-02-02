import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
    ];

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl">
            <div className="px-8 h-20 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 group cursor-pointer relative">
                    <img
                        src="/logo-transparent.png"
                        alt="ATSC Logo"
                        className="h-10 w-auto object-contain brightness-110 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-[0.15em] uppercase text-white/70">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-white transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-white after:transition-all ${location.pathname === link.path ? 'text-white after:w-full' : 'after:w-0 hover:after:w-full'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        to="/contact"
                        className="hidden lg:block border border-white/20 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
