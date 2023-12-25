import i18next from "i18next";
import Echart from "./components/Echart";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Upcoming from "./components/Upcoming";
import { Suspense, useEffect } from "react";
function App() {
  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  });
  return (
    <>
      <Suspense fallback={null}>
        <div className=" mx-auto bg-slate-50">
          <Sidebar />
          <div className=" m-5">
            <div className="flex gap-5 lg:pr-72">
              <h1 className="text-3xl ">ورزشکاران من</h1>
              <select
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLanguageChange}
                className="rounded-xl bg-slate-200 p-2 shadow-md shadow-slate-400 ring-1">
                <option value="en">English</option>
                <option value="fa">فارسی</option>
              </select>
            </div>
            <Hero />
            <Echart />
            <Upcoming />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default App;
