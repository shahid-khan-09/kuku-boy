import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Subtle zoom out on load but keep it zoomed in enough to hide watermark
            gsap.fromTo(bgRef.current,
                { scale: 1.50 },
                { scale: 1.25, duration: 3, ease: "power2.out" }
            );

            // Text animation
            gsap.fromTo('.hero-text',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out', delay: 0.5 }
            );

            // Subtle parallax on scroll
            gsap.to(bgRef.current, {
                y: '5%',
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center bg-sky-950">

            {/* Background Video */}
            <video
                ref={bgRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.25]"
            >
                <source src="/images/video2.mp4" type="video/mp4" />
            </video>

            {/* Halki si dark overlay (Slight uniform dark overlay) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main text content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 mt-10 md:mt-0">
                <div className="max-w-2xl text-white">
                    <p className="hero-text text-sm md:text-base font-bold tracking-widest uppercase text-goldenYellow mb-2">AI × ANIMATION × EDTECH</p>
                    <h1 className="hero-text text-6xl md:text-8xl font-black font-display leading-[0.9] mb-4 text-white">
                        MEET <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-goldenYellow to-kukuOrange inline-block">KUKU BOY</span>
                    </h1>
                    <h2 className="hero-text text-2xl md:text-3xl font-bold font-display mb-4 text-sky-100 uppercase tracking-tight">INDIA'S 1ST EDTECH AI ANIMATED SUPERHERO</h2>
                    <p className="hero-text text-lg text-white mb-8 max-w-md font-medium">Where AI, Animation, Superheroes and Learning Come Together.</p>
                    <div className="hero-text flex flex-col sm:flex-row gap-4 pointer-events-auto">
                        <button className="px-8 py-4 bg-kukuOrange hover:bg-orange-500 text-white font-bold rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,165,0,0.6)]">
                            ENTER THE KUKU WORLD
                        </button>
                        <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 text-white font-bold rounded-full transition-transform hover:scale-105 shadow-lg">
                            WATCH ADVENTURE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
