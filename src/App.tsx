import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { Resume } from "./pages/Resume";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Services />
        <Resume />
      </main>
    </>
  );
}

export default App;
