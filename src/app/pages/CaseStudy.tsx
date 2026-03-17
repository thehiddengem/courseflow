import { Brain, Heart, Palette, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";

export function CaseStudy() {
    return (
        <div
            className="min-h-screen bg-[#F8FCFF]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
            <Navigation variant="app" />

            <div className="max-w-5xl mx-auto px-8 py-24 pt-32">


                {/* Hero Section */}
                <div className="text-center mb-28">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#CFE8FF] to-[#DDF6E8] rounded-full mb-10">
                        <Sparkles className="w-4 h-4 text-[#2E4A62]" />
                        <span className="text-sm font-medium text-[#2E4A62]/80">
                            Product Case Study
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-[#2E4A62] mb-10 leading-tight">
                        Why I built
                        <br />
                        CourseFlow
                    </h1>

                    <p className="text-xl text-[#2E4A62]/60 leading-relaxed max-w-3xl mx-auto">
                        I wanted to explore what course planning would feel like if it were designed
                        to reduce stress instead of add to it. CourseFlow is a concept focused on calm,
                        clarity, and helping students make better decisions without feeling overwhelmed.
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-28">
                    {/* Problem */}
                    <section>
                        <div className="flex items-start gap-8 mb-12">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#CFE8FF] to-[#A9D6FF] rounded-3xl flex items-center justify-center flex-shrink-0">
                                <Brain className="w-10 h-10 text-[#2E4A62]" />
                            </div>

                            <div>
                                <div className="text-xs font-semibold text-[#2E4A62]/40 uppercase tracking-widest mb-4">
                                    01 — The Problem
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#2E4A62] mb-6 leading-tight">
                                    Course planning often
                                    <br />
                                    feels more stressful than it should
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 md:pl-28 space-y-8">
                            <p className="text-lg text-[#2E4A62]/70 leading-relaxed">
                                A lot of scheduling tools are built around dense information, rigid tables,
                                and administrative workflows. They may be functional, but they often feel
                                intimidating to the people actually using them.
                            </p>

                            <p className="text-lg text-[#2E4A62]/70 leading-relaxed">
                                For students, course planning is already a high-pressure moment. They are
                                thinking about requirements, timelines, conflicts, and whether they are
                                making the right decisions. When the interface itself feels cluttered, it
                                increases that pressure instead of helping relieve it.
                            </p>

                            <div className="bg-white rounded-3xl p-10 border border-[#CFE8FF]/30">
                                <h3 className="text-xl font-semibold text-[#2E4A62] mb-4">
                                    Core UX challenge
                                </h3>
                                <p className="text-[#2E4A62]/65 leading-relaxed">
                                    How can a scheduling tool handle complexity without feeling overwhelming?
                                    How can the product help users feel guided, calm, and confident while
                                    making important planning decisions?
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Insight */}
                    <section>
                        <div className="flex items-start gap-8 mb-12">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#DDF6E8] to-[#C7E8D0] rounded-3xl flex items-center justify-center flex-shrink-0">
                                <Heart className="w-10 h-10 text-[#2E4A62]" />
                            </div>

                            <div>
                                <div className="text-xs font-semibold text-[#2E4A62]/40 uppercase tracking-widest mb-4">
                                    02 — The Insight
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#2E4A62] mb-6 leading-tight">
                                    Calm design supports
                                    <br />
                                    better decision-making
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 md:pl-28 space-y-8">
                            <p className="text-lg text-[#2E4A62]/70 leading-relaxed">
                                I approached CourseFlow with the idea that emotional tone matters just as
                                much as usability. When users feel visually overwhelmed, they are more
                                likely to rush, miss information, and second-guess themselves.
                            </p>

                            <p className="text-lg text-[#2E4A62]/70 leading-relaxed">
                                I wanted the product to feel airy and reassuring — something closer to a
                                calm productivity tool than a stressful registration system. That meant
                                designing around white space, soft color, simple hierarchy, and a step-by-step
                                feeling of progress.
                            </p>

                            <div className="bg-gradient-to-br from-[#CFE8FF]/30 to-[#DDF6E8]/30 rounded-3xl p-12 border border-[#A9D6FF]/20">
                                <div className="text-2xl font-bold text-[#2E4A62] mb-6 leading-relaxed italic">
                                    “The experience of planning your future should feel supportive, not chaotic.”
                                </div>
                                <div className="text-sm text-[#2E4A62]/60">
                                    — Design principle behind CourseFlow
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Solution */}
                    <section>
                        <div className="flex items-start gap-8 mb-12">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#A9D6FF] to-[#CFE8FF] rounded-3xl flex items-center justify-center flex-shrink-0">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#2E4A62]">
                                    <path
                                        d="M3 12L7 8L12 13L21 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21 12V20H3V12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        opacity="0.5"
                                    />
                                </svg>
                            </div>

                            <div>
                                <div className="text-xs font-semibold text-[#2E4A62]/40 uppercase tracking-widest mb-4">
                                    03 — The Solution
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#2E4A62] mb-6 leading-tight">
                                    A planning experience
                                    <br />
                                    built around clarity
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 md:pl-28 space-y-8">
                            <p className="text-lg text-[#2E4A62]/70 leading-relaxed">
                                CourseFlow is a concept for a scheduling platform that helps users compare
                                options, avoid conflicts, and move through planning with less friction.
                                Instead of presenting everything at once, the experience guides users
                                through a calmer, more intentional flow.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-8 border border-[#CFE8FF]/30">
                                    <h3 className="text-xl font-bold text-[#2E4A62] mb-3">
                                        Simplified planning flow
                                    </h3>
                                    <p className="text-[#2E4A62]/60 leading-relaxed">
                                        Users can choose a path, explore options, and build a schedule in a way
                                        that feels guided instead of overwhelming.
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-8 border border-[#CFE8FF]/30">
                                    <h3 className="text-xl font-bold text-[#2E4A62] mb-3">
                                        Conflict-aware scheduling
                                    </h3>
                                    <p className="text-[#2E4A62]/60 leading-relaxed">
                                        The interface helps users quickly understand overlaps and tradeoffs
                                        instead of forcing them to manually compare everything.
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-8 border border-[#CFE8FF]/30">
                                    <h3 className="text-xl font-bold text-[#2E4A62] mb-3">
                                        Soft, supportive interaction design
                                    </h3>
                                    <p className="text-[#2E4A62]/60 leading-relaxed">
                                        Rounded surfaces, gentle colors, and thoughtful motion create a more
                                        reassuring experience, especially during high-decision moments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Design Philosophy */}
                    <section>
                        <div className="flex items-start gap-8 mb-12">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#C7E8D0] to-[#DDF6E8] rounded-3xl flex items-center justify-center flex-shrink-0">
                                <Palette className="w-10 h-10 text-[#2E4A62]" />
                            </div>

                            <div>
                                <div className="text-xs font-semibold text-[#2E4A62]/40 uppercase tracking-widest mb-4">
                                    04 — Design Philosophy
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#2E4A62] mb-6 leading-tight">
                                    Designing for peace
                                    <br />
                                    of mind
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 md:pl-28 space-y-8">
                            <p className="text-lg text-[#2E4A62]/70 leading-relaxed">
                                Every design decision in CourseFlow was shaped by one question:
                                does this make planning feel lighter or heavier?
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-[#CFE8FF]/20 to-transparent rounded-2xl p-8 border border-[#CFE8FF]/40">
                                    <div className="text-sm font-semibold text-[#2E4A62]/50 uppercase tracking-wide mb-4">
                                        Color
                                    </div>
                                    <p className="text-[#2E4A62]/70 leading-relaxed">
                                        Baby blue and pale mint were chosen to create a softer, more calming visual tone.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-[#DDF6E8]/20 to-transparent rounded-2xl p-8 border border-[#C7E8D0]/40">
                                    <div className="text-sm font-semibold text-[#2E4A62]/50 uppercase tracking-wide mb-4">
                                        Space
                                    </div>
                                    <p className="text-[#2E4A62]/70 leading-relaxed">
                                        Generous spacing helps reduce cognitive load and gives the interface room to breathe.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-[#A9D6FF]/20 to-transparent rounded-2xl p-8 border border-[#A9D6FF]/40">
                                    <div className="text-sm font-semibold text-[#2E4A62]/50 uppercase tracking-wide mb-4">
                                        Hierarchy
                                    </div>
                                    <p className="text-[#2E4A62]/70 leading-relaxed">
                                        Clear typography and focused layouts help users understand what matters most without feeling overloaded.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-[#C7E8D0]/20 to-transparent rounded-2xl p-8 border border-[#C7E8D0]/40">
                                    <div className="text-sm font-semibold text-[#2E4A62]/50 uppercase tracking-wide mb-4">
                                        Interaction
                                    </div>
                                    <p className="text-[#2E4A62]/70 leading-relaxed">
                                        Transitions, loading states, and feedback were designed to feel smooth and intentional rather than distracting.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-12 border border-[#CFE8FF]/30 mt-12">
                                <p className="text-2xl text-[#2E4A62]/80 leading-relaxed mb-8">
                                    CourseFlow is ultimately an experiment in how thoughtful design can turn a stressful task into something more manageable, clear, and calm.
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#A9D6FF] to-[#C7E8D0] rounded-xl flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M3 12L7 8L12 13L21 4"
                                                stroke="#2E4A62"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21 12V20H3V12"
                                                stroke="#2E4A62"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                opacity="0.5"
                                            />
                                        </svg>
                                    </div>

                                    <div>
                                        <div className="text-sm font-bold text-[#2E4A62]">CourseFlow</div>
                                        <div className="text-xs text-[#2E4A62]/60">
                                            Designed to feel lighter
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA Section */}
                <div className="mt-32 pt-20 border-t border-[#CFE8FF]/30 text-center">
                    <h3 className="text-4xl font-bold text-[#2E4A62] mb-6">
                        Explore the product
                    </h3>

                    <p className="text-lg text-[#2E4A62]/60 mb-10 max-w-xl mx-auto">
                        See how the concept translates into a calmer planning experience across the rest of the product.
                    </p>

                    <Link to="/choose-path">
                        <button className="px-12 py-5 bg-gradient-to-r from-[#A9D6FF] to-[#C7E8D0] text-[#2E4A62] rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200">
                            Try CourseFlow
                        </button>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#CFE8FF]/30 mt-32">
                <div className="max-w-5xl mx-auto px-8 py-12 text-center">
                    <p className="text-sm text-[#2E4A62]/40">
                        © 2026 CourseFlow. Product design case study concept.
                    </p>
                </div>
            </div>
        </div>
    );
}
