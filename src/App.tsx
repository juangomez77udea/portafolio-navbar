import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';

import astro from './assets/img/astro.jpg';

// @ts-ignore: allow importing CSS without type declarations
import "./index.css";

const App = () => (
  <main
    className="h-screen w-screen bg-cover bg-center relative flex items-center justify-center"
    style={{ backgroundImage: `url(${astro})` }}
  >
    <Navbar />
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);