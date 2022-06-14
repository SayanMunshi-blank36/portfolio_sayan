import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-11/12 lg:w-[58rem]">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <hr className="w-full mb-2 h-[0.1rem] bg-black" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
