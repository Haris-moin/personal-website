import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutScreens from "./layout-screens";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
