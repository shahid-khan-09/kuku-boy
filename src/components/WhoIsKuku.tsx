import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhoIsKuku() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rightVisualRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Advanced Parallax 3D effect on the right visual with magnetic feel
            gsap.to(rightVisualRef.current, {
                y: '-8%',
                rotationY: -8,
                rotationX: 8,
                scale: 1.02,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            });

            // Fast, playful entrance for left elements
            gsap.fromTo(".fade-up",
                { y: 80, opacity: 0, rotationX: -15, transformOrigin: "0% 50%" },
                {
                    y: 0, opacity: 1, rotationX: 0, stagger: 0.1, duration: 1.2, ease: 'elastic.out(1, 0.75)',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    }
                }
            );

            // Ultra-smooth floating animation for cards
            cardsRef.current.forEach((card, i) => {
                gsap.to(card, {
                    y: -12,
                    duration: 2.5 + i * 0.2,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    delay: i * 0.3
                });
            });

            // Play video only when in view to save huge bandwidth and page load speed
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 75%',
                onEnter: () => {
                    const v = document.getElementById('who-video') as HTMLVideoElement;
                    if (v) v.play().catch(() => { });
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Helper to add card refs
    const addToCardsRef = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section id="about" ref={containerRef} className="relative w-full min-h-screen py-24 sm:py-32 overflow-hidden flex items-center bg-[#D2EFFC]" style={{
            backgroundImage: "linear-gradient(180deg, #A7DFFE 0%, #D2EFFC 40%, #ffffff 100%)"
        }}>

            <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10 max-w-[1600px]">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24">

                    {/* Left content */}
                    <div className="flex-1 w-full max-w-[650px] pt-4 lg:pt-0">

                        {/* Pill Badge */}
                        <div className="fade-up inline-flex items-center gap-2 bg-[#FFF8E1] px-5 py-2.5 rounded-full mb-8 shadow-sm border border-amber-200/60 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                            <span className="text-amber-600 font-black text-xs sm:text-sm tracking-[0.2em] uppercase">
                                Who is Kuku boy?
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="fade-up text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black leading-[1.05] text-[#0A192F] mb-8 tracking-tighter">
                            HIS GREATEST <br />POWER IS <br />
                            <span className="relative inline-block text-[#1D4ED8] z-10">
                                CURIOSITY.
                                {/* Perfectly tailored premium yellow underline stroke */}
                                <svg className="absolute w-[105%] h-3 sm:h-5 -bottom-1 sm:-bottom-2 -left-[2%] text-[#FFC107] -z-10 drop-shadow-sm" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path stroke="currentColor" strokeWidth="12" strokeLinecap="round" d="M3,6 Q50,-3 97,6" fill="none" />
                                </svg>
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="fade-up text-[#334155] text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-12 max-w-[95%]">
                            He doesn't just rely on superpowers. He asks questions, investigates, experiments, and learns. And he encourages children to do the same.
                        </p>

                        {/* 3 feature cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                { title: 'SUPER CURIOSITY', desc: 'Always questioning, always discovering the unknown.', icon: '💡', lineColor: 'bg-[#FFB020]', iconBg: 'bg-[#FFF8E1]', numColor: 'text-[#F59E0B]' },
                                { title: 'SUPER LEARNING', desc: 'Turning every adventure into a playful lesson.', icon: '📖', lineColor: 'bg-[#3B82F6]', iconBg: 'bg-[#EFF6FF]', numColor: 'text-[#2563EB]' },
                                { title: 'SUPER IMAGINATION', desc: 'Thinking beyond boundaries.', icon: '🚀', lineColor: 'bg-[#8B5CF6]', iconBg: 'bg-[#F5F3FF]', numColor: 'text-[#7C3AED]' }
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    ref={addToCardsRef}
                                    className="fade-up bg-white/90 backdrop-blur-xl p-6 sm:p-7 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] hover:border-white transition-all duration-500 flex flex-col transform-gpu group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none"></div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6 align-top">
                                            <div className={`w-10 h-10 rounded-2xl ${feature.iconBg} ${feature.numColor} flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                                {i + 1}
                                            </div>
                                            <div className="text-4xl filter drop-shadow-md group-hover:rotate-12 transition-transform duration-300 origin-bottom-right">{feature.icon}</div>
                                        </div>
                                        <h4 className="font-extrabold text-[#0A192F] text-[0.95rem] mb-3 uppercase tracking-wider leading-tight">
                                            {feature.title}
                                        </h4>
                                        <p className="text-[#475569] text-sm font-medium leading-relaxed flex-grow">
                                            {feature.desc}
                                        </p>
                                        <div className={`w-12 h-2 rounded-full mt-6 ${feature.lineColor} group-hover:w-full transition-all duration-500 ease-out`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right visual - Ultra Premium 3D Bejeweled Frame */}
                    <div className="flex-1 w-full relative h-full min-h-[500px] lg:min-h-[700px]" style={{ perspective: '1500px' }}>
                        <div
                            ref={rightVisualRef}
                            className="relative w-full max-w-[650px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] mx-auto rounded-[3rem] p-4 bg-white/30 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-white/80 transform-gpu"
                        >
                            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-white shadow-[inset_0_5px_30px_rgba(0,0,0,0.1),0_0_0_12px_#ffffff]">
                                <video
                                    id="who-video"
                                    src="/images/Kuku 6.mp4"
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-[1.03]"
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                />

                                {/* Inner cinematic lighting layers */}
                                <div className="absolute inset-0 shadow-[inset_0_-50px_100px_-20px_rgba(0,0,0,0.3)] pointer-events-none rounded-[2.5rem]"></div>
                                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(30,144,255,0.15)] pointer-events-none rounded-[2.5rem] mix-blend-overlay"></div>
                            </div>

                            {/* Magical Premium Sparkles */}
                            <div className="absolute -top-6 -right-6 text-5xl font-sans text-amber-300 drop-shadow-[-2px_2px_5px_rgba(0,0,0,0.3)] animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
                            <div className="absolute bottom-10 -left-8 text-6xl font-sans text-blue-300 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)] animate-pulse" style={{ animationDuration: '4s' }}>🌟</div>
                            <div className="absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-white/80 blur-sm animate-ping" style={{ animationDuration: '2s' }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
