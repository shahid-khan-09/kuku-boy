import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const faqs = [
        { q: 'What is Kuku Boy?', a: 'Kuku Boy is a fictional 7-year-old animated kids cartoon character whose adventures combine comedy, imagination, technology, exploration and learn-by-play concepts.' },
        { q: 'How does AI animation work?', a: 'AI assists in exploring visual concepts faster, retaining character consistency across various scenes, and automating workflows for generation to screen.' },
        { q: 'Which AI tools are used?', a: 'The production pipeline explores tools like Higgsfield, Seedance, and Kling alongside robust editing tools.' },
        { q: 'How is character consistency maintained?', a: 'Through specialized reference models combined with manual cleanup and consistent prompt engineering within our character Bible guidelines.' },
        { q: 'How does Kuku Boy combine education and entertainment?', a: 'We embed learning directly into the plot. The puzzles and problems Kuku faces require science, math, or logic to solve, turning the episode into a playtime lesson.' },
        { q: 'What role does Morph Academy play?', a: 'Morph Academy plays a crucial role as an official partnership to integrate our storytelling into actionable EdTech outcomes.' },
        { q: 'What role does Boxfy AI play?', a: 'Boxfy AI acts as our technology integration engine to streamline asset creation and interactive platform capabilities.' },
    ];

    return (
        <section id="faq" className="py-24 bg-sky-50">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-sky-900 mb-4">FREQUENTLY ASKED QUESTIONS</h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openIdx === i ? 'border-sky-300 shadow-lg' : 'border-sky-100 shadow-sm'}`}
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-sky-900 text-lg pr-4">{faq.q}</span>
                                <ChevronDown className={`shrink-0 text-sky-400 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIdx === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="p-6 pt-0 text-sky-700 leading-relaxed border-t border-sky-50">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
