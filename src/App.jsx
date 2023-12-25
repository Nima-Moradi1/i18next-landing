import i18next from "i18next";
import Echart from "./components/Echart";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Upcoming from "./components/Upcoming";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n, t } = useTranslation();
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(document.getElementsByTagName("html"));
    document
      .getElementsByTagName("html")[0]
      .setAttribute("dir", e.target.value === "en" ? "ltr" : "rtl");
  };
  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute(
        "dir",
        localStorage.getItem("i18nextLng") === "en" ? "ltr" : "rtl"
      );
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("fa");
    }
  }, []);
  return (
    <>
      <Suspense fallback={null}>
        <div className=" mx-auto bg-slate-50">
          <Sidebar />
          <div className=" m-5">
            <div className="flex gap-5 rtl:lg:pr-72 lg:pr-0 lg:pl-72 rtl:lg:pl-0">
              <h1 className="text-3xl ">{t("hero.myAthletes")}</h1>
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
