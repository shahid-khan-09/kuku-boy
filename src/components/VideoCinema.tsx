import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Play } from 'lucide-react';

export default function VideoCinema() {
    const videos = [
        { id: 'DVjsIHpehqg', title: 'The Flying Miracle Boy' },
        { id: 'mmXobB1oyk8', title: 'Adventure Begins' },
        { id: 'Bqlppjzd_j0', title: 'Mystery Portal' },
        { id: 'G5MPZoakvZc', title: 'Time Travel' },
        { id: '9wt2VTkDTs8', title: 'Dinosaur World' },
        { id: 'shA5t-tUkd0', title: 'Future City' },
        { id: '9Bx5Ncix_yc', title: 'Action Mission' },
        { id: '3CkwKVI_5tw', title: 'Robots Attack' },
        { id: 'aWzf-atmbxY', title: 'Space Discovery' },
    ];

    const [activeVid, setActiveVid] = useState(videos[0].id);

    return (
        <section id="videos" className="py-24 bg-zinc-950 text-white relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/10 to-zinc-950 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-goldenYellow mb-2 uppercase">CINEMA EXPERIences</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-black text-white">KUKU BOY ADVENTURES</h3>
                </div>

                {/* Main large video player */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(65,105,225,0.3)] border border-zinc-800 bg-black">
                        <iframe
                            src={`https://www.youtube.com/embed/${activeVid}?autoplay=1&mute=1&loop=1&playlist=${activeVid}&rel=0`}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                {/* Swiper Carousel */}
                <div className="max-w-6xl mx-auto pb-10">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        breakpoints={{
                            320: { slidesPerView: 1.2, spaceBetween: 20 },
                            768: { slidesPerView: 2.5, spaceBetween: 30 },
                            1024: { slidesPerView: 4, spaceBetween: 40 },
                        }}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 100,
                            modifier: 1.5,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                        className="w-full py-10"
                    >
                        {videos.map((vid) => (
                            <SwiperSlide key={vid.id} onClick={() => setActiveVid(vid.id)} className="w-[300px] cursor-pointer">
                                <div className={`relative w-full aspect-video rounded-2xl overflow-hidden transition-all duration-300 border-2 ${activeVid === vid.id ? 'border-goldenYellow scale-105 shadow-[0_0_20px_rgba(255,215,0,0.4)]' : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'}`}>
                                    <img src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`} alt={vid.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <Play className={`w-12 h-12 ${activeVid === vid.id ? 'text-goldenYellow' : 'text-white/80'}`} fill="currentColor" />
                                    </div>
                                </div>
                                <h4 className={`text-center mt-4 font-bold text-sm ${activeVid === vid.id ? 'text-goldenYellow' : 'text-zinc-400'}`}>{vid.title}</h4>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
