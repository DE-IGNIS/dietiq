import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Content from "./pages/Content";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Join from "./pages/Join";
import { DietGen, Feature1, Feature2, Trivia } from "./pages/home";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Landing Page route  */}
          <Route path="/" element={<Landing />} />

          {/* Home Page route  */}
          <Route path="/home" element={<Home />} />

          {/* Home - feature 1  Page route  */}
          <Route path="/home/feature1" element={<Feature1 />} />

          {/* Home - feature 2 Page route  */}
          <Route path="/home/feature2" element={<Feature2 />} />

          {/* Home - feature 3 Page route  */}
          <Route path="/home/trivia" element={<Trivia />} />

          {/* Home - feature 4 Page route  */}
          <Route path="/home/dietgen" element={<DietGen />} />

          {/* Content Page route  */}
          <Route path="/content" element={<Content />} />

          {/* About Page route  */}
          <Route path="/about" element={<About />} />
        </Route>

        {/* Join Page route  */}
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
}

export default App;
