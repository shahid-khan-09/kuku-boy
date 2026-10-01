import { ArrowRight, ExternalLink } from 'lucide-react';
export default function Footer() {

    const pageLinks = [
        'About Kuku', 'Learning',
        'Roadmap', 'Gallery',
        'Flying Boots', 'Future vision',
        'Powers', 'Studio',
        'Worlds', 'FAQ',
        'Episodes'
    ];

    return (
        <footer className="bg-[#030712] text-slate-300 py-20 relative overflow-hidden font-sans border-t-4 border-sky-500">
            {/* Background glowing accents */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 mb-20">

                    {/* Column 1: Brand & About (Takes up 5 columns on large screens) */}
                    <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
                        <div className="mb-8 inline-block transform transition-transform hover:scale-105">
                            <img src="/images/download.webp" alt="Kuku Boy Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                        </div>

                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                            Kuku Boy is India's first AI-animated kids superhero: an animated kids cartoon character and adventure universe combining comedy, imagination, flying adventures, time travel, dimensional exploration, AI-assisted animation and learn-by-play experiences.
                        </p>

                        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                            Created by <a href="https://boxfy.co.in/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-bold underline decoration-blue-500/30 underline-offset-4 transition-colors">Boxfy Studio</a>, India, with learning design by <a href="https://www.morphacademy.com/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-bold underline decoration-blue-500/30 underline-offset-4 transition-colors">Morph Academy</a>.
                        </p>
                    </div>

                    {/* Column 2: Navigation (Takes up 3 columns) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-8 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-blue-500 after:mt-3">
                            On This Page
                        </h4>

                        <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
                            {pageLinks.map(link => (
                                <li key={link} className="flex">
                                    <a
                                        href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                                        className="text-sm font-bold text-slate-400 hover:text-white transition-colors group flex items-center gap-2"
                                    >
                                        <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        <span>{link}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social & Partners (Takes up 4 columns) */}
                    <div className="lg:col-span-4 flex flex-col">

                        {/* Social Follow */}
                        <div className="mb-12">
                            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-blue-500 after:mt-3">
                                Follow Kuku Boy
                            </h4>
                            <div className="flex flex-col gap-3">
                                <a href="https://www.youtube.com/@KukuBoy34" target="_blank" rel="noreferrer" className="group flex items-center justify-between w-full max-w-[280px] bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-white/10 rounded-xl px-5 py-3 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <img src="https://cdn.simpleicons.org/youtube/94a3b8" alt="YouTube" className="w-5 h-5 group-hover:invert-0 transition-all opacity-70 group-hover:opacity-100" />
                                        <span className="font-bold text-sm text-slate-300 group-hover:text-white">YouTube @KukuBoy34</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 transition-all" />
                                </a>

                                <a href="https://www.instagram.com/kuku.boy_ai/" target="_blank" rel="noreferrer" className="group flex items-center justify-between w-full max-w-[280px] bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-white/10 rounded-xl px-5 py-3 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <img src="https://cdn.simpleicons.org/instagram/94a3b8" alt="Instagram" className="w-5 h-5 transition-all opacity-70 group-hover:opacity-100" />
                                        <span className="font-bold text-sm text-slate-300 group-hover:text-white">Instagram @kuku.boy_ai</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 transition-all" />
                                </a>
                            </div>
                        </div>

                        {/* Studios */}
                        <div>
                            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6">
                                Studios
                            </h4>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <a href="https://boxfy.co.in/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-blue-900/30 border border-blue-500/30 text-blue-300 font-bold text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    Boxfy AI Studio
                                </a>
                                <a href="https://www.morphacademy.com/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-sky-900/30 border border-sky-500/30 text-sky-300 font-bold text-sm rounded-lg hover:bg-sky-600 hover:text-white transition-all shadow-sm">
                                    Morph Academy
                                </a>
                            </div>
                            <p className="text-xs text-slate-500 font-medium tracking-wide">
                                Social channels are for parents and fans aged 13+.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-slate-500 leading-relaxed gap-6">
                    <p className="max-w-4xl pr-4">
                        Kuku Boy &copy; {new Date().getFullYear()} Boxfy Studio. Kuku Boy is a fictional character. All third-party product names and logos are trademarks of their respective owners and are used only to identify tools and platforms; no endorsement is implied.
                    </p>
                    <div className="flex gap-6 flex-shrink-0 font-bold">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
