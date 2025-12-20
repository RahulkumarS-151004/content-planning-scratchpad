import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateContent from "./pages/Add_content";
import ViewContents from "./pages/View_contents";
import UpdateContent from "./pages/Update_content";
import DeleteContent from "./pages/Delete_content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateContent />} />
        <Route path="/view" element={<ViewContents />} />
        <Route path="/update" element={<UpdateContent />} />
        <Route path="/delete" element={<DeleteContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
