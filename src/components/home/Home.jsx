// import hero from "../../assets/Jupiter-Moon-Orbit.png"
import "../../index.css"
import Footer from "./common/Footer";
import Header from "./common/Header";

export default function Home() {
  return (
    <>
    <Header />
      <br/>
    <section>
      {/* <img src={hero} alt="saturn-moons" className="hero"/> */}
      {/* <img
        src="./pics/Saturn-Rings.jpeg"
        alt="Saturn-Rings"
      /> */}
      <ul>
        {/* probably will become links to other paths */}
        <li>Moon</li>
        <li>Sun</li>
        <li>Stars</li>
        <li>Planets</li>
        <li>Constellations</li>
      </ul>
    </section>
    <Footer />
    </>
  );
}