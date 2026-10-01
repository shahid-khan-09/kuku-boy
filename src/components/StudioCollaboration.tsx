import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StudioCollaboration() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const boxfyCard = useRef<HTMLDivElement>(null);
    const morphCard = useRef<HTMLDivElement>(null);
    const centerCharacter = useRef<HTMLDivElement>(null);
    const lineCanvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animations
            gsap.fromTo('.heading-stagger',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%'
                    }
                }
            );

            gsap.fromTo(boxfyCard.current,
                { x: -100, opacity: 0, rotationY: -15 },
                {
                    x: 0, opacity: 1, rotationY: 0, duration: 1.2, ease: 'back.out(1.2)',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' }
                }
            );

            gsap.fromTo(morphCard.current,
                { x: 100, opacity: 0, rotationY: 15 },
                {
                    x: 0, opacity: 1, rotationY: 0, duration: 1.2, ease: 'back.out(1.2)',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' }
                }
            );

            gsap.fromTo(centerCharacter.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: { trigger: centerCharacter.current, start: 'top 85%' }
                }
            );

            gsap.fromTo('.bottom-text-left',
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: centerCharacter.current, start: 'top 70%' } }
            );

            gsap.fromTo('.bottom-text-right',
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: centerCharacter.current, start: 'top 70%' } }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Draw connecting lines on canvas
    useEffect(() => {
        const canvas = lineCanvas.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setSize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };
        setSize();
        window.addEventListener('resize', setSize);

        const drawLines = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const midX = canvas.width / 2;
            const topY = 20;
            const bottomY = canvas.height - 40;
            const leftX = canvas.width * 0.25;
            const rightX = canvas.width * 0.75;

            ctx.beginPath();
            ctx.moveTo(leftX, topY);
            ctx.quadraticCurveTo(midX, topY, midX, bottomY);
            ctx.moveTo(rightX, topY);
            ctx.quadraticCurveTo(midX, topY, midX, bottomY);

            ctx.setLineDash([8, 8]);
            ctx.lineWidth = 3;
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, 'rgba(56, 189, 248, 0.2)');
            gradient.addColorStop(1, 'rgba(56, 189, 248, 0.8)');
            ctx.strokeStyle = gradient;
            ctx.stroke();

            requestAnimationFrame(drawLines);
        };
        drawLines();

        return () => window.removeEventListener('resize', setSize);
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative bg-[#040914] overflow-hidden text-white" style={{ perspective: '1200px' }}>

            {/* Background glowing effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20 heading-stagger">
                    <div className="inline-block px-6 py-2 border border-sky-500/30 rounded-full text-sky-400 font-black text-xs tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        Studio Collaboration
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mb-6 drop-shadow-md">
                        Boxfy AI + Morph Academy + Kuku Boy
                    </h2>
                    <p className="text-lg md:text-xl text-sky-100 font-medium leading-relaxed opacity-90 mx-auto max-w-3xl">
                        Creating and scaling Kuku Boy relies on a collaboration between studio-grade AI production and industry-focused creative education.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 justify-center relative z-20">

                    {/* Boxfy AI Card */}
                    <div ref={boxfyCard} className="flex-1 w-full max-w-[500px] mx-auto h-full flex flex-col bg-[#0d162d]/80 backdrop-blur-xl border border-blue-800/50 rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:border-sky-500/50 transition-colors duration-500 group">
                        <h4 className="text-sky-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">Creative Production Studio</h4>
                        <h3 className="text-4xl font-black font-display text-white mb-8 inline-block relative self-start">
                            Boxfy AI
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></span>
                        </h3>
                        <ul className="space-y-4 font-medium text-slate-300">
                            {[
                                'Generative AI animation pipelines',
                                'Character assets & consistency',
                                'Cinematic visual effects (VFX)',
                                'Scalable multi-format rendering'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 group-hover:text-white transition-colors duration-300">
                                    <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 shadow-[0_0_8px_rgba(56,189,248,0.8)] shrink-0"></div>
                                    <span className="text-base lg:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Morph Academy Card */}
                    <div ref={morphCard} className="flex-1 w-full max-w-[500px] mx-auto h-full flex flex-col bg-[#0d162d]/80 backdrop-blur-xl border border-blue-800/50 rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:border-amber-500/50 transition-colors duration-500 group">
                        <h4 className="text-amber-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">Edtech & Skill Training</h4>
                        <h3 className="text-4xl font-black font-display text-white mb-8 inline-block relative self-start">
                            Morph Academy
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></span>
                        </h3>
                        <ul className="space-y-4 font-medium text-slate-300">
                            {[
                                'Curriculum design & pedagogy',
                                'Hands-on AI video training',
                                'Student projects & mentorship',
                                'Workforce development for AI'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 group-hover:text-white transition-colors duration-300">
                                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shadow-[0_0_8px_rgba(251,191,36,0.8)] shrink-0"></div>
                                    <span className="text-base lg:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Canvas connector lines (Desktop only to prevent messy mobile layouts) */}
                <div className="hidden lg:block absolute left-0 right-0 h-[250px] -mt-16 z-0 pointer-events-none">
                    <canvas ref={lineCanvas} className="w-full h-full"></canvas>
                </div>

                {/* Character Node Connector */}
                <div className="mt-16 lg:mt-32 flex flex-col items-center relative z-20">
                    <div ref={centerCharacter} className="w-48 h-48 lg:w-64 lg:h-64 relative flex justify-center items-center rounded-full p-1.5 bg-gradient-to-br from-amber-400 via-sky-500 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-transform duration-500 hover:scale-105">
                        {/* Glow behind character */}
                        <div className="absolute inset-0 bg-sky-500/40 rounded-full blur-2xl -z-10 pointer-events-none"></div>

                        <div className="w-full h-full bg-[#040914] rounded-full p-1.5 overflow-hidden">
                            {/* The Image (kuku60.jpeg clipped to circle) */}
                            <img src="/images/kuku60.jpeg" alt="Kuku Boy" className="w-full h-full object-cover rounded-full shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)]" />
                        </div>
                    </div>
                    <div className="mt-8 text-center text-amber-500 font-bold text-sm tracking-[0.2em] uppercase drop-shadow-md">
                        Global Superhero &<br />EdTech
                    </div>
                </div>

                {/* Bottom Descriptions */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <div className="bottom-text-left text-slate-300 leading-relaxed text-base lg:text-lg">
                        <span className="text-white font-bold border-b-2 border-amber-500 mr-2">Boxfy AI</span>
                        is the primary creative and production studio. It drives the AI animation, asset generation, character consistency, audio-visual synthesis and cinematic quality control behind the project.
                    </div>
                    <div className="bottom-text-right text-slate-300 leading-relaxed text-base lg:text-lg">
                        <span className="text-white font-bold border-b-2 border-amber-500 mr-2">Morph Academy</span>
                        is the educational powerhouse. It designs the learning frameworks inside the content and trains the next generation of creative technologists, animators and prompt engineers who help build the Kuku Boy universe.
                    </div>
                </div>

            </div>
        </section>
    );
}
