import React from 'react';
import { PlayCircle, Gamepad2, Tv2, MonitorPlay, Film, Smartphone, Globe, Radio } from 'lucide-react';

export default function StreamingPlatforms() {

    // Ultra-reliable SimpleIcons CDN combined with matching typography
    const platforms = [
        { name: 'YouTube', url: 'https://cdn.simpleicons.org/youtube/FF0000', color: 'text-white', brandColor: '#FF0000' },
        { name: 'Netflix', url: 'https://cdn.simpleicons.org/netflix/E50914', color: 'text-[#E50914]', brandColor: '#E50914' },
        {
            name: 'Prime Video',
            icon: <svg viewBox="0 0 24 24" fill="#00A8E1" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 drop-shadow-lg"><path d="M12.215 14.86c-1.895 0-4.048-.711-5.74-2.186-.25-.213-.6-.176-.8.083l-.707.933c-.2.253-.162.634.093.844 2.158 1.832 5.033 2.827 7.553 2.827 3.324 0 6.64-1.636 9.176-4.992.238-.306.184-.741-.122-.979l-.865-.63c-.307-.225-.747-.16-1.025.132-2.138 2.378-4.935 4.02-7.564 4.02v-.048zm9.324-4.88c-.061-.592-.516-.549-.806-.118-.543.83-1.611 1.705-2.613 2.12-.275.12-.34.34-.141.516.483.42 1.401.996 1.705 1.155.335.153.649.023.755-.246.331-.832.996-2.602 1.101-3.428h-.001zm-7.669-6.49c-3.155 0-5.71 1.487-5.71 4.544 0 2.234 1.547 3.528 3.565 3.528 1.493 0 2.883-.711 3.597-2.14.162-.319.06-.713-.236-.93l-.403-.306c-.328-.244-.788-.231-.996.115-.55.932-1.258 1.251-2.023 1.251-.832 0-1.428-.518-1.488-1.554h5.602c.49 0 .807-.37.807-.79 0-3.323-2.094-3.718-2.715-3.718v.001zm-1.854 1.868c-.642 0-1.264.441-1.399 1.272h2.72c-.104-.847-.648-1.272-1.321-1.272zm5.834 3.493v-5.267c0-.49-.403-.896-.893-.896h-.667c-.237 0-.462.096-.632.261l-2.052 2.051-1.688-2.012a.855.855 0 0 0-.662-.301h-.445a.862.862 0 0 0-.819 1.127l1.79 5.86c.07.247.301.411.558.411h.658c.245 0 .464-.15.547-.383l1.246-3.834c.033-.11.135-.19.245-.19s.215.084.246.196l1.245 3.82c.075.234.3.391.547.391h.631c.21 0 .422-.112.529-.31.815-1.572 1.171-2.316.326-3.774-.067-.091-.122-.178-.178-.261 0-.005 0-.012-.007-.016l-1.026 1.054c-.114.12-.303.116-.407-.008l-.208-.242c-.067-.075-.1-.177-.1-.284V3.535c0-.49.403-.896.892-.896h.667c.49 0 .893.407.893.896v5.267c0 .49-.404.9-.893.9h-.667c-.49-.001-.892-.405-.892-.896z" /></svg>,
            color: 'text-[#00A8E1]'
        },
        {
            name: 'Disney+',
            icon: <svg viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 drop-shadow-lg"><path d="M11.666 5.857c.433-2.029.072-3.791-1.282-4.887C8.98-1 6.551.498 4.298 2.012 2.046 3.526.046 5.311.01 6.641c-.021.758 1.196 1.119 2.508 1.259 1.7.18 3.551-.013 4.195-1.523.593-1.393-.113-2.327-.113-2.327.34.614-.02 1.341-.531 1.702-.556.386-1.541.484-2.52.484-1.49 0-3.32-.206-2.738-1.428.536-1.129 1.959-1.95 3.397-2.651 1.372-.676 3.036-1.305 4.39-1.289s2.449.696 2.747 2.016c.304 1.314-.041 3.515-.17 4.267L9.94 13.064s-1.897 1.63-2.515 2.193c-.629.567-2.484 2.195-3.04.814-.542-1.35.433-2.185.83-2.592.511-.536 2.098-1.556 2.655-2.071l.669-.619c.144-.124.237-.309.258-.51s-.041-.397-.17-.541c-.088-.098-.222-.16-.361-.17l-1.077-.119-.36-.041c-.139-.015-.284.02-.397.103s-.196.222-.227.36l-.372 1.649c-.062.288-.344.474-.634.417l-.546-.119c-.288-.062-.475-.346-.423-.635l.84-3.766c.062-.288.344-.474.634-.417l2.846.613c.273.057.464.304.433.582s-.253.51-.525.505l-.423-.005a.203.203 0 0 0-.155.067L7.66 9.61c-.53.479-1.32.907-1.593 1.396-.324.583-.561 1.072 0 1.546.67.562 2.035-1.144 2.87-1.855.932-.788 4.2-3.834 4.2-3.834l3.194-.288c.175-.015.34.057.443.19a.575.575 0 0 1 .118.258c.284 1.139.732 3.123.639 4.318-.093 1.16-.34 2.18-.839 2.505-.51.319-3.082 1.608-4.586.325-2.616-2.222.097-4.108.097-4.108-.571.49-.66 2.083.562 3.102 1.258.825 3.138.077 3.654-.082s.752-.397.778-.711c.026-.309-.345-2.18-.551-3.329l1.798-.052c.288-.01.52.211.53.5l.088 1.953c.01.288.253.51.541.505s.51-.253.5-.541l-.103-2.314c-.015-.288-.263-.51-.551-.5l-1.928.057c-.124.01-.242-.041-.32-.129a.434.434 0 0 1-.103-.319V5.857zm4.313 14.542a12.876 12.876 0 0 1-6.101-1.077s2.535-1.288 6.55-1.237c3.968.046 5.865.98 5.865.98s-1.871 1.763-6.314 1.334zm7.625-2.587s.103.525.077.587-1.16.897-1.685 1.119-.886.5-1.159.22c-.273-.282.809-.902 1.484-1.278.68-.376 1.283-.649 1.283-.649zm-.062.593v.01c-.139 2.871-2.906 5.437-6.261 5.561C14.004 24 10.9 21.6 11.034 18.73c.129-2.87 2.906-5.437 6.262-5.56 3.272-.124 6.375 2.277 6.246 5.148zm-6.024-4.819c-2.922 1.314-.809 3.298-.809 3.298-2.618-.83-5.267-.289-5.267-.289 1.953-1.675 6.076-3.009 6.076-3.009z" /></svg>,
            color: 'text-white'
        },
        { name: 'TikTok', url: 'https://cdn.simpleicons.org/tiktok/ffffff', color: 'text-white', brandColor: '#ffffff' },
        { name: 'Twitch', url: 'https://cdn.simpleicons.org/twitch/9146FF', color: 'text-white', brandColor: '#9146FF' },
        { name: 'Hulu', url: 'https://cdn.simpleicons.org/hulu/1ce783', color: 'text-[#1ce783]', brandColor: '#1ce783' },
        { name: 'Crunchyroll', url: 'https://cdn.simpleicons.org/crunchyroll/F47521', color: 'text-[#F47521]', brandColor: '#F47521' }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#020617] overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center relative z-10 mb-16 md:mb-24">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-500/30 bg-sky-900/20 backdrop-blur-md mb-8">
                    <span className="text-sky-400 text-xs sm:text-sm font-black tracking-[0.2em] uppercase">
                        Made for Every Screen
                    </span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 mb-6 drop-shadow-lg leading-tight max-w-5xl mx-auto">
                    BUILT FOR TODAY'S VIDEO-SHARING & STREAMING PLATFORMS
                </h2>

                <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                    Kuku Boy content is produced in the formats that video-sharing, creator and SVOD platforms use, from 15-second Shorts to full-length episodes. Official episodes are live on YouTube today.
                </p>
            </div>

            {/* Single Giant Marquee moving beautifully */}
            <div className="relative w-full flex overflow-hidden group py-10">
                <div className="flex w-max animate-marquee-left hover:pause whitespace-nowrap items-center">
                    {/* Render the array 3 times for a perfect infinite loop */}
                    {[...platforms, ...platforms, ...platforms].map((platform, i) => (
                        <div
                            key={`platform-${i}`}
                            className="flex items-center gap-4 w-auto px-10 h-28 mx-4 rounded-[2rem] bg-[#0A1024] border border-white/5 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/5 cursor-pointer"
                        >
                            {'icon' in platform ? platform.icon : <img src={platform.url} alt={platform.name} className="w-10 h-10 object-contain drop-shadow-lg" />}
                            <span className={`font-display font-black text-3xl tracking-tight ${platform.color} drop-shadow-md`}>
                                {platform.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade Edges for Marquees */}
            <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-20"></div>
            <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-20"></div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee-left {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-33.333333%); }
                }
                .animate-marquee-left {
                    animation: marquee-left 20s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
}

const SparkleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0C12 5.52285 16.4772 10 22 10C16.4772 10 12 14.4772 12 20C12 14.4772 7.52285 10 2 10C7.52285 10 12 5.52285 12 0Z" />
    </svg>
);
