import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import InsightPage from "./pages/InsightPage";
import InsightDetailPage from "./pages/InsightDetailPage";
import ContactPage from "./pages/ContactPage";
import StoriesPage from "./pages/StoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/insights" element={<InsightPage />} />
        <Route path="/insights/:id" element={<InsightDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/stories" element={<StoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
