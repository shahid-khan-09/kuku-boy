import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Info, Target, MonitorPlay, Sparkles, PlayCircle, CheckCircle2, Languages, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function KeyFacts() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.bento-item',
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.8, ease: 'back.out(1.2)', scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%'
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-b from-[#ffffff] to-[#eff6ff] relative overflow-hidden">

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-50"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

                <div className="text-center mb-16 bento-item">
                    <h2 className="text-sm font-black text-blue-600 tracking-[0.2em] uppercase mb-4 drop-shadow-sm flex items-center justify-center gap-2">
                        <Target className="w-5 h-5" />
                        Mission Intel
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-display font-black text-slate-800 drop-shadow-sm">
                        KEY FACTS
                    </h3>
                </div>

                {/* Bento Grid Layout! */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">

                    {/* WHO & WHAT (Huge primary card) */}
                    <div className="bento-item md:col-span-3 lg:col-span-2 row-span-1 lg:row-span-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] p-8 md:p-10 shadow-xl overflow-hidden relative group text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                        <Sparkles className="w-10 h-10 text-yellow-300 mb-6" />
                        <h4 className="text-sm font-black text-blue-200 uppercase tracking-widest mb-2">Who is Kuku?</h4>
                        <p className="text-2xl md:text-3xl font-display font-black leading-tight mb-8">
                            A curious, funny village boy with futuristic Flying Boots.
                        </p>

                        <h4 className="text-sm font-black text-blue-200 uppercase tracking-widest mb-2 mt-auto">What is it?</h4>
                        <p className="text-lg text-blue-50 font-medium">
                            India's first AI-animated kids superhero cartoon and learning universe.
                        </p>
                    </div>

                    {/* FORMATS (Tall card) */}
                    <div className="bento-item md:col-span-1 lg:col-span-1 border border-slate-200 row-span-1 lg:row-span-2 bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center group">
                        <MonitorPlay className="w-12 h-12 text-sky-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Formats</h4>
                        <p className="text-slate-700 font-bold text-lg leading-snug">
                            YouTube Shorts & micro-series now.
                        </p>
                        <div className="w-8 h-1 bg-slate-100 my-4 rounded-full"></div>
                        <p className="text-slate-500 font-medium text-sm">
                            OTT series, games and AR/VR in development.
                        </p>
                    </div>

                    {/* LANGUAGE (Wide card) */}
                    <div className="bento-item md:col-span-2 lg:col-span-1 border border-slate-200 bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] rounded-[2rem] p-8 block relative overflow-hidden">
                        <Languages className="w-8 h-8 text-indigo-500 mb-4" />
                        <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Language</h4>
                        <p className="text-slate-800 font-bold text-xl">
                            Hindi-first
                        </p>
                        <p className="text-slate-500 font-medium text-sm mt-1">
                            With English titles and learning words.
                        </p>
                    </div>

                    {/* PARTNERS (Small square card) */}
                    <div className="bento-item col-span-1 md:col-span-1 lg:col-span-1 bg-[#fff8e1] border border-amber-200 shadow-[0_10px_40px_-20px_rgba(251,191,36,0.3)] rounded-[2rem] p-6 flex flex-col justify-center">
                        <CheckCircle2 className="w-8 h-8 text-amber-500 mb-4" />
                        <div>
                            <h4 className="text-xs font-black text-amber-600/70 uppercase tracking-widest mb-1">Created By</h4>
                            <p className="text-slate-800 font-black cursor-pointer hover:text-blue-600">Boxfy AI Studio, India</p>
                        </div>
                        <div className="w-full h-[1px] bg-amber-200/50 my-3"></div>
                        <div>
                            <h4 className="text-xs font-black text-amber-600/70 uppercase tracking-widest mb-1">Learning Partner</h4>
                            <p className="text-slate-800 font-black cursor-pointer hover:text-blue-600">Morph Academy</p>
                        </div>
                    </div>

                    {/* WHERE TO WATCH */}
                    <div className="bento-item col-span-1 md:col-span-2 lg:col-span-3 bg-slate-900 rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <div className="flex items-center gap-4 mb-4 sm:mb-0 z-10 w-full sm:w-auto">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                <Eye className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Where to Watch</h4>
                                <p className="text-lg font-bold">Join the Adventure Online</p>
                            </div>
                        </div>

                        <div className="flex gap-4 z-10 w-full sm:w-auto justify-start sm:justify-end">
                            <a href="#" className="pl-4 pr-5 py-3 bg-red-600 hover:bg-red-500 transition-colors rounded-xl font-bold flex items-center gap-2">
                                <PlayCircle className="w-5 h-5" /> YouTube
                            </a>
                            <a href="#" className="px-5 py-3 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 transition-opacity rounded-xl font-bold flex items-center gap-2">
                                @kuku.boy_ai
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
