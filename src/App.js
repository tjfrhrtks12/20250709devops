import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HealthPage from "./pages/HealthPage"; // 또는 "./HealthPage" 위치에 따라 수정

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/health" element={<HealthPage />} />
          {/* 메인 페이지도 필요하면 추가 */}
          <Route path="/" element={
            <header className="App-header">
              <p>메인 화면입니다. <a href="/health">서버 상태 확인</a></p>
            </header>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
