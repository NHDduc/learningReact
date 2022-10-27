import "./App.css";

import CreateBtn from "./components/header/createBtn";
import SearchForm from "./components/header/searchForm";

import Sidebar from "./components/sidebar/sidebar";

import Item from "./components/todolist/todoItem/item";

import Pavigation from "./components/pavigation/pavigation";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header__createBtn">
            <CreateBtn />
          </div>
          <div className="header__searchForm">
            <SearchForm />
          </div>
        </div>
        <div className="main">
          <div className="main__sidebar">
            <Sidebar />
          </div>
          <div className="main__todolist">
            <Item />
            <div className="main__navigation">
              <Pavigation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
