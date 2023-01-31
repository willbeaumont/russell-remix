import { ExperienceImage } from "~/data";

import { Link } from "@remix-run/react";

export default function ImageNav({ data }: { data: Array<ExperienceImage> }) {
  return (
    <section className="grid mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map((section, index: number) => (
        <div key={`nav-image-${index}`}>
          <Link
            to={section.link}
            className="relative group uppercase text-2xl text-center"
          >
            <img
              src={section.img}
              className="object-cover h-48 w-full sm:h-60 lg:h-full sm:w-auto group-hover:opacity-30 mx-auto"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100">
              {section.title}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
