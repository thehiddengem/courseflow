import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FCFF] to-white pt-20 pb-32">
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#CFE8FF] rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#DDF6E8] rounded-full opacity-30 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#CFE8FF] shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#A9D6FF]" />
            <span className="text-sm text-[#2E4A62]">Trusted by 50,000+ learners</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl font-bold text-[#2E4A62] leading-tight">
            Plan your learning path <br />
            <span className="bg-gradient-to-r from-[#A9D6FF] to-[#C7E8D0] bg-clip-text text-transparent">
              without the stress
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-[#2E4A62]/70 leading-relaxed max-w-2xl mx-auto">
            CourseFlow helps you organize certifications, courses, and learning goals into a conflict-free schedule.
            Focus on learning, not juggling calendars.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link to="/choose-path">
              <button className="px-8 py-4 bg-[#A9D6FF] text-[#2E4A62] rounded-2xl font-semibold hover:bg-[#CFE8FF] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
                Choose a Path
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/course-planner">
              <button className="px-8 py-4 bg-white text-[#2E4A62] rounded-2xl font-semibold border-2 border-[#CFE8FF] hover:border-[#A9D6FF] hover:shadow-lg hover:scale-105 transition-all duration-200">
                Build Your Own
              </button>
            </Link>
          </div>

          {/* Abstract illustration */}
          <div className="pt-12">
            <div className="relative w-full max-w-4xl mx-auto">
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                {/* Connecting paths */}
                <path
                  d="M 100 200 Q 250 100, 400 200"
                  stroke="#A9D6FF"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8 8"
                  opacity="0.6"
                />
                <path
                  d="M 400 200 Q 550 300, 700 200"
                  stroke="#C7E8D0"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8 8"
                  opacity="0.6"
                />

                {/* Course nodes */}
                <g>
                  <circle cx="100" cy="200" r="40" fill="#CFE8FF" />
                  <circle cx="100" cy="200" r="30" fill="white" />
                </g>

                <g>
                  <circle cx="400" cy="200" r="50" fill="#DDF6E8" />
                  <circle cx="400" cy="200" r="40" fill="white" />
                </g>

                <g>
                  <circle cx="700" cy="200" r="40" fill="#A9D6FF" />
                  <circle cx="700" cy="200" r="30" fill="white" />
                </g>

                {/* Small accent circles */}
                <circle cx="250" cy="100" r="15" fill="#C7E8D0" opacity="0.5" />
                <circle cx="550" cy="300" r="20" fill="#CFE8FF" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}