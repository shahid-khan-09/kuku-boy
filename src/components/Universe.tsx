import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Universe() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Elegant Cinematic Parallax Background
            gsap.to(bgRef.current, {
                y: '15%',
                scale: 1.05,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });

            // Majestic Text Reveal
            gsap.fromTo(textRef.current,
                { y: 80, scale: 0.95, opacity: 0, filter: 'blur(8px)' },
                {
                    y: 0, scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out',
                    scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="universe" ref={containerRef} className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-sky-950">

            {/* The single majestic background image attached by user */}
            <div className="absolute inset-0 w-full h-[120%] -top-[10%] transform-gpu overflow-hidden">
                <img
                    ref={bgRef}
                    // Attempting to load the image. Note: Please ensure your attached image is named 'kuku-bg-academy.jpg' inside public/images/
                    src="/images/kuku-bg-academy.jpg"
                    alt="Kuku Academy"
                    className="w-full h-full object-cover origin-center opacity-95"
                    onError={(e) => {
                        // Fallbacks just in case the name differs
                        (e.target as HTMLImageElement).src = "/images/new kuki.png";
                    }}
                />
            </div>

            {/* Strategic Gradient Overlays for Guaranteed Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B132C]/70 via-[#0B132C]/30 to-[#0B132C]/80 pointer-events-none"></div>

            {/* Main Content & Title */}
            <div ref={textRef} className="relative z-20 flex flex-col items-center text-center w-full max-w-6xl px-6">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display text-white mb-2 tracking-tighter drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] uppercase leading-[1.1]">
                    WELCOME TO THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFEA00] to-[#FF8C00] inline-block mt-2 tracking-tight pb-3 pr-4 drop-shadow-[0_10px_30px_rgba(255,165,0,0.3)]">
                        KUKU UNIVERSE
                    </span>
                </h2>

                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent rounded-full mt-6 mb-8 drop-shadow-lg opacity-80"></div>

                <p className="text-white/95 text-xl sm:text-2xl font-black tracking-wide max-w-3xl mx-auto drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] leading-relaxed">
                    Where AI, superheroes, and pure imagination collide to build the future of immersive edutainment.
                </p>
            </div>

        </section>
    );
}
