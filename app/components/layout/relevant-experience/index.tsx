import { Link } from "@remix-run/react";
import { ExperienceContent, ExperienceElement } from "~/data";

export function Paragraph({ data }: { data: Array<ExperienceElement> }) {
  return (
    <p className="my-5 sm:my-11">
      {data.map((sentence: ExperienceElement, index: number) => (
        <Sentence
          key={`sentence-${index}`}
          blurb={sentence.blurb}
          style={sentence.style}
          link={sentence.link}
        />
      ))}
    </p>
  );
}

export function Sentence({ blurb, style, link }: ExperienceElement) {
  let sentenceText = <span className={style}>{blurb}</span>;

  if (/^http/.test(link)) {
    sentenceText = (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-about-link hover:underline"
      >
        {sentenceText}
      </a>
    );
  } else if (link) {
    sentenceText = (
      <Link to={link} className="text-about-link hover:underline">
        {sentenceText}
      </Link>
    );
  }

  return sentenceText;
}

export default function RelevantExperience({
  data,
  sectionName,
}: {
  data: ExperienceContent;
  sectionName: string;
}) {
  return (
    <section
      id={`${sectionName}-text`}
      className="mt-24 lg:mt-28 mx-14 lg:mx-40 sm:text-xl lg:text-2xl"
    >
      <h2 className="italic">Relevant Experience</h2>
      {data.text.map((paragraph, index: number) => (
        <Paragraph key={`paragraph-${index}`} data={paragraph} />
      ))}
    </section>
  );
}
