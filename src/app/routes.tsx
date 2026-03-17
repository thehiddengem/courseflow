import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { PathSelection } from "./pages/PathSelection";
import { CoursePlanner } from "./pages/CoursePlanner";
import { RecommendationResults } from "./pages/RecommendationResults";
import { LoadingScreen } from "./pages/LoadingScreen";
import { CaseStudy } from "./pages/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/choose-path",
    element: <PathSelection />,
  },
  {
    path: "/course-planner",
    element: <CoursePlanner />,
  },
  {
    path: "/recommendations",
    element: <RecommendationResults />,
  },
  {
    path: "/loading",
    element: <LoadingScreen />,
  },
  {
    path: "/about",
    element: <CaseStudy />,
  },
]);