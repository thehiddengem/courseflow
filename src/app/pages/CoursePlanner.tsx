import { useState } from "react";
import { Search, MapPin, Clock, Users, Plus, X, AlertCircle } from "lucide-react";
import { Navigation } from "../components/Navigation";

interface Course {
  id: string;
  name: string;
  code: string;
  startTime: string;
  endTime: string;
  dayOfWeek: string;
  format: "online" | "in-person";
  location?: string;
  availableSeats: number;
  totalSeats: number;
  instructor: string;
  color: string;
}

interface ScheduledCourse extends Course {
  scheduledId: string;
}

const availableCourses: Course[] = [
  {
    id: "1",
    name: "Introduction to React",
    code: "WEB101",
    startTime: "09:00",
    endTime: "11:00",
    dayOfWeek: "Monday",
    format: "online",
    availableSeats: 5,
    totalSeats: 30,
    instructor: "Sarah Chen",
    color: "#A9D6FF"
  },
  {
    id: "2",
    name: "Python for Data Science",
    code: "DATA201",
    startTime: "14:00",
    endTime: "16:00",
    dayOfWeek: "Monday",
    format: "in-person",
    location: "Room 305",
    availableSeats: 12,
    totalSeats: 25,
    instructor: "Michael Torres",
    color: "#C7E8D0"
  },
  {
    id: "3",
    name: "UX Design Fundamentals",
    code: "DES150",
    startTime: "10:00",
    endTime: "12:00",
    dayOfWeek: "Tuesday",
    format: "online",
    availableSeats: 8,
    totalSeats: 20,
    instructor: "Emma Wilson",
    color: "#DDF6E8"
  },
  {
    id: "4",
    name: "Database Management",
    code: "CS220",
    startTime: "09:00",
    endTime: "10:30",
    dayOfWeek: "Wednesday",
    format: "in-person",
    location: "Lab 102",
    availableSeats: 3,
    totalSeats: 24,
    instructor: "James Park",
    color: "#CFE8FF"
  },
  {
    id: "5",
    name: "Machine Learning Basics",
    code: "AI301",
    startTime: "15:00",
    endTime: "17:30",
    dayOfWeek: "Wednesday",
    format: "online",
    availableSeats: 15,
    totalSeats: 30,
    instructor: "Dr. Lisa Kumar",
    color: "#A9D6FF"
  },
  {
    id: "6",
    name: "Web Security",
    code: "SEC210",
    startTime: "13:00",
    endTime: "15:00",
    dayOfWeek: "Thursday",
    format: "in-person",
    location: "Room 401",
    availableSeats: 7,
    totalSeats: 20,
    instructor: "Robert Kim",
    color: "#C7E8D0"
  },
  {
    id: "7",
    name: "Mobile App Development",
    code: "MOB250",
    startTime: "10:00",
    endTime: "12:30",
    dayOfWeek: "Friday",
    format: "online",
    availableSeats: 10,
    totalSeats: 25,
    instructor: "Anna Martinez",
    color: "#DDF6E8"
  },
  {
    id: "8",
    name: "Cloud Architecture",
    code: "CLOUD310",
    startTime: "09:00",
    endTime: "11:00",
    dayOfWeek: "Monday",
    format: "online",
    availableSeats: 6,
    totalSeats: 30,
    instructor: "David Lee",
    color: "#A9D6FF"
  }
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const timeSlots = Array.from({ length: 13 }, (_, i) => `${(i + 8).toString().padStart(2, "0")}:00`);

function checkConflict(course1: ScheduledCourse, course2: ScheduledCourse): boolean {
  if (course1.dayOfWeek !== course2.dayOfWeek) return false;

  const start1 = parseTime(course1.startTime);
  const end1 = parseTime(course1.endTime);
  const start2 = parseTime(course2.startTime);
  const end2 = parseTime(course2.endTime);

  return start1 < end2 && start2 < end1;
}

function parseTime(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function CoursePlanner() {
  const [scheduledCourses, setScheduledCourses] = useState<ScheduledCourse[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");

  const addCourseToSchedule = (course: Course) => {
    const scheduledCourse: ScheduledCourse = {
      ...course,
      scheduledId: `${course.id}-${Date.now()}`
    };
    setScheduledCourses([...scheduledCourses, scheduledCourse]);
  };

  const removeCourseFromSchedule = (scheduledId: string) => {
    setScheduledCourses(scheduledCourses.filter((c) => c.scheduledId !== scheduledId));
  };

  const getConflicts = () => {
    const conflicts: Set<string> = new Set();

    for (let i = 0; i < scheduledCourses.length; i++) {
      for (let j = i + 1; j < scheduledCourses.length; j++) {
        if (checkConflict(scheduledCourses[i], scheduledCourses[j])) {
          conflicts.add(scheduledCourses[i].scheduledId);
          conflicts.add(scheduledCourses[j].scheduledId);
        }
      }
    }

    return conflicts;
  };

  const conflicts = getConflicts();
  const hasConflicts = conflicts.size > 0;

  const filteredCourses = availableCourses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFormat = selectedFormat === "all" || course.format === selectedFormat;

    return matchesSearch && matchesFormat;
  });

  return (
    <div
      className="min-h-screen bg-[#F8FCFF]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Navigation variant="app" />

      <div className="max-w-[1800px] mx-auto px-6 py-8 pt-28">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#2E4A62] mb-2">
            Plan Your Schedule
          </h1>
          <p className="text-lg text-[#2E4A62]/70">
            Select courses and build your perfect weekly schedule
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2E4A62]/40" />
            <input
              type="text"
              placeholder="Search courses by name or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-[#CFE8FF]/50 focus:border-[#A9D6FF] focus:outline-none text-[#2E4A62] placeholder:text-[#2E4A62]/40"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-[#2E4A62]/60 font-medium">Filters:</span>

            <button
              onClick={() => setSelectedFormat("all")}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${selectedFormat === "all"
                  ? "bg-[#A9D6FF] text-[#2E4A62]"
                  : "bg-white text-[#2E4A62]/70 hover:bg-[#CFE8FF]/30"
                }`}
            >
              All Formats
            </button>

            <button
              onClick={() => setSelectedFormat("online")}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${selectedFormat === "online"
                  ? "bg-[#A9D6FF] text-[#2E4A62]"
                  : "bg-white text-[#2E4A62]/70 hover:bg-[#CFE8FF]/30"
                }`}
            >
              Online
            </button>

            <button
              onClick={() => setSelectedFormat("in-person")}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${selectedFormat === "in-person"
                  ? "bg-[#A9D6FF] text-[#2E4A62]"
                  : "bg-white text-[#2E4A62]/70 hover:bg-[#CFE8FF]/30"
                }`}
            >
              In-Person
            </button>
          </div>
        </div>

        {/* Conflict Alert */}
        {hasConflicts && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-700 font-medium">
              Schedule conflict detected! Some courses overlap in your schedule.
            </p>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2E4A62] mb-4">
              Available Courses ({filteredCourses.length})
            </h2>

            <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-[#A9D6FF]/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-[#2E4A62] text-lg mb-1">
                        {course.name}
                      </h3>
                      <p className="text-sm text-[#2E4A62]/60">{course.code}</p>
                    </div>

                    <span
                      className="px-3 py-1 rounded-lg text-xs font-semibold text-[#2E4A62]"
                      style={{
                        backgroundColor:
                          course.format === "online" ? "#CFE8FF" : "#DDF6E8"
                      }}
                    >
                      {course.format}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#2E4A62]/70">
                      <Clock className="w-4 h-4" />
                      <span>
                        {course.dayOfWeek}, {course.startTime} - {course.endTime}
                      </span>
                    </div>

                    {course.location && (
                      <div className="flex items-center gap-2 text-sm text-[#2E4A62]/70">
                        <MapPin className="w-4 h-4" />
                        <span>{course.location}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-sm text-[#2E4A62]/70">
                      <Users className="w-4 h-4" />
                      <span>
                        {course.availableSeats} of {course.totalSeats} seats available
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => addCourseToSchedule(course)}
                    className="w-full px-4 py-2.5 bg-[#A9D6FF] text-[#2E4A62] rounded-xl font-semibold hover:bg-[#CFE8FF] transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Schedule
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#2E4A62]">
                Weekly Schedule
              </h2>
              <div className="text-sm text-[#2E4A62]/60">
                {scheduledCourses.length} course{scheduledCourses.length !== 1 ? "s" : ""} scheduled
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Days Header */}
                <div className="grid grid-cols-8 gap-2 mb-2">
                  <div className="text-xs font-medium text-[#2E4A62]/60 p-2">Time</div>
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-center">
                      <div className="text-sm font-semibold text-[#2E4A62] mb-1">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Grid */}
                <div className="relative">
                  {timeSlots.map((time) => (
                    <div key={time} className="grid grid-cols-8 gap-2 mb-1">
                      <div className="text-xs text-[#2E4A62]/50 p-2 font-medium">
                        {time}
                      </div>
                      {daysOfWeek.map((day) => (
                        <div
                          key={`${day}-${time}`}
                          className="min-h-[60px] bg-[#F8FCFF] rounded-lg border border-[#CFE8FF]/20"
                        />
                      ))}
                    </div>
                  ))}

                  {/* Scheduled Courses */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="grid grid-cols-8 gap-2 h-full">
                      <div></div>

                      {daysOfWeek.map((day) => (
                        <div key={day} className="relative">
                          {scheduledCourses
                            .filter((course) => course.dayOfWeek === day)
                            .map((course) => {
                              const startMinutes = parseTime(course.startTime);
                              const endMinutes = parseTime(course.endTime);
                              const duration = endMinutes - startMinutes;
                              const top = ((startMinutes - 8 * 60) / 60) * 61;
                              const height = (duration / 60) * 61;
                              const isConflicting = conflicts.has(course.scheduledId);

                              return (
                                <div
                                  key={course.scheduledId}
                                  className="absolute inset-x-0 rounded-xl p-3 pointer-events-auto cursor-pointer group"
                                  style={{
                                    top: `${top}px`,
                                    height: `${height}px`,
                                    backgroundColor: isConflicting ? "#fecaca" : course.color,
                                    border: isConflicting ? "2px solid #ef4444" : "none"
                                  }}
                                >
                                  <div className="flex items-start justify-between mb-1">
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold text-[#2E4A62] text-sm truncate">
                                        {course.name}
                                      </div>
                                      <div className="text-xs text-[#2E4A62]/70">
                                        {course.startTime} - {course.endTime}
                                      </div>
                                    </div>

                                    <button
                                      onClick={() => removeCourseFromSchedule(course.scheduledId)}
                                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/50 rounded"
                                    >
                                      <X className="w-4 h-4 text-[#2E4A62]" />
                                    </button>
                                  </div>

                                  {course.format === "in-person" && course.location && (
                                    <div className="text-xs text-[#2E4A62]/60 truncate">
                                      {course.location}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End right column */}
        </div>
      </div>
    </div>
  );
}
