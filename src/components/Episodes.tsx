import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Play, Sparkles } from 'lucide-react';

export default function Episodes() {
    const episodes = [
        { title: 'THE SCIENCE MISSION', img: '/images/kuku-13.jpg', desc: 'Unraveling the physics of flying!', number: 'EP 01', color: 'from-blue-600 to-cyan-400' },
        { title: 'THE MATH QUEST', img: '/images/kuku-16.jpg', desc: 'Solving puzzles to unlock doors.', number: 'EP 02', color: 'from-amber-500 to-orange-400' },
        { title: 'THE DIGITAL WORLD', img: '/images/kuku-18.jpg', desc: 'Entering the coding matrix.', number: 'EP 03', color: 'from-purple-600 to-pink-500' },
        { title: 'THE ECO HERO', img: '/images/kuku-22.jpg', desc: 'Saving the magical forests.', number: 'EP 04', color: 'from-emerald-500 to-teal-400' },
        { title: 'THE FUTURE CITY', img: '/images/kuku-24.jpg', desc: 'Flying cars and AI robots!', number: 'EP 05', color: 'from-indigo-600 to-blue-500' },
        { title: 'TIME TRAVEL', img: '/images/kuku-27.jpg', desc: 'Back to the ancient wisdom.', number: 'EP 06', color: 'from-rose-500 to-red-400' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="episodes" className="py-24 bg-[#0a1128] overflow-hidden relative">

            {/* Cinematic Background depending on active slide */}
            <div className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-20">
                <img src={episodes[activeIndex].img} className="w-full h-full object-cover blur-3xl scale-125" alt="bg" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-[#0a1128]/60 to-[#0a1128]"></div>

            <div className="container mx-auto px-6 relative z-10 text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm">Action Packed Episodes</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black text-white drop-shadow-2xl mb-6 tracking-tight uppercase">
                    Bingeworthy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">Adventures</span>
                </h2>
            </div>

            <div className="w-full max-w-[1600px] mx-auto relative z-10 pb-20">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    coverflowEffect={{
                        rotate: 30, // 3D rotation angle
                        stretch: 0,
                        depth: 200, // Depth in Z axis
                        modifier: 1.5,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    className="episode-swiper !px-4 md:!px-12"
                >
                    {episodes.map((ep, i) => (
                        <SwiperSlide key={i} className="!w-[280px] sm:!w-[350px] md:!w-[420px] group cursor-pointer">
                            <div className={`relative aspect-[3/4] sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-4 border-white/10 transition-all duration-500 hover:border-white/40`}>

                                {/* Image fully expanded and visible! */}
                                <img
                                    src={ep.img}
                                    alt={ep.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                />

                                {/* Cinematic bottom gradient overlay to readable text - ALWAYS VISIBLE */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>

                                {/* Text content floating beautifully at the bottom inside the card - ALWAYS VISIBLE */}
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">

                                    <div className={`inline-flex mb-3 px-4 py-1.5 rounded-full bg-gradient-to-r ${ep.color} text-white font-black text-xs md:text-sm tracking-widest shadow-lg`}>
                                        {ep.number}
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-display font-black text-white leading-tight mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {ep.title}
                                    </h3>

                                    <p className="text-gray-300 font-medium text-sm md:text-base drop-shadow-md line-clamp-2">
                                        {ep.desc}
                                    </p>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .episode-swiper .swiper-button-next,
                .episode-swiper .swiper-button-prev {
                    color: white !important;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }
                .episode-swiper .swiper-button-next:hover,
                .episode-swiper .swiper-button-prev:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }
                .episode-swiper .swiper-button-next::after,
                .episode-swiper .swiper-button-prev::after {
                    font-size: 24px;
                    font-weight: bold;
                }
                @media (max-width: 768px) {
                    .episode-swiper .swiper-button-next,
                    .episode-swiper .swiper-button-prev {
                        display: none;
                    }
                }
            `}} />
        </section>
    );
}
