import "../styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
