import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Cocktails } from "./components/Cocktails";
import { About } from "./components/About";
import { Art } from "./components/Art";
import Menu from "../../../../gsap_cocktails-main/gsap_cocktails-main/src/components/Menu";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}

export default App;
