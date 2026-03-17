import { BookOpen, Code, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const paths = [
  {
    id: 1,
    icon: Code,
    title: "Full Stack Developer",
    courses: 12,
    duration: "6 months",
    color: "#CFE8FF",
    description: "Master frontend and backend development with React, Node.js, and databases."
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Product Manager",
    courses: 8,
    duration: "4 months",
    color: "#DDF6E8",
    description: "Learn product strategy, user research, and agile methodologies."
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Data Scientist",
    courses: 15,
    duration: "8 months",
    color: "#A9D6FF",
    description: "Python, machine learning, statistics, and data visualization skills."
  },
  {
    id: 4,
    icon: Sparkles,
    title: "UX Designer",
    courses: 10,
    duration: "5 months",
    color: "#C7E8D0",
    description: "Design thinking, prototyping, user testing, and interface design."
  }
];

export function CertificationPaths() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-[#2E4A62]">
            Popular certification paths
          </h2>
          <p className="text-xl text-[#2E4A62]/70 max-w-2xl mx-auto">
            Start with a curated learning path designed by industry experts, or create your own custom journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                className="group relative bg-white rounded-3xl p-8 border-2 border-transparent hover:border-[#A9D6FF]/30 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: '0 4px 20px rgba(169, 214, 255, 0.1)'
                }}
              >
                {/* Icon container */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: path.color }}
                >
                  <Icon className="w-8 h-8 text-[#2E4A62]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#2E4A62] mb-3">
                  {path.title}
                </h3>
                <p className="text-[#2E4A62]/70 mb-6 leading-relaxed">
                  {path.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-6 text-sm text-[#2E4A62]/60">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{path.courses} courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E4A62]/30" />
                    <span>{path.duration}</span>
                  </div>
                </div>

                {/* Hover accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-300"
                  style={{ backgroundColor: path.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
