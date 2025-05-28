import Banner from "../widgets/Banner/Banner";
import Methodology from "../widgets/CenterBlocks/Methodology/Methodology";
import Privilege from "../widgets/CenterBlocks/Privilege/Privilege";
import Directions from "../widgets/CenterBlocks/Directions/Directions";
import Reviews from "../widgets/CenterBlocks/Reviews/Reviews";
import Footer from "../widgets/Footer/Footer";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Home() {
  return (
    <PrimeReactProvider>
      <Banner />
      <Methodology />
      <Privilege />
      <Directions />
      <Reviews />
    </PrimeReactProvider>
  );
}
