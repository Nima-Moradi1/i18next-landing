import Echart from "./components/Echart";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Upcoming from "./components/Upcoming";

function App() {
  return (
    <>
      <div className=" mx-auto mt-4 ">
        <Sidebar />
        <div className=" mx-5">
          <h1 className="text-3xl lg:pr-72">ورزشکاران من</h1>
          <Hero />
          <Echart />
          <Upcoming />
        </div>
      </div>
    </>
  );
}

export default App;
