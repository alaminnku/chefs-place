import AboutUs from "@components/AboutUs";
import Hero from "@components/Hero";
import Menu from "@components/Menu";
import Reviews from "@components/Reviews";
import Location from "@components/Location";
import Contact from "@components/Contact";
import { pizzas, burgers, drinks } from "@data/menu";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Menu pizzas={pizzas} burgers={burgers} drinks={drinks} />
      <Reviews />
      <Location />
      <Contact />
    </main>
  );
};

export default HomePage;
