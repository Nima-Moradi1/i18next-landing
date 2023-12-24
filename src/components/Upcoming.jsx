import { useEffect, useState } from "react";
import { arab } from "../assets";
import moment from "moment-jalaali";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setData(getEvents);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl lg:text-3xl lg:mr-72">مسابقات آینده</h2>
      <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:mr-72">
        {data.map((item) => {
          return (
            <>
              <div className=" mt-5 ">
                <div
                  key={item.id}
                  className="w-full shrink flex gap-1 items-center text-black">
                  <div className="text-lg md:max-w-[15vw] w-[22vw]">
                    {convertToPersian(item.event_date)}
                  </div>
                  <img src={item.logo} className="w-5 h-5" />
                  <div className="md:max-w-[50vw] w-[35vw] text-lg tracking-wider">
                    {item.name}
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
