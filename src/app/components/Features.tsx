import { Calendar, Lightbulb, Layers } from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    icon: Calendar,
    title: "Conflict Detection",
    description:
      "Automatically identifies scheduling conflicts and suggests optimal timing for your courses and exams.",
    color: "#CFE8FF",
  },
  {
    icon: Lightbulb,
    title: "Smart Recommendations",
    description:
      "AI-powered suggestions for courses based on your goals, learning style, and available time.",
    color: "#DDF6E8",
  },
  {
    icon: Layers,
    title: "Flexible Planning",
    description:
      "Adjust your schedule as life happens. CourseFlow adapts to changes and keeps you on track.",
    color: "#A9D6FF",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-[#F8FCFF]">

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-[#2E4A62]">
            Learning should be simple
          </h2>
          <p className="text-xl text-[#2E4A62]/70 max-w-2xl mx-auto">
            We handle the complexity of scheduling so you can focus on what matters—growing your skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="relative group">
                <div className="relative bg-white rounded-3xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: feature.color }}
                  >
                    <Icon className="w-7 h-7 text-[#2E4A62]" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#2E4A62] mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-[#2E4A62]/70 leading-relaxed">
                    {feature.description}
                  </p>

                  <div
                    className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300"
                    style={{ backgroundColor: feature.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 relative">
          <div className="bg-gradient-to-r from-[#CFE8FF] to-[#DDF6E8] rounded-3xl p-12 text-center shadow-lg">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold text-[#2E4A62]">
                Ready to start your learning journey?
              </h3>

              <p className="text-lg text-[#2E4A62]/80">
                Join thousands of learners who have organized their education with CourseFlow.
              </p>

              <Link to="/choose-path">
                <button className="px-8 py-4 bg-white text-[#2E4A62] rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 inline-block mt-4">
                  Get Started Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
