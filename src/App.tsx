import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { About } from "./pages/About";
import { Differentials } from "./pages/Differentials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Differentials />
        <Resume />
      </main>
    </>
  );
}

export default App;
