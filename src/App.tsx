import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Differentials } from "./pages/Differentials";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
