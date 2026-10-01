import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Gamepad2, GraduationCap, MonitorPlay, Sparkles, Box, Shirt } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EdTech() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const charRef = useRef<HTMLImageElement>(null);

    const features = [
        { text: 'AI-ASSISTED ANIMATED STORYTELLING', icon: <Sparkles size={24} />, color: 'from-[#FFB020] to-[#FF8C00]', shadow: 'shadow-orange-500/40' },
        { text: 'HINDI + ENGLISH LEARNING', icon: <BookOpen size={24} />, color: 'from-[#3B82F6] to-[#2563EB]', shadow: 'shadow-blue-500/40' },
        { text: 'INTERACTIVE GAMING', icon: <Gamepad2 size={24} />, color: 'from-[#8B5CF6] to-[#6D28D9]', shadow: 'shadow-purple-500/40' },
        { text: 'LEARNING THROUGH PLAY', icon: <GraduationCap size={24} />, color: 'from-[#10B981] to-[#059669]', shadow: 'shadow-emerald-500/40' },
        { text: 'AR / VR EXPERIENCES', icon: <Box size={24} />, color: 'from-[#F43F5E] to-[#E11D48]', shadow: 'shadow-rose-500/40' },
        { text: 'OTT & DIGITAL DISTRIBUTION', icon: <MonitorPlay size={24} />, color: 'from-[#06B6D4] to-[#0891B2]', shadow: 'shadow-cyan-500/40' },
        { text: 'CHARACTER MERCHANDISE', icon: <Shirt size={24} />, color: 'from-[#EC4899] to-[#DB2777]', shadow: 'shadow-pink-500/40' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 3D pop setup for capsules
            gsap.fromTo('.edtech-item',
                { opacity: 0, z: -150, rotationX: -15, y: 50 },
                {
                    opacity: 1, z: 0, rotationX: 0, y: 0,
                    stagger: 0.1, duration: 1.2, ease: 'back.out(1.4)',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 65%',
                    }
                }
            );

            // Character floating break-out animation
            gsap.fromTo(charRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 60%',
                        onEnter: () => {
                            const v = document.getElementById('edtech-video') as HTMLVideoElement;
                            if (v) v.play().catch(() => { });
                        }
                    }
                }
            );

        }, containerRef);

        // Subtly map mouse position to 3D rotation of the capsules
        const handleMouseMove = (e: MouseEvent) => {
            if (!rightPanelRef.current) return;
            const rect = rightPanelRef.current.getBoundingClientRect();
            // Calculate mouse position relative to the center of the right panel
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            gsap.to('.edtech-capsule-inner', {
                rotationY: x * 0.02,
                rotationX: parseInt('-' + (y * 0.02).toString()), // reverse Y
                ease: 'power2.out',
                duration: 0.5
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            ctx.revert();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section ref={containerRef} className="py-24 sm:py-32 bg-black font-sans relative overflow-hidden" style={{ perspective: '1200px' }}>

            {/* Ambient Background Lights so black isn't too flat */}
            <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">

                {/* Left Side: Solid Background Image Merging */}
                <div className="flex-1 w-full relative flex justify-center items-center min-h-[500px] lg:min-h-[700px]">

                    {/* Heroic Character Video */}
                    <div className="relative z-10 w-[95%] sm:w-[85%] lg:w-[120%] max-w-[650px] mb-[-10%] rounded-3xl overflow-hidden shadow-2xl">
                        <video
                            id="edtech-video"
                            ref={charRef as any}
                            src="/images/Kuku 4.mp4"
                            className="w-full h-full object-cover transform scale-105"
                            loop
                            muted
                            playsInline
                            preload="none"
                            style={{ filter: 'saturate(1.1) contrast(1.05)' }}
                        />
                    </div>

                </div>

                {/* Right Side: 3D Interactive Content */}
                <div className="flex-1 w-full" ref={rightPanelRef} style={{ perspective: '1000px' }}>

                    {/* Extruded 3D Title */}
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display text-white mb-2 leading-[0.95] tracking-tighter" style={{
                        textShadow: '0 1px 0 #555, 0 2px 0 #444, 0 3px 0 #333, 0 4px 15px rgba(255,255,255,0.1)'
                    }}>
                        KUKU BOY <br />
                        <span className="text-[#3B82F6]" style={{
                            textShadow: '0 1px 0 #1E3A8A, 0 2px 0 #1D4ED8, 0 3px 0 #2563EB, 0 4px 15px rgba(59,130,246,0.3)'
                        }}>
                            × EDTECH
                        </span>
                    </h2>

                    <h3 className="text-xl sm:text-2xl text-amber-500 font-extrabold mb-10 uppercase tracking-widest drop-shadow-sm border-l-4 border-amber-500 pl-4 py-1">
                        Refining Learning Through Entertainment
                    </h3>

                    {/* Highly 3D Capsules (Dark Mode) */}
                    <div className="flex flex-wrap gap-4 sm:gap-5 justify-start">
                        {features.map((feature, i) => (
                            <div key={i} className="edtech-item" style={{ perspective: '800px' }}>
                                <div className="edtech-capsule-inner flex items-center gap-4 bg-white/5 backdrop-blur-3xl px-5 py-3.5 sm:px-6 sm:py-4 rounded-[2rem] border border-white/10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 cursor-default group transform-gpu" style={{ transformStyle: 'preserve-3d' }}>

                                    {/* 3D Orb Icon */}
                                    <div className={`flex-shrink-0 relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-[inset_0_-5px_10px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.5)] ${feature.shadow} group-hover:scale-110 transition-transform duration-300`} style={{ transform: 'translateZ(20px)' }}>
                                        {/* Inner highlight for sphere effect */}
                                        <div className="absolute top-1 left-2 w-4 h-4 bg-white/40 rounded-full blur-[2px]"></div>
                                        {feature.icon}
                                    </div>

                                    {/* Text POP */}
                                    <span className="font-extrabold text-white text-[0.8rem] sm:text-sm tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ transform: 'translateZ(10px)' }}>
                                        {feature.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
