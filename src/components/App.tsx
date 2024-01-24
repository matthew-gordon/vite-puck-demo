import { Routes, Route, Link } from "react-router-dom";
import { Editor } from "./Editor";
import { Site } from "../pages/Site";
import Landing from "../pages/Landing";

function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/site">
          <button>View my site</button>
        </Link>
      </nav>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="editor" element={<Editor />} />
        <Route path="site" element={<Site />} />
      </Routes>
    </>
  );
}

export default App;
