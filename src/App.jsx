import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Technologies from "./components/Technologies/Technologies";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./components/AboutUs/AboutUs";
import WhatDoWeOffer from "./components/WhatDoWeOffer/WhatDoWeOffer"
import Benefits from "./components/benefits/benefits";
import Process from "./components/Process/Process";
import Footer from "./components/Footer/Footer";


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
      <section>
        <Technologies/>
      </section>
      <section>
        <AboutUs/>
      </section>
      <section>
        <WhatDoWeOffer/>
      </section>
      <section>
        <Benefits/>
      </section>
      <section>
        <Process/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
