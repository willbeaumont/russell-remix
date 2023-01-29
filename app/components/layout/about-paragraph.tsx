import { Link } from "@remix-run/react";

interface AboutParagraphProps {
  tagline: string;
  link: string;
  blurb: string;
}

export default function AboutParagraph({
  tagline,
  link,
  blurb,
}: AboutParagraphProps) {
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
