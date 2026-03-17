import { Menu, User } from "lucide-react";
import { Link } from "react-router";

type NavigationProps = {
  variant?: "marketing" | "app";
};

export function Navigation({ variant = "marketing" }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#CFE8FF]/30">
      <div className="w-full px-8 py-4">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition"

          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#A9D6FF] to-[#C7E8D0] rounded-xl flex items-center justify-center">
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
            <span className="text-xl font-bold text-[#2E4A62]">CourseFlow</span>
          </Link>

          {/* Desktop Navigation */}
          {variant === "marketing" && (
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/#features"
                className="text-[#2E4A62]/70 hover:text-[#2E4A62] transition-colors"
              >
                Features
              </a>


              <Link
                to="/choose-path"
                className="text-[#2E4A62]/70 hover:text-[#2E4A62] transition-colors"
              >
                Paths
              </Link>

              <Link
                to="/course-planner"
                className="text-[#2E4A62]/70 hover:text-[#2E4A62] transition-colors"
              >
                Build
              </Link>

              <Link
                to="/about"
                className="text-[#2E4A62]/70 hover:text-[#2E4A62] transition-colors"
              >
                About
              </Link>
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center gap-4">
            {variant === "marketing" ? (
              <>


                <Link to="/choose-path">
                  <button className="px-6 py-2.5 bg-[#A9D6FF] text-[#2E4A62] rounded-xl font-semibold hover:bg-[#CFE8FF] transition-colors">
                    Get Started
                  </button>
                </Link>

                <button className="md:hidden text-[#2E4A62]">
                  <Menu className="w-6 h-6" />
                </button>
              </>
            ) : (
              <button
                type="button"
                aria-label="Profile"
                className="w-10 h-10 bg-gradient-to-br from-[#CFE8FF] to-[#DDF6E8] rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                <User className="w-5 h-5 text-[#2E4A62]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
