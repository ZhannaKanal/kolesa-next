import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import MainSection from "./mainsection/MainSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Main />
      <MainSection />
      <Footer />
    </div>
  );
}
