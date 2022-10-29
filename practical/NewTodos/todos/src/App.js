import "./App.css";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import Sidebar from "./layouts/Sidebar";

import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
