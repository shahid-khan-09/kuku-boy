import React from 'react';

export default function AITools() {
    const row1 = [
        {
            name: 'Midjourney', bg: 'bg-white', textStyle: 'text-slate-900', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tight font-sans">
                    <span className="text-3xl">⛵</span> Midjourney
                </div>
            )
        },
        {
            name: 'ChatGPT', bg: 'bg-white', textStyle: 'text-slate-900', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tight font-sans">
                    <span className="text-[#10A37F] text-4xl leading-none">∰</span> ChatGPT
                </div>
            )
        },
        {
            name: 'Higgsfield', bg: 'bg-[#C1FF00]', textStyle: 'text-black', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tighter font-sans">
                    <span className="text-black text-3xl">〰</span> Higgsfield
                </div>
            )
        },
        {
            name: 'Soul 2.0', bg: 'bg-[#C1FF00]', textStyle: 'text-black', content: (
                <div className="text-3xl font-black tracking-tighter font-sans">
                    Soul 2.0
                </div>
            )
        },
        {
            name: 'SEEDANCE 2.5', bg: 'bg-[#151D29]', textStyle: 'text-white', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tight font-sans">
                    <span className="text-blue-500 font-normal">ııl</span> SEEDANCE 2.5
                </div>
            )
        },
        {
            name: 'Gemini OMNI', bg: 'bg-[#0B0F19]', textStyle: 'text-white', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tight font-sans relative z-10 w-full h-full justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)] pointer-events-none"></div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">✦</span> Gemini OMNI
                </div>
            )
        },
    ];

    const row2 = [
        {
            name: 'Soul 2.0', bg: 'bg-[#C1FF00]', textStyle: 'text-black', content: (
                <div className="text-3xl font-black tracking-tighter font-sans">
                    Soul 2.0
                </div>
            )
        },
        {
            name: 'Higgsfield', bg: 'bg-[#C1FF00]', textStyle: 'text-black', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tighter font-sans">
                    <span className="text-black text-3xl">〰</span> Higgsfield
                </div>
            )
        },
        {
            name: 'ChatGPT', bg: 'bg-white', textStyle: 'text-slate-900', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tight font-sans">
                    <span className="text-[#10A37F] text-4xl leading-none">∰</span> ChatGPT
                </div>
            )
        },
        {
            name: 'Midjourney', bg: 'bg-white', textStyle: 'text-slate-900', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tight font-sans">
                    <span className="text-3xl">⛵</span> Midjourney
                </div>
            )
        },
        {
            name: 'KlingAI', bg: 'bg-[#0B0F19]', textStyle: 'text-white', content: (
                <div className="flex items-center gap-2 text-2xl font-black tracking-tight font-sans relative w-full h-full justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#166534] via-[#052E16] to-transparent mix-blend-screen opacity-50"></div>
                    <span className="text-white relative z-10">⧫ KlingAI</span>
                </div>
            )
        },
        {
            name: 'Flow', bg: 'bg-gradient-to-br from-[#60A5FA] to-[#818CF8]', textStyle: 'text-white', content: (
                <div className="text-4xl font-black tracking-tighter font-display drop-shadow-md">
                    Flow
                </div>
            )
        },
    ];

    // Duplicate arrays to ensure flawless infinite scrolling
    const marqueRow1 = [...row1, ...row1, ...row1];
    const marqueRow2 = [...row2, ...row2, ...row2];

    return (
        <section className="py-20 bg-[#050B14] font-sans relative overflow-hidden">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 35s linear infinite;
                }
                .tool-card {
                    width: 250px;
                    height: 180px;
                }
                @media (min-width: 768px) {
                    .tool-card {
                        width: 320px;
                        height: 200px;
                    }
                }
            `}</style>

            <div className="container mx-auto px-6 lg:px-12 mb-20 flex flex-col items-center text-center relative z-10">
                {/* Turquoise Badge */}
                <div className="border hover:bg-cyan-900/40 transition-colors border-cyan-500/50 text-cyan-400 font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-8 py-2.5 rounded-full mb-8 shadow-[0_0_20px_rgba(8,145,178,0.3)] backdrop-blur-sm">
                    TECHNOLOGY TOOLKIT
                </div>

                {/* Main 3D Title */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display text-amber-400 mb-6 max-w-5xl mx-auto leading-tight transition-transform hover:scale-105 duration-500" style={{
                    textShadow: '0 2px 0 #D97706, 0 4px 0 #B45309, 0 6px 0 #92400E, 0 15px 25px rgba(0,0,0,0.8)'
                }}>
                    Made with world-class AI & 3D<br />technology
                </h2>

                {/* Subtitle */}
                <p className="text-blue-100/90 text-lg md:text-xl font-medium max-w-4xl leading-relaxed mx-auto font-sans">
                    Kuku Boy Studio's pipeline combines leading generative video, image, language<br className="hidden md:block" /> and 3D tools with human artists who direct every frame.
                </p>
            </div>

            {/* Infinite Marquee Rows */}
            <div className="relative w-full flex flex-col gap-6">

                {/* Shadowed Edges for seamless fade out */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#050B14] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#050B14] to-transparent z-20 pointer-events-none"></div>

                {/* Row 1 (Moving Left) */}
                <div className="flex w-max animate-marquee gap-6">
                    {marqueRow1.map((item, idx) => (
                        <div key={idx} className="tool-card shrink-0 flex flex-col bg-[#0F172A] rounded-[2rem] p-1.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border border-blue-900/30">
                            <div className={`flex-1 w-full rounded-t-[1.7rem] rounded-b-[0.8rem] flex items-center justify-center ${item.bg} ${item.textStyle}`}>
                                {item.content}
                            </div>
                            <div className="h-14 shrink-0 flex items-center justify-center font-black text-[13px] tracking-[0.2em] text-[#60A5FA] uppercase w-full">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2 (Moving Right) */}
                <div className="flex w-max animate-marquee-reverse gap-6">
                    {marqueRow2.map((item, idx) => (
                        <div key={idx} className="tool-card shrink-0 flex flex-col bg-[#0F172A] rounded-[2rem] p-1.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border border-blue-900/30">
                            <div className={`flex-1 w-full rounded-t-[1.7rem] rounded-b-[0.8rem] flex items-center justify-center ${item.bg} ${item.textStyle}`}>
                                {item.content}
                            </div>
                            <div className="h-14 shrink-0 flex items-center justify-center font-black text-[13px] tracking-[0.2em] text-[#60A5FA] uppercase w-full">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}
