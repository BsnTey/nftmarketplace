import { Routes, Route } from "react-router-dom";

import "./App.css";

import { MainPage } from "./components/MainPage";
import { Register } from "./components/Register";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { ConnectWallet } from "./components/ConnectWallet";
import { Marketplace } from "./components/Marketplace";
import { Rankings } from "./components/Rankings";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="profle" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="connect" element={<ConnectWallet />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="rankings" element={<Rankings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
