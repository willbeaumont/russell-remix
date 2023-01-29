import About from "~/components/layout/about/about-paragraph";
import Paragraph from "~/components/layout/about/about-paragraph";

import { siteData, userData } from "~/data";

// TODO: ask russ if he likes text fitting all of the above the fold space
export default function Index() {
  return (
    <div>
      <About data={siteData} />
      <section
        id="contact-info"
        className="mx-14 lg:mx-40 sm:flex sm:flex-row-reverse sm:justify-between"
      >
        <div
          id="links"
          className="flex flex-col justify-between my-5 sm:w-1/2 sm:px-4 sm:mt-0 sm:justify-start"
        >
          <p className="text-2xl lg:text-3xl">Contact</p>
          <div
            className="grid grid-cols-4
           sm:grid-cols-3 justify-around h-full mt-5  sm:place-items-center sm:justify-items-start"
          >
            {userData.social.map((media) => (
              <a
                key={media.href}
                href={media.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={media.img} alt={media.alt} className="w-12" />
              </a>
            ))}
            <button className="sm:w-[144px] text-lg border-2 py-2 px-5 bg-blue-300 col-span-2">
              EMAIL
            </button>
          </div>
        </div>
        <img
          src={userData.profile.img}
          alt={userData.profile.alt}
          className="pb-10 sm:w-1/2 sm:max-w-xs"
        />
      </section>
    </div>
  );
}
