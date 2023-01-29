import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "@remix-run/react";
import { Squash as Hamburger } from "hamburger-react";

import { siteData } from "~/data";
import type { SiteData } from "~/data";

export default function MastHead() {
  const location = useLocation(); // set opacity of nav

  // tailwind controls to show/hide hamburger menu
  const hamburgerCss =
    "sm:visible flex-col items-end border pt-12 p-4 -mt-16 ml-auto w-fit bg-slate-50";
  const navbarCss =
    "sm:h-full sm:flex-row sm:items-center sm:justify-between sm:border-none sm:p-0 sm:m-0 sm:w-full sm:text-xl lg:text-2xl sm:bg-white";

  // toggle showing/hiding hamburger menu
  const [isOpen, setOpen] = useState(true);
  const menuVisibleCss = isOpen ? "visible" : "invisible";
  const nameVisibleCss = isOpen ? "invisible" : "visible";

  return (
    <nav className="fixed top-0 z-1 w-full h-20 px-14 lg:px-40 bg-white shadow-md">
      <div className="sm:hidden h-full flex items-center justify-between">
        <p className={`${nameVisibleCss} text-2xl`}>John Russell Beaumont</p>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#4B727C"
          rounded={true}
        />
      </div>
      <div
        className={`${menuVisibleCss} flex text-3xl text-about-link ${navbarCss} ${hamburgerCss}`}
      >
        <div className="flex flex-col text-right sm:block sm:text-left sm:space-x-6 space-y-6">
          {Object.keys(siteData).map((objKey) => {
            const siteObj = siteData[objKey as keyof SiteData];
            const link = siteObj.link;
            const opacity = link === location.pathname ? "" : "opacity-50";
            if (objKey !== "about") {
              return (
                <Link key={objKey} to={siteObj.link} className={`${opacity}`}>
                  {siteObj.name}
                </Link>
              );
            }
          })}
        </div>

        <Link
          key="about"
          to={siteData.about.link}
          className={`${
            location.pathname !== "/about" ? "opacity-50" : ""
          } mt-6 sm:mt-0`}
        >
          {siteData.about.name}
        </Link>
      </div>
    </nav>
  );
}
