import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GoHomeFill } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import {
  MdInsertChartOutlined,
  MdEnergySavingsLeaf,
  MdOutlineSettings,
  MdNotifications,
  MdDirectionsBike,
} from "react-icons/md";
import { PiUsersFourBold, PiStrategyFill } from "react-icons/pi";
import { FaDumbbell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { t } = useTranslation(["sidebar"]);
  const [open, setOpen] = useState(window.innerWidth >= 1024);
  const [largeOpen, setLargeOpen] = useState(true);
  useEffect(() => {
    // Function to handle the resize event
    const handleResize = () => {
      // Set the state based on the window width (1024px for 'lg' breakpoint)
      setOpen(window.innerWidth >= 1024);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      setOpen(!open);
      setLargeOpen(largeOpen);
    }
  };

  const [activeNavItem, setActiveNavItem] = useState("خانه");
  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    if (window.innerWidth < 1024) {
      setOpen(!open);
    }
    return;
  };

  return (
    <div className="flex justify-between items-center ">
      {window.innerWidth < 1024 && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10 overflow-auto" onClose={setOpen}>
            <div className="fixed inset-0 overflow-hidden ">
              <div className="absolute inset-0 overflow-hidden ">
                <div className=" pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full">
                    <Dialog.Panel className=" pointer-events-auto relative w-screen max-w-md">
                      <div className="bg-white max-w-72 flex h-full flex-col overflow-y-scroll py-6 shadow-xl">
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {/* Your content */}
                          <div>
                            <div className="flex flex-col gap-2 items-start justify-start cursor-pointer">
                              <div className="w-64 text-center">
                                <MdDirectionsBike className="w-32 h-20 mx-auto" />
                              </div>
                              <div className="flex flex-col items-start justify-start ">
                                <div
                                  className={`${
                                    activeNavItem === "خانه"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("خانه")}>
                                  <GoHomeFill
                                    className={`${
                                      activeNavItem === "خانه" ? "fill-red-500 " : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>خانه</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "تقویم"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("تقویم")}>
                                  <LuCalendarDays
                                    className={`${
                                      activeNavItem === "تقویم"
                                        ? "fill-red-300 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>تقویم</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "آنالیز"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("آنالیز")}>
                                  <MdInsertChartOutlined
                                    className={`${
                                      activeNavItem === "آنالیز"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>آنالیز</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "ATP"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("ATP")}>
                                  <MdEnergySavingsLeaf
                                    className={`${
                                      activeNavItem === "ATP" ? "fill-red-500 " : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>ATP</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "مدیریت ورزشکاران"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() =>
                                    handleNavItemClick("مدیریت ورزشکاران")
                                  }>
                                  <PiUsersFourBold
                                    className={`${
                                      activeNavItem === "مدیریت ورزشکاران"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>مدیریت ورزشکاران</div>
                                </div>
                              </div>
                              <hr className="bg-slate-100 h-[1px] w-60 mx-auto" />
                              <div className="flex flex-col items-start justify-start gap-2">
                                <div
                                  className={`${
                                    activeNavItem === "مخزن تمرین ها"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() =>
                                    handleNavItemClick("مخزن تمرین ها")
                                  }>
                                  <FaDumbbell
                                    className={`${
                                      activeNavItem === "مخزن تمرین ها"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>مخزن تمرین ها</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "استراتژی"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("استراتژی")}>
                                  <PiStrategyFill
                                    className={`${
                                      activeNavItem === "استراتژی"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-7 h-7 "`}
                                  />
                                  <div>استراتژی</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "تنظیمات"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("تنظیمات")}>
                                  <MdOutlineSettings
                                    className={`${
                                      activeNavItem === "تنظیمات"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>تنظیمات</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "آخرین فعالیت ها"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex mb-10 min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() =>
                                    handleNavItemClick("آخرین فعالیت ها")
                                  }>
                                  <MdNotifications
                                    className={`${
                                      activeNavItem === "آخرین فعالیت ها"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>آخرین فعالیت ها</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      {window.innerWidth > 1024 && (
        <div>
          <div className="relative overflow-y-scroll z-10 ">
            <div>
              <div className="absolute inset-0 overflow-hidden overflow-y-scroll">
                <div className=" pointer-events-none fixed inset-y-0 right-0 flex max-w-72 pl-10 overflow-y-scroll">
                  <div>
                    <div className=" pointer-events-auto relative w-screen max-w-72 h-screen">
                      <div className="bg-white max-w-72 flex h-full flex-col overflow-y-scroll py-6 shadow-xl">
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {/* Your content */}
                          <div>
                            <div className="flex flex-col gap-2 items-start justify-start cursor-pointer">
                              <div className="w-64 text-center">
                                <MdDirectionsBike className="w-32 h-20 mx-auto" />
                              </div>
                              <div className="flex flex-col items-start justify-start ">
                                <div
                                  className={`${
                                    activeNavItem === "خانه"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("خانه")}>
                                  <GoHomeFill
                                    className={`${
                                      activeNavItem === "خانه" ? "fill-red-500 " : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>{t("خانه")}</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "تقویم"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("تقویم")}>
                                  <LuCalendarDays
                                    className={`${
                                      activeNavItem === "تقویم"
                                        ? "fill-red-300 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>{t("تقویم")}</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "آنالیز"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("آنالیز")}>
                                  <MdInsertChartOutlined
                                    className={`${
                                      activeNavItem === "آنالیز"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>{t("آنالیز")}</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "ATP"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("ATP")}>
                                  <MdEnergySavingsLeaf
                                    className={`${
                                      activeNavItem === "ATP" ? "fill-red-500 " : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>ATP</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "مدیریت ورزشکاران"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() =>
                                    handleNavItemClick("مدیریت ورزشکاران")
                                  }>
                                  <PiUsersFourBold
                                    className={`${
                                      activeNavItem === "مدیریت ورزشکاران"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>
                                    {t("مدیریت")} {t("ورزشکاران")}
                                  </div>
                                </div>
                              </div>
                              <hr className="bg-slate-100 h-[1px] w-60 mx-auto" />
                              <div className="flex flex-col items-start justify-start gap-2">
                                <div
                                  className={`${
                                    activeNavItem === "مخزن تمرین ها"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() =>
                                    handleNavItemClick("مخزن تمرین ها")
                                  }>
                                  <FaDumbbell
                                    className={`${
                                      activeNavItem === "مخزن تمرین ها"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>
                                    {t("مخزن")} {t("تمرین ها")}
                                  </div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "استراتژی"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("استراتژی")}>
                                  <PiStrategyFill
                                    className={`${
                                      activeNavItem === "استراتژی"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-7 h-7 "`}
                                  />
                                  <div>{t("استراتژی")}</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "تنظیمات"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() => handleNavItemClick("تنظیمات")}>
                                  <MdOutlineSettings
                                    className={`${
                                      activeNavItem === "تنظیمات"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>{t("تنظیمات")}</div>
                                </div>
                                <div
                                  className={`${
                                    activeNavItem === "آخرین فعالیت ها"
                                      ? "flex bg-pink-100 text-red-700"
                                      : ""
                                  } " flex mb-10 min-w-60 px-5 mx-2 min-h-14 rounded-lg justify-start items-center gap-3 "`}
                                  onClick={() =>
                                    handleNavItemClick("آخرین فعالیت ها")
                                  }>
                                  <MdNotifications
                                    className={`${
                                      activeNavItem === "آخرین فعالیت ها"
                                        ? "fill-red-500 "
                                        : ""
                                    } " w-6 h-6 "`}
                                  />
                                  <div>
                                    {t("اخرین")} {t("فعالیت ها")}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" absolute left-0 top-0 flex pt-4 lg:hidden">
        <button
          type="button"
          className="relative rounded-md outline-none"
          onClick={handleToggle}>
          <RxHamburgerMenu className="w-10 h-10 stroke-black" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
