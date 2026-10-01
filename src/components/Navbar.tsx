import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/95 backdrop-blur-md border-b border-sky-500/30 shadow-2xl py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="flex-shrink-0 transition-transform transform hover:scale-105">
                    <img src="/images/download.webp" alt="Kuku Boy Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {['HOME', 'ABOUT', 'STORY', 'UNIVERSE', 'AI ANIMATION', 'VIDEOS', 'EPISODES', 'FAQ'].map((link) => (
                        <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-white hover:text-goldenYellow transition-colors drop-shadow">
                            {link}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:block">
                    <button className="px-6 py-2 bg-gradient-to-r from-goldenYellow to-kukuOrange text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg text-sm">
                        WATCH ADVENTURE
                    </button>
                </div>

                {/* Mobile menu button */}
                <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-[#030712]/95 backdrop-blur-xl border-t border-sky-500/30 shadow-2xl flex flex-col p-6 space-y-4">
                    {['HOME', 'ABOUT', 'STORY', 'UNIVERSE', 'AI ANIMATION', 'VIDEOS', 'EPISODES', 'FAQ'].map((link) => (
                        <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-white hover:text-goldenYellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            {link}
                        </a>
                    ))}
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-goldenYellow to-kukuOrange text-white font-bold rounded-full mt-4">
                        WATCH ADVENTURE
                    </button>
                </div>
            )}
        </nav>
    );
}
