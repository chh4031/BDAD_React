import logo from "./logo.svg";
import "./App.css";
import Main from "./Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root_Layout from "./Layouts/Root_Layout";
import Display from "./Components/Display";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Root_Layout />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
