import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FinalCTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const characterRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(characterRef.current,
                { scale: 0.5, y: 100, opacity: 0 },
                {
                    scale: 1.2, y: -50, opacity: 1, ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-orange-100">

            {/* Background with sunset vibe */}
            <img
                src="/images/kuku-26.jpg"
                alt="Kuku Sunset"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/30 to-zinc-950"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center -translate-y-20">
                <h2 className="text-5xl md:text-8xl font-display font-black text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-8 max-w-4xl mx-auto leading-tight">
                    THE FUTURE OF LEARNING IS AN ADVENTURE.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
                    <button className="px-8 py-4 bg-goldenYellow hover:bg-yellow-400 text-sky-900 font-black rounded-full transition-transform hover:scale-105 shadow-xl w-full sm:w-auto">
                        WATCH THE ADVENTURE
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold rounded-full transition-transform hover:scale-105 w-full sm:w-auto">
                        ENTER THE KUKU WORLD
                    </button>
                </div>
            </div>

            {/* Hero flying towards screen */}
            <img
                ref={characterRef}
                src="/images/kuki2.png"
                alt="Kuku Boys Flyer"
                className="absolute bottom-0 z-20 object-contain w-[400px] md:w-[600px] pointer-events-none drop-shadow-2xl translate-y-[20%]"
            />
        </section>
    );
}
