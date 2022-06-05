import AboutUs from "@components/AboutUs";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Menu from "@components/Menu";
import Reviews from "@components/Reviews";
import Location from "@components/Location";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Menu />
      <Reviews />
      <Location />
      <Contact />
    </main>
  );
};

export default HomePage;
