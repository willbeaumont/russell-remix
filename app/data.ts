import profilePic from "images/contact/about-profile.jpeg";
import linkedIn from "images/contact/in-blue-logo.png";
import twitter from "images/contact/2021 Twitter logo - blue.png";

export interface SiteData {
  architecture: ExperienceData;
  "interactive-design": ExperienceData;
  research: ExperienceData;
  about: SectionData;
}

export interface SectionData {
  name: string;
  link: string;
  content: Array<ContentData>;
}

export interface ExperienceData {
  name: string;
  link: string;
  content: ExperienceContent;
}

export interface ExperienceContent {
  text: Array<Array<ExperienceElement>>;
}

export interface ExperienceElement {
  blurb: string;
  style: string;
  link: string;
}

export interface ContentData {
  key: string;
  tagline: string;
  link: string;
  blurb: string;
}

export const siteData = {
  architecture: {
    name: "Architecture",
    link: "/architecture",
    content: {
      text: [
        [
          { blurb: "Received a ", style: "", link: "" },
          {
            blurb:
              "Master of Architecture from the Bartlett School of Architecture",
            style: "font-bold",
            link: "",
          },
          {
            blurb: ", University College London; and a ",
            style: "",
            link: "",
          },
          {
            blurb:
              "Bachelor of Architecture at the University of Texas at Austin",
            style: "font-bold",
            link: "",
          },
          { blurb: ".", style: "", link: "" },
        ],
        [
          {
            blurb: "Currently work at COOKFOX Architects.",
            style: "",
            link: "",
          },
        ],
        [
          {
            blurb: "Worked at Curtis + Ginsberg Architects, where I ",
            style: "",
            link: "",
          },
          {
            blurb:
              "contributed to 2 winning competition entries and a large scale rezoning application",
            style: "",
            link: "./professional-work",
          },
          { blurb: ".", style: "", link: "" },
        ],
        [
          {
            blurb: "Have worked in Argentina at ",
            style: "",
            link: "",
          },
          {
            blurb: "MONOBLOCK Arquitectura",
            style: "",
            link: "./professional-work",
          },
          {
            blurb: " and in Chile ",
            style: "",
            link: "",
          },
          {
            blurb: "UndurragaDeves Arquitectura",
            style: "",
            link: "./professional-work",
          },
          {
            blurb: ", during which I gained a ",
            style: "",
            link: "",
          },
          {
            blurb: "professional working proficiency in Spanish",
            style: "font-bold",
            link: "",
          },
          { blurb: ".", style: "", link: "" },
        ],
        [
          { blurb: "Gained ", style: "", link: "" },
          {
            blurb: "experience in construction",
            style: "",
            link: "./general-contracting",
          },
          {
            blurb:
              " as an assistant project manager in southeastern New Mexico.",
            style: "",
            link: "",
          },
        ],
        [
          {
            blurb: "Won a travel ",
            style: "",
            link: "",
          },
          {
            blurb: "fellowship to continue research on post-disaster housing",
            style: "",
            link: "./temporary-housing",
          },
          {
            blurb: " and a Henry Adams AIA certificate upon graduation. ",
            style: "",
            link: "",
          },
          {
            blurb: "Received press for graduate thesis",
            style: "",
            link: "/interactive-design/palimpsest",
          },
          {
            blurb: " blending virtual reality and participatory urban design.",
            style: "",
            link: "",
          },
        ],
      ],
    },
  },
  "interactive-design": {
    name: "Interactive Design",
    link: "/interactive-design",
    content: [],
  },
  research: { name: "Research", link: "/research", content: [] },
  about: {
    name: "About",
    link: "/about",
    content: [
      {
        key: "design",
        tagline: "I design buildings.",
        link: "/architecture",
        blurb:
          "I work at an architecture firm that specializes in sustainable and biophilic design. I read, write articles, and participate in organizations focused on housing policy.",
      },
      {
        key: "code",
        tagline: "I code.",
        link: "/interactive-design",
        blurb:
          "I work with virtual reality, creative coding, and interactive design to create digital space.",
      },
      {
        key: "teaching",
        tagline: "I teach.",
        link: "/research",
        blurb:
          "Design impacts everyone, and everyone should have the tools to understand it. I teach non-architecture students how to analyze the built environment.",
      },
    ],
  },
};

export interface UserData {
  profile: UserProfile;
  social: Array<UserSocial>;
}

export interface UserProfile {
  alt: string;
  img: string;
}

export interface UserSocial {
  alt: string;
  img: string;
  href: string;
}

export const userData = {
  profile: {
    alt: "John Russell Beaumont",
    img: profilePic,
  },
  social: [
    {
      alt: "linkedIn logo",
      img: linkedIn,
      href: "http://www.linkedin.com/in/john-russell-beaumont",
    },
    {
      alt: "twitter logo",
      img: twitter,
      href: "https://twitter.com/jrussbeaumont",
    },
  ],
};
