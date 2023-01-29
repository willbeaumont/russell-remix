import profilePic from "images/contact/about-profile.jpeg";
import linkedIn from "images/contact/in-blue-logo.png";
import twitter from "images/contact/2021 Twitter logo - blue.png";

export interface SiteData {
  architecture: SectionData;
  research: SectionData;
  about: SectionData;
}

export interface SectionData {
  name: string;
  link: string;
  content: Array<ContentData | null>;
}

export interface ContentData {
  key: string;
  tagline: string;
  link: string;
  blurb: string;
}

export const siteData = {
  architecture: { name: "Architecture", link: "/architecture", content: [] },
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
