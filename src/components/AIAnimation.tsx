import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AIAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = [
        'STORY',
        'CHARACTER DESIGN',
        'AI GENERATION',
        'ANIMATION',
        'VOICE & LIP SYNC',
        'EDITING',
        'DISTRIBUTION'
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.pipeline-line',
                { height: 0 },
                {
                    height: '100%', ease: 'none',
                    scrollTrigger: {
                        trigger: '.pipeline-container',
                        start: 'top 50%',
                        end: 'bottom 50%',
                        scrub: true,
                    }
                }
            );

            gsap.fromTo('.pipeline-node',
                { scale: 0, opacity: 0 },
                {
                    scale: 1, opacity: 1, stagger: 1,
                    scrollTrigger: {
                        trigger: '.pipeline-container',
                        start: 'top 50%',
                        end: 'bottom 50%',
                        scrub: true,
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="ai-animation" ref={containerRef} className="py-24 bg-gradient-to-br from-sky-900 to-indigo-950 text-white relative overflow-hidden">

            {/* Background Image soft overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <img src="/images/kuku-22.jpg" alt="Creative Studio" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-goldenYellow mb-2 uppercase">AI Animation Pipeline</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white">FROM CONCEPT<br />TO SCREEN</h3>
                </div>

                <div className="pipeline-container relative max-w-4xl mx-auto pl-8 md:pl-0">

                    {/* Central Line */}
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-white/10 md:-translate-x-1/2 rounded-full hidden md:block"></div>
                    <div className="pipeline-line absolute top-0 left-8 md:left-1/2 w-1 bg-gradient-to-b from-goldenYellow to-kukuOrange md:-translate-x-1/2 rounded-full hidden md:block" style={{ height: '0%' }}></div>

                    <div className="flex flex-col gap-12 relative">
                        {steps.map((step, i) => (
                            <div key={i} className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                <div className={`flex-1 hidden md:flex ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                    {/* Empty spacer for desktop layout */}
                                </div>

                                {/* Node */}
                                <div className="relative z-10 w-16 h-16 rounded-full bg-indigo-900 border-4 border-goldenYellow flex items-center justify-center font-display font-bold text-xl pipeline-node shadow-[0_0_20px_rgba(255,215,0,0.5)] shrink-0 opacity-0 transform scale-0">
                                    0{i + 1}
                                </div>

                                <div className="flex-1 w-full pipeline-node opacity-0 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h4 className="text-2xl font-display font-bold text-white">{step}</h4>
                                    <p className="text-sky-200 mt-2 text-sm">Empowered by next-generation AI workflows combining visual development with automated toolsets.</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
