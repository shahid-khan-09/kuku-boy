import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);

    const stories = [
        { num: '1', title: 'EVERYDAY CHALLENGES', desc: 'Transforming simple problems into incredible adventures.', img: '/images/kuku-10.jpg', color: 'from-[#FFB020]', shadow: 'shadow-[#FFB020]' },
        { num: '2', title: 'ACTION-PACKED EDUTAINMENT', desc: 'Learning science and math through fast-paced gameplay missions.', img: '/images/kuku-11.jpg', color: 'from-[#3B82F6]', shadow: 'shadow-[#3B82F6]' },
        { num: '3', title: 'BILINGUAL ADVENTURES', desc: 'Connecting cultures by exploring Hindi and English seamlessly.', img: '/images/kuku-9.jpg', color: 'from-[#8B5CF6]', shadow: 'shadow-[#8B5CF6]' },
        { num: '4', title: 'INTERACTIVE MORALS', desc: 'Making mistakes is just the first step to discovering the right path.', img: '/images/kuku-20.jpg', color: 'from-[#10B981]', shadow: 'shadow-[#10B981]' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('.game-level-card');

            // Horizontal scroll animation
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + (scrollWrapperRef.current?.offsetWidth || 0),
                }
            });

            // Card hover 3D effects
            sections.forEach((card: any) => {
                const inner = card.querySelector('.card-inner');
                card.addEventListener('mousemove', (e: MouseEvent) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(inner, {
                        rotationY: x * 0.05,
                        rotationX: -y * 0.05,
                        transformPerspective: 900,
                        ease: 'power1.out',
                        duration: 0.5
                    });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(inner, { rotationY: 0, rotationX: 0, ease: 'power3.out', duration: 0.5 });
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="story" ref={containerRef} className="relative w-full h-screen bg-[#070b19] overflow-hidden flex flex-col justify-center text-white">

            {/* Animated Game Background Grid & Particles */}
            <div className="absolute inset-0 border-t border-[#1e2a4a] bg-[linear-gradient(to_right,#1e2a4a_1px,transparent_1px),linear-gradient(to_bottom,#1e2a4a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Header Content */}
            <div className="absolute top-10 md:top-20 left-0 w-full z-20 px-6 lg:px-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between pointer-events-none">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-400 uppercase drop-shadow-[0_4px_2px_rgba(0,0,0,0.8)] filter drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                        Level Select
                    </h2>
                    <p className="text-xl md:text-2xl text-sky-300 font-bold tracking-widest mt-2 uppercase">
                        The Game Journey
                    </p>
                </div>

                {/* Gamified UI Stats */}
                <div className="hidden md:flex gap-6 mt-4 md:mt-0 font-black">
                    <div className="flex items-center gap-2 bg-[#121c38] px-4 py-2 rounded-xl border-2 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                        <span className="text-2xl">💰</span>
                        <span className="text-amber-500 text-xl tracking-wider">9,999</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#121c38] px-4 py-2 rounded-xl border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                        <span className="text-2xl">❤️</span>
                        <span className="text-red-500 text-xl tracking-wider">FULL</span>
                    </div>
                </div>
            </div>

            {/* Horizontal Scrolling Area */}
            <div className="relative mt-20 md:mt-32 w-full h-[55vh] md:h-[65vh] flex items-center z-10 pl-6 lg:pl-20">
                <div ref={scrollWrapperRef} className="flex h-full gap-8 md:gap-16 pr-[50vw]">
                    {stories.map((story, i) => (
                        <div key={i} className="game-level-card relative w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 h-full flex items-center justify-center">

                            <div className={`card-inner w-full h-full max-h-[600px] rounded-3xl bg-[#0d162d] border-4 border-[#253970] overflow-hidden flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.8)]`}>

                                {/* Game Screen Image */}
                                <div className="relative h-[55%] w-full rounded-t-2xl overflow-hidden border-b-4 border-[#253970]">
                                    <img src={story.img} className="w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition duration-300"></div>

                                    {/* Level Badge */}
                                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${story.color} to-blue-900 px-6 py-2 rounded-full border-2 border-white/50 text-white font-black text-xl shadow-lg transform -skew-x-12`}>
                                        STAGE {story.num}
                                    </div>

                                    {/* Stars (3 stars game ui) */}
                                    <div className="absolute top-4 right-4 flex gap-1 bg-black/60 backdrop-blur-md px-3 py-2 rounded-full border border-white/20">
                                        <span className="text-amber-400 text-xl filter drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]">★</span>
                                        <span className="text-amber-400 text-xl filter drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]">★</span>
                                        <span className="text-amber-400 text-xl filter drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]">★</span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-[#0d162d] to-[#040813]">
                                    <div>
                                        <h3 className={`text-2xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${story.color} to-white mb-2 leading-tight uppercase`}>
                                            {story.title}
                                        </h3>
                                        <p className="text-blue-200/80 font-medium md:text-lg">
                                            {story.desc}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-4 flex justify-between items-center pr-2">
                                        <div className="text-emerald-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2 animate-pulse">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div> UNLOCKED
                                        </div>
                                        <button className={`bg-gradient-to-r ${story.color} to-blue-600 hover:scale-105 active:scale-95 transition-transform px-8 py-3 rounded-xl text-white font-black uppercase tracking-widest border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:${story.shadow}`}>
                                            PLAY NOW ▶
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Instruction block bottom */}
            <div className="absolute bottom-6 left-0 w-full text-center pointer-events-none text-sky-400/50 font-bold text-sm tracking-[0.3em] uppercase">
                &lt;&lt; Scroll to explore &gt;&gt;
            </div>

        </section>
    );
}
