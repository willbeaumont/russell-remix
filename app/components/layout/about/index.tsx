import { Link } from "@remix-run/react";

import { ContentData, SiteData } from "~/data";

export function Paragraph({ tagline, link, blurb }: ContentData) {
  return (
    <div className="mx-14 lg:mx-40 my-10 sm:my-16 sm:text-xl lg:text-2xl">
      <strong>
        <Link to={link} className="text-about-link hover:underline">
          {tagline}
        </Link>
      </strong>
      <span className="text-about-text"> {blurb}</span>
    </div>
  );
}

export default function About({ data }: { data: SiteData }) {
  return (
    <section id="about-content" className="mt-24 lg:mt-28">
      {data.about.content.map(
        (section) =>
          section && (
            <Paragraph
              key={section.key}
              tagline={section.tagline}
              link={section.link}
              blurb={section.blurb}
            />
          )
      )}
    </section>
  );
}
