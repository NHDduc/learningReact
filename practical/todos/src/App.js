import "./App.css";

import CreateBtn from "./components/SearchForm/createBtn";
import SearchForm from "./components/SearchForm/searchForm";

import Sidebar from "./components/TodoItem/sidebar";

import Item from "./components/todolist/todoItem/item";

import Pavigation from "./components/Pagination/pavigation";

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
