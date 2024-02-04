import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadPage from "./pages/uploadPage";
import ResultPage from "./pages/resultPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<UploadPage />} path="/" />
          <Route element={<ResultPage />} path="/result" />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
