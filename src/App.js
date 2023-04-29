import Header from "./component/header/Header";
import Specialize from "./component/Specialize";
import Service from "./component/Service";
import TodaySell from "./component/TodaySell";
import Listing from "./component/Listing";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "./component/Video";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Specialize />
      <Service />
      <TodaySell />
      <Listing />
      <Video />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
