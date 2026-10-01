import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIsKuku from './components/WhoIsKuku';
import Story from './components/Story';
import Universe from './components/Universe';
import EdTech from './components/EdTech';
import StudioCollaboration from './components/StudioCollaboration';
import AIAnimation from './components/AIAnimation';
import AITools from './components/AITools';
import VideoCinema from './components/VideoCinema';
import Episodes from './components/Episodes';
import Character from './components/Character';
import StreamingPlatforms from './components/StreamingPlatforms';
import FAQ from './components/FAQ';
import KeyFacts from './components/KeyFacts';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Connect GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-sky-100 overflow-hidden text-gray-900">
            <Navbar />
            <Hero />
            <WhoIsKuku />
            <KeyFacts />
            <Story />
            <Universe />
            <EdTech />
            <StudioCollaboration />
            <AIAnimation />
            <AITools />
            <VideoCinema />
            <Episodes />
            <Character />
            <StreamingPlatforms />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
