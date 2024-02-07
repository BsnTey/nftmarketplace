import "./App.css";

import { Header } from "./components/Header";

import { Footer } from "./components/Footer";
import { MainPage } from "./components/MainPage";
import { Register } from "./components/Register";

function App() {
  return (
    <div>
      <div className="bg-main-base">
        <div className="container max-w-[1180px] py-5">
          <Header />
        </div>
        {/* <MainPage /> */}
        <Register />
      </div>
      <Footer />
    </div>
  );
}

export default App;
