import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,rgba(91,197,230,0.12)_0%,rgba(255,255,255,1)_28%)] text-slate-900">
      <Navbar />
      {/* <main className="flex-1" /> */}
      <Footer />
    </div>
  );
}

export default App;
