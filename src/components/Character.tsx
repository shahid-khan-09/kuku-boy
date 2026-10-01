import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Character() {
    const [activePose, setActivePose] = useState('FRONT');
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const poses = [
        { id: 'FRONT', name: 'Original Grid', desc: 'The base concept explorations of Kuku Boy.', icon: '🧑‍🚀' },
        { id: 'ACTION', name: 'Action Shots', desc: 'Dynamic superhero action sequences in game.', icon: '⚡' },
        { id: 'FLY', name: 'Flying Mode', desc: 'Soaring through the edutainment sky!', icon: '🚀' },
    ];

    const getImgSrc = (id: string) => {
        switch (id) {
            case 'FRONT': return '/images/kuku-4.jpg'; // Assuming these are the collages
            case 'ACTION': return '/images/kuku-15.jpg';
            case 'FLY': return '/images/kuki2.png';
            default: return '/images/kuki2.png';
        }
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.char-fade',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
            );
        }, containerRef);

        // 3D Tilt Effect on mousemove for image container
        const handleMouseMove = (e: MouseEvent) => {
            if (!imageContainerRef.current) return;
            const rect = imageContainerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
            const y = (e.clientY - rect.top - rect.height / 2) * -0.05;

            gsap.to(imageContainerRef.current, {
                rotationY: x,
                rotationX: y,
                duration: 0.5,
                ease: 'power1.out',
                transformPerspective: 1000
            });
        };

        const handleMouseLeave = () => {
            if (!imageContainerRef.current) return;
            gsap.to(imageContainerRef.current, { rotationY: 0, rotationX: 0, duration: 0.8, ease: 'power3.out' });
        };

        const currentImageRef = imageContainerRef.current;
        if (currentImageRef) {
            currentImageRef.addEventListener('mousemove', handleMouseMove);
            currentImageRef.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            ctx.revert();
            if (currentImageRef) {
                currentImageRef.removeEventListener('mousemove', handleMouseMove);
                currentImageRef.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    // Flash effect on tab change
    useEffect(() => {
        if (imageContainerRef.current) {
            gsap.fromTo(imageContainerRef.current,
                { scale: 0.95, filter: 'brightness(2) blur(10px)' },
                { scale: 1, filter: 'brightness(1) blur(0px)', duration: 0.6, ease: 'power3.out' }
            );
        }
    }, [activePose]);

    return (
        <section id="character" ref={containerRef} className="py-32 bg-[#020813] overflow-hidden relative">

            {/* Awesome Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left text / controls */}
                    <div className="flex-1 w-full max-w-xl z-20">
                        <div className="char-fade inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 backdrop-blur-md mb-6">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs">Hero Blueprint</span>
                        </div>

                        <h2 className="char-fade text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 uppercase leading-[0.9]">
                            MEET <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">THE HERO</span>
                        </h2>

                        <p className="char-fade text-blue-200/70 text-lg md:text-xl mb-12 max-w-md font-medium leading-relaxed">
                            Explore Kuku Boy's versatile design created for multi-platform entertainment, from epic 2D storybooks to high-fidelity AI worlds.
                        </p>

                        <div className="flex flex-col gap-4">
                            {poses.map((pose) => (
                                <button
                                    key={pose.id}
                                    onClick={() => setActivePose(pose.id)}
                                    className={`char-fade group relative w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 overflow-hidden text-left ${activePose === pose.id
                                            ? 'bg-blue-900/40 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.2)]'
                                            : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                                        }`}
                                >
                                    {/* Animated background glow for active tab */}
                                    {activePose === pose.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent pointer-events-none"></div>
                                    )}

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner transition-colors duration-300 ${activePose === pose.id ? 'bg-cyan-500/20 shadow-cyan-500/50' : 'bg-black/20'
                                        }`}>
                                        {pose.icon}
                                    </div>

                                    <div>
                                        <h4 className={`font-black text-xl tracking-wide uppercase transition-colors duration-300 ${activePose === pose.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                                            }`}>
                                            {pose.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 font-medium mt-1 pr-4">
                                            {pose.desc}
                                        </p>
                                    </div>

                                    {/* Active Indicator Line */}
                                    <div className={`absolute right-0 top-0 bottom-0 w-1 bg-cyan-400 transition-transform duration-500 origin-top ${activePose === pose.id ? 'scale-y-100' : 'scale-y-0'
                                        }`}></div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right visual - Premium Glowing Magic Card */}
                    <div className="flex-1 w-full relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center char-fade z-10" style={{ perspective: '1200px' }}>
                        <div
                            ref={imageContainerRef}
                            className="relative w-full max-w-[700px] rounded-[3rem] p-3 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transform-gpu"
                        >
                            {/* Animated glowing border effect */}
                            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-400 via-blue-600 to-transparent opacity-20 pointer-events-none "></div>

                            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] bg-black/40 rounded-[2.5rem] overflow-hidden shadow-inner">
                                {poses.map((pose) => (
                                    <img
                                        key={pose.id}
                                        src={getImgSrc(pose.id)}
                                        alt={pose.name}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activePose === pose.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                            }`}
                                    />
                                ))}

                                {/* Overlay reflections to make it look like a glass screen */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-20 mix-blend-overlay"></div>
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none z-20 mix-blend-screen scale-y-50 origin-top"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
