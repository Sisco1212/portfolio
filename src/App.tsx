
import { Routes, Route } from "react-router";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="app-shell">
      <div className="site-atmosphere" aria-hidden="true" />

<ScrollToTop />
      <SmoothScroll />
      <CustomCursor />

      <div className="route-layer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
