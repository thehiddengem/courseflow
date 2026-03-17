import { Calendar, CheckCircle2, Sparkles, Zap, Moon, Star } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";

interface Course {
  name: string;
  code: string;
  dayOfWeek: string;
  startTime: string;
}

interface Schedule {
  id: string;
  title: string;
  description: string;
  icon: "zap" | "star" | "moon" | "sparkles";
  courses: Course[];
  estimatedCompletion: string;
  weeklyHours: number;
  daysPerWeek: number;
  color: string;
  accentColor: string;
  benefits: string[];
}

const recommendedSchedules: Schedule[] = [
  {
    id: "1",
    title: "Fastest Completion",
    description: "Complete your certification in the shortest time possible with an intensive schedule",
    icon: "zap",
    courses: [
      { name: "Introduction to React", code: "WEB101", dayOfWeek: "Mon", startTime: "09:00" },
      { name: "Python for Data Science", code: "DATA201", dayOfWeek: "Mon", startTime: "14:00" },
      { name: "UX Design Fundamentals", code: "DES150", dayOfWeek: "Tue", startTime: "10:00" },
      { name: "Database Management", code: "CS220", dayOfWeek: "Wed", startTime: "09:00" },
      { name: "Machine Learning Basics", code: "AI301", dayOfWeek: "Wed", startTime: "15:00" },
      { name: "Web Security", code: "SEC210", dayOfWeek: "Thu", startTime: "13:00" },
    ],
    estimatedCompletion: "4 months",
    weeklyHours: 18,
    daysPerWeek: 4,
    color: "#CFE8FF",
    accentColor: "#A9D6FF",
    benefits: ["Quickest path to certification", "Consistent daily schedule", "High intensity learning"]
  },
  {
    id: "2",
    title: "Most Flexible",
    description: "Balanced schedule with plenty of breathing room and adaptable timing",
    icon: "star",
    courses: [
      { name: "Introduction to React", code: "WEB101", dayOfWeek: "Mon", startTime: "09:00" },
      { name: "UX Design Fundamentals", code: "DES150", dayOfWeek: "Tue", startTime: "10:00" },
      { name: "Database Management", code: "CS220", dayOfWeek: "Wed", startTime: "09:00" },
      { name: "Web Security", code: "SEC210", dayOfWeek: "Thu", startTime: "13:00" },
    ],
    estimatedCompletion: "6 months",
    weeklyHours: 12,
    daysPerWeek: 4,
    color: "#DDF6E8",
    accentColor: "#C7E8D0",
    benefits: ["Easy to adjust schedule", "Moderate pace", "Good work-life balance"]
  },
  {
    id: "3",
    title: "Evening Friendly",
    description: "Perfect for working professionals with courses scheduled after 5 PM",
    icon: "moon",
    courses: [
      { name: "Python for Data Science", code: "DATA201", dayOfWeek: "Mon", startTime: "18:00" },
      { name: "Machine Learning Basics", code: "AI301", dayOfWeek: "Tue", startTime: "19:00" },
      { name: "Cloud Architecture", code: "CLOUD310", dayOfWeek: "Thu", startTime: "18:30" },
      { name: "Mobile App Development", code: "MOB250", dayOfWeek: "Sat", startTime: "10:00" },
    ],
    estimatedCompletion: "7 months",
    weeklyHours: 10,
    daysPerWeek: 4,
    color: "#A9D6FF",
    accentColor: "#CFE8FF",
    benefits: ["After work hours", "Weekend option", "No schedule conflicts"]
  },
  {
    id: "4",
    title: "Weekend Warrior",
    description: "Concentrated learning on weekends while keeping weekdays free",
    icon: "sparkles",
    courses: [
      { name: "Introduction to React", code: "WEB101", dayOfWeek: "Sat", startTime: "09:00" },
      { name: "Python for Data Science", code: "DATA201", dayOfWeek: "Sat", startTime: "13:00" },
      { name: "UX Design Fundamentals", code: "DES150", dayOfWeek: "Sun", startTime: "10:00" },
      { name: "Database Management", code: "CS220", dayOfWeek: "Sun", startTime: "14:00" },
    ],
    estimatedCompletion: "5 months",
    weeklyHours: 14,
    daysPerWeek: 2,
    color: "#C7E8D0",
    accentColor: "#DDF6E8",
    benefits: ["Weekdays completely free", "Immersive weekend learning", "Great for full-time workers"]
  }
];

const getIcon = (iconType: string) => {
  const iconProps = { className: "w-6 h-6" };

  switch (iconType) {
    case "zap":
      return <Zap {...iconProps} />;
    case "star":
      return <Star {...iconProps} />;
    case "moon":
      return <Moon {...iconProps} />;
    case "sparkles":
      return <Sparkles {...iconProps} />;
    default:
      return <Star {...iconProps} />;
  }
};

const dayAbbreviations: Record<string, string> = {
  Mon: "M",
  Tue: "T",
  Wed: "W",
  Thu: "T",
  Fri: "F",
  Sat: "S",
  Sun: "S",
};

