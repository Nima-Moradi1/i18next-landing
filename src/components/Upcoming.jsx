import { useEffect, useState } from "react";
import { arab } from "../assets";
import moment from "moment-jalaali";
import { useTranslation } from "react-i18next";
import jalaali from "jalaali-js";

const getEvents = [
  {
    id: 1,
    name: "قهرمانی آسیا",
    event_date: "1403-01-20",
    location: "india",
    logo: arab,
  },
  {
    id: 2,
    name: "مرحله اول لیگ بانوان",
    event_date: "1403-02-12",
    location: "india",
    logo: arab,
  },
  {
    id: 3,
    name: "کلاس 1 جوانان",
    event_date: "1403-02-22",
    location: "india",
    logo: arab,
  },
  {
    id: 4,
    name: "مرحله دوم لیگ",
    event_date: "1403-03-30",
    location: "india",
    logo: arab,
  },
  {
    id: 5,
    name: "قهرمانی کشور",
    event_date: "1403-03-25",
    location: "india",
    logo: arab,
  },
  {
    id: 6,
    name: "جام کلاس2",
    event_date: "1403-05-20",
    location: "india",
    logo: arab,
  },
  {
    id: 1,
    name: "قهرمانی آسیا",
    event_date: "1403-01-20",
    location: "india",
    logo: arab,
  },
  {
    id: 2,
    name: "مرحله اول لیگ بانوان",
    event_date: "1403-02-12",
    location: "india",
    logo: arab,
  },
  {
    id: 3,
    name: "کلاس 1 جوانان",
    event_date: "1403-02-22",
    location: "india",
    logo: arab,
  },
  {
    id: 4,
    name: "مرحله دوم لیگ",
    event_date: "1403-03-30",
    location: "india",
    logo: arab,
  },
  {
    id: 5,
    name: "قهرمانی کشور",
    event_date: "1403-03-25",
    location: "india",
    logo: arab,
  },
  {
    id: 6,
    name: "جام کلاس2",
    event_date: "1403-05-20",
    location: "india",
    logo: arab,
  },
];
const translationKeys = {
  "قهرمانی آسیا": "Asia ChampionShip",
  "مرحله اول لیگ بانوان": " First Stage Of Women's League",
  "کلاس 1 جوانان": "Class1 Youth",
  "مرحله دوم لیگ": "Second Stage Of The League",
  "جام کلاس2": " Class2 Cup ",
  "قهرمانی کشور": " National ChampionShip",
};
// here we are trying to show the persian name of months to the user
const convertToPersian = (gregorianDate) => {
  const persianDate = moment(gregorianDate, "YYYY,MM,DD").locale("fa");
  const monthNames = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const monthIndex = persianDate.jMonth(); //0-based index
  const formattedDate = persianDate.jDate() + " " + monthNames[monthIndex];
  return formattedDate;
};

const Upcoming = () => {
  const [t, i18n] = useTranslation();
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setData(getEvents);
      setLoading(false);
    };
    fetchData();
  }, []);

  // making the date international to show the user when lang is en
  const getGregorianDateWithMonthName = (shamsiDate) => {
    const [year, month, day] = shamsiDate.split("-").map(Number);
    const gregorianDate = jalaali.toGregorian(year, month, day);
    const gregorian = new Date(
      gregorianDate.gy,
      gregorianDate.gm - 1,
      gregorianDate.gd
    );
    return gregorian.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <h2 className="font-bold text-xl lg:text-3xl rtl:lg:mr-72 lg:mr-0 lg:ml-72 rtl:lg:ml-0">
        {t("upcoming.futureCompetitions")}
      </h2>
      <div className="mt-10 pb-10 grid grid-cols-1 md:grid-cols-2 rtl:lg:mr-72 lg:mr-0 lg:ml-72 rtl:lg:ml-0">
        {data.map((item) => {
          let translationKey = translationKeys[item.name];
          // Getting the translation using the key
          let translatedName = t(translationKey);
          let displayDate = item.event_date;
          const displayName = i18n.language === "en" ? translatedName : item.name;
          if (i18n.language === "en") {
            displayDate = getGregorianDateWithMonthName(item.event_date);
          } else displayDate = convertToPersian(item.event_date);
          return (
            <>
              <div className=" mt-5 ">
                <div
                  key={item.id}
                  className="w-full shrink flex gap-1 items-center text-black">
                  <div className="text-lg md:max-w-[15vw] w-[22vw]">
                    {displayDate}
                  </div>
                  <img src={item.logo} className="w-5 h-5" />
                  <div className="md:max-w-[50vw] w-[35vw] text-lg tracking-wider">
                    {displayName}
                  </div>
                </div>
                <hr className="w-[50vw] mt-5 lg:w-96" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Upcoming;
