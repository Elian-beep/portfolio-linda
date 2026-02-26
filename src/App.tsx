import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { Resume } from "./pages/Resume";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Services />
        <Resume />
      </main>
    </>
  );
}

export default App;