export function RecommendationResults() {
  return (
    <div
      className="min-h-screen bg-[#F8FCFF]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Navigation variant="app" />

      <div className="max-w-7xl mx-auto px-8 py-16 pt-28">
        {/* Header Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#CFE8FF] to-[#DDF6E8] rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[#2E4A62]" />
            <span className="text-sm font-medium text-[#2E4A62]/80">
              AI-Powered Recommendations
            </span>
          </div>

          <h1 className="text-6xl font-bold text-[#2E4A62] mb-6 leading-tight">
            We found the best schedules for you
          </h1>

          <p className="text-lg text-[#2E4A62]/60 leading-relaxed">
            Based on your preferences, here are personalized schedule options optimized
            for different goals. Choose the one that fits your lifestyle best.
          </p>
        </div>

        {/* Recommendation Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {recommendedSchedules.map((schedule, index) => (
            <div
              key={schedule.id}
              className="group bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#A9D6FF]/30 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#2E4A62]"
                    style={{ backgroundColor: schedule.color }}
                  >
                    {getIcon(schedule.icon)}
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-[#2E4A62] mb-2 leading-tight">
                      {schedule.title}
                    </h3>

                    {index === 0 && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#A9D6FF] text-[#2E4A62] text-xs font-semibold rounded-full">
                        <Star className="w-3 h-3" fill="#2E4A62" />
                        Recommended
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-[#2E4A62]/60 mb-10 leading-relaxed text-base">
                {schedule.description}
              </p>

              {/* Timeline Preview */}
              <div className="mb-10">
                <div className="text-xs font-semibold text-[#2E4A62]/50 uppercase tracking-wide mb-5">
                  Weekly Overview
                </div>

                <div className="flex gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => {
                    const hasClass = schedule.courses.some((c) => c.dayOfWeek === day);
                    const classCount = schedule.courses.filter((c) => c.dayOfWeek === day).length;

                    return (
                      <div key={day} className="flex-1 min-w-0 flex flex-col items-center gap-2">
                        <div className="text-xs font-medium text-[#2E4A62]/50">
                          {dayAbbreviations[day]}
                        </div>

                        <div
                          className={`w-full h-20 rounded-xl transition-all ${hasClass
                              ? "shadow-sm"
                              : "bg-[#F8FCFF] border border-[#CFE8FF]/30"
                            }`}
                          style={{
                            backgroundColor: hasClass ? schedule.accentColor : undefined,
                          }}
                        >
                          {hasClass && (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-sm font-bold text-[#2E4A62]">
                                {classCount}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10 p-6 bg-[#F8FCFF] rounded-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E4A62] mb-2">
                    {schedule.courses.length}
                  </div>
                  <div className="text-xs text-[#2E4A62]/50 uppercase tracking-wide">
                    Courses
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E4A62] mb-2">
                    {schedule.weeklyHours}h
                  </div>
                  <div className="text-xs text-[#2E4A62]/50 uppercase tracking-wide">
                    Per Week
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E4A62] mb-2">
                    {schedule.estimatedCompletion}
                  </div>
                  <div className="text-xs text-[#2E4A62]/50 uppercase tracking-wide">
                    Timeline
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-10">
                <div className="text-xs font-semibold text-[#2E4A62]/50 uppercase tracking-wide mb-5">
                  Key Benefits
                </div>

                <div className="space-y-3">
                  {schedule.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2E4A62]/40 flex-shrink-0" />
                      <span className="text-sm text-[#2E4A62]/60">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courses List Preview */}
              <div className="mb-10 flex-grow">
                <div className="text-xs font-semibold text-[#2E4A62]/50 uppercase tracking-wide mb-5">
                  Included Courses
                </div>

                <div className="space-y-3">
                  {schedule.courses.slice(0, 3).map((course, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-[#2E4A62]/60">{course.name}</span>
                      <span className="text-[#2E4A62]/40 text-xs font-medium">
                        {course.code}
                      </span>
                    </div>
                  ))}

                  {schedule.courses.length > 3 && (
                    <div className="text-xs text-[#2E4A62]/40 italic pt-2">
                      +{schedule.courses.length - 3} more courses
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/course-planner">
                <button
                  className="w-full px-6 py-5 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105 text-[#2E4A62] text-base"
                  style={{ backgroundColor: schedule.accentColor }}
                >
                  View Full Plan
                  <Calendar className="w-5 h-5" />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="bg-white rounded-3xl p-16 text-center shadow-sm">
          <h3 className="text-3xl font-bold text-[#2E4A62] mb-4">
            None of these work for you?
          </h3>

          <p className="text-[#2E4A62]/60 mb-10 max-w-xl mx-auto text-base leading-relaxed">
            No problem! You can customize any schedule or build your own from scratch
            to perfectly match your needs.
          </p>

          <div className="flex items-center justify-center gap-6">
            <Link to="/course-planner">
              <button className="px-10 py-5 bg-gradient-to-r from-[#A9D6FF] to-[#CFE8FF] text-[#2E4A62] rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                Build Custom Schedule
              </button>
            </Link>

            <Link to="/choose-path">
              <button className="px-10 py-5 bg-white text-[#2E4A62] rounded-2xl font-semibold border-2 border-[#CFE8FF] hover:border-[#A9D6FF] hover:shadow-lg hover:scale-105 transition-all duration-200">
                Adjust Preferences
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
