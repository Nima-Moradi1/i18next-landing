import { useEffect, useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import jalaali from "jalaali-js";
import { arab } from "../assets";
// import moment from "moment-jalaali";
// import axios from "axios";
//

// creating the object for local api
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
];

const Hero = () => {
  const [dropdownData, setDropdownData] = useState([]);
  // const BASE_URL = "https://vo2.ir/api";

  // State to handle loading status
  const [isLoading, setIsLoading] = useState(false);

  // State to handle errors
  //   const [error, setError] = useState(null);

  // Triggering the data fetch
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      setDropdownData(getEvents);
      setIsLoading(false);
      // try {
      //   const response = await axios(`${BASE_URL}/getEvents`, {
      //     method: "GET",
      //     mode: "no-cors",
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   const data = await response.json();
      //   setDropdownData(data);
      // } catch (error) {
      //   setError(error.message);
      // } finally {
      //   setIsLoading(false);
      // }
    };

    //     // Call the function
    fetchData();

    //     // Dependency array is empty, so the effect will only run once
  }, []);

  // Function to return dropdown list items
  const renderDropdownItems = () => {
    return dropdownData.map((item) => {
      // Convert the event_date of the current item to weeks remaining
      let weeksRemaining = convertToGregorianAndGetWeeks(item.event_date);

      // Return option element for the dropdown
      return (
        <>
          <option value={item.id} key={item.id}>
            {weeksRemaining > 0
              ? `${weeksRemaining} هفته تا`
              : "رویداد به اتمام رسیده است"}{" "}
            {item.name}
          </option>
        </>
      );
    });
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // here we are setting the date and converting it so we can show it in dropdown list
  const currentDate = new Date();

  const convertToGregorianAndGetWeeks = (jalaliDate) => {
    // Split the Jalali date to get the year, month, and day separately
    const [year, month, day] = jalaliDate.split("-").map(Number);

    // Convert Jalali date to Gregorian date
    const { gd, gm, gy } = jalaali.toGregorian(year, month, day);

    // Create a Date object from the Gregorian date
    const eventDate = new Date(gy, gm - 1, gd);

    // Calculate difference in milliseconds
    const diff = eventDate - currentDate;

    // Convert milliseconds to weeks
    const weeks = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));

    return weeks;
  };

  return (
    <div className="2xl:pl-16 mt-10 items-center justify-center lg:w-screen lg:flex lg:justify-end lg:pl-5 ">
      <div className="flex justify-between lg:justify-end items-center gap-5 m-5">
        <div>
          <MdOutlineSettings className="lg:w-7 lg:h-7 w-5 h-5 cursor-pointer " />
        </div>
        <div>
          <LuCalendarDays className="lg:w-7 lg:h-7 w-5 h-5 cursor-pointer" />
        </div>
        <div className="text-black flex-grow ">
          {/* {error && <p>ارور در دریافت دیتا : {error}</p>} */}
          {isLoading ? (
            <p>در حال دریافت دیتا...</p>
          ) : (
            <select
              onChange={handleSelectChange}
              value={selectedValue}
              className="bg-slate-200 shadow-lg shadow-slate-500 ring-slate-500 ring-2 rounded-xl p-1 w-[70vw] lg:w-[20vw] text-black ">
              {renderDropdownItems()}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
