import Header from "./components/Header/Header";
import MainService from "./components/Services/MainService";
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
      </main>
    </div>
  );
}

export default App;
