import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";

const certificationPaths = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    description: "Master both frontend and backend development with modern JavaScript frameworks, databases, and cloud deployment.",
    courses: 12,
    estimatedTime: "6 months",
    difficulty: "Intermediate",
    color: "#CFE8FF"
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    description: "Design and implement scalable cloud infrastructure using AWS, Azure, and modern DevOps practices.",
    courses: 10,
    estimatedTime: "5 months",
    difficulty: "Advanced",
    color: "#DDF6E8"
  },
  {
    id: 3,
    title: "Data Science Professional",
    description: "Learn Python, machine learning, statistical analysis, and data visualization to unlock insights from data.",
    courses: 15,
    estimatedTime: "8 months",
    difficulty: "Intermediate",
    color: "#A9D6FF"
  },
  {
    id: 4,
    title: "UX/UI Designer",
    description: "Create beautiful, user-centered designs with Figma, user research, prototyping, and design systems.",
    courses: 10,
    estimatedTime: "5 months",
    difficulty: "Beginner",
    color: "#C7E8D0"
  },
  {
    id: 5,
    title: "Product Manager",
    description: "Lead product development from strategy to launch with agile methodologies, analytics, and stakeholder management.",
    courses: 8,
    estimatedTime: "4 months",
    difficulty: "Intermediate",
    color: "#CFE8FF"
  },
  {
    id: 6,
    title: "Cybersecurity Specialist",
    description: "Protect systems and networks with security fundamentals, ethical hacking, and threat detection techniques.",
    courses: 14,
    estimatedTime: "7 months",
    difficulty: "Advanced",
    color: "#DDF6E8"
  },
  {
    id: 7,
    title: "Mobile App Developer",
    description: "Build native and cross-platform mobile applications with React Native, Swift, and modern app architectures.",
    courses: 11,
    estimatedTime: "6 months",
    difficulty: "Intermediate",
    color: "#A9D6FF"
  },
  {
    id: 8,
    title: "Digital Marketing Specialist",
    description: "Master SEO, content marketing, social media strategy, and analytics to drive business growth.",
    courses: 9,
    estimatedTime: "4 months",
    difficulty: "Beginner",
    color: "#C7E8D0"
  }
];

export function PathSelection() {
  return (
    <div
      className="min-h-screen bg-[#F8FCFF]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Navigation variant="app" />

      <main className="max-w-7xl mx-auto px-6 py-12 pt-28">
        <div className="mb-12 space-y-3">
          <h1 className="text-5xl font-bold text-[#2E4A62]">
            Choose your learning path
          </h1>
          <p className="text-xl text-[#2E4A62]/70 max-w-2xl">
            Select a certification path that aligns with your career goals. Each path is carefully designed with the right courses in the optimal sequence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationPaths.map((path) => (
            <div
              key={path.id}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#A9D6FF]/20 flex flex-col"
            >
              <div
                className="w-16 h-1 rounded-full mb-6"
                style={{ backgroundColor: path.color }}
              />

              <h3 className="text-2xl font-semibold text-[#2E4A62] mb-3 leading-tight">
                {path.title}
              </h3>

              <p className="text-[#2E4A62]/70 mb-6 leading-relaxed flex-grow">
                {path.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#2E4A62]/60">
                  <BookOpen className="w-4 h-4" />
                  <span>{path.courses} required courses</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#2E4A62]/60">
                  <Clock className="w-4 h-4" />
                  <span>{path.estimatedTime} estimated completion</span>
                </div>

                <div className="inline-block">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-[#2E4A62]"
                    style={{ backgroundColor: path.color }}
                  >
                    {path.difficulty}
                  </span>
                </div>
              </div>

              <Link to="/loading" className="block">
                <button className="w-full px-6 py-3.5 bg-[#A9D6FF] text-[#2E4A62] rounded-2xl font-semibold hover:bg-[#CFE8FF] hover:shadow-lg group-hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                  Start Planning
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <div
                className="absolute -bottom-2 -right-2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: path.color }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-3xl p-12 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#2E4A62] mb-3">
            Don't see what you're looking for?
          </h3>
          <p className="text-[#2E4A62]/70 mb-6 max-w-xl mx-auto">
            Create a custom learning path tailored to your unique goals and schedule.
          </p>
          <Link to="/course-planner">
            <button className="px-8 py-4 bg-gradient-to-r from-[#C7E8D0] to-[#DDF6E8] text-[#2E4A62] rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Build Your Own Path
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
