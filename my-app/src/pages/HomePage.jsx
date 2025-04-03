import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import Map from "../components/Map/Map";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import Reviews from "../components/Reviews/Reviews";
import Estetic from "../components/Estetic/Estetic";
import Flats from "../components/Flats/Flats";
import Questions from "../components/Questions/Questions";
import Otdelka from "../components/Otdellka/Otdelka";
import Design from "../components/Design/Design";
import Develop from "../components/Develop/Develop";
import Organisation from "../components/Organisations/Organisation";
import Finish from "../components/Finish/Finish";
export function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Map />
      <Features/>
      <About/>
      <Gallery/>
      <Reviews/>
      <Estetic/>
      <Flats/>
      <Questions/>
      <Otdelka/>
      <Design/>
      <Develop/>
      <Organisation/>
      <Finish/>
    </>
  );
}