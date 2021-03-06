import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import MainService from "./components/Services/MainService";
import SubServices from "./components/Services/SubServices";
import Testimonials from "./components/Testimonials/Testimonials";
import { MAIN_SERVICES } from "./lib/text";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {MAIN_SERVICES.map((service) => (
          <MainService
            key={service.id}
            header={service.header}
            body={service.body}
            image={service.image}
          />
        ))}
        <SubServices />
        <Testimonials />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default App;
