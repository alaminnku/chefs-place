import AboutUs from "@components/AboutUs";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Menu from "@components/Menu";
import Reviews from "@components/Reviews";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Menu />
      <Reviews />
    </main>
  );
}
