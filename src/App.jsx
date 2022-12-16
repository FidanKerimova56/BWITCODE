import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
    </div>
  );
}

export default App;
