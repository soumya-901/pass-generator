"use client";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero";
import Generator from "./Generator";
import FAQ from "./FAQ";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Generator />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
