import { MetaFunction } from "@remix-run/node";
import About from "~/components/layout/about";
import Contact from "~/components/UI/contact";

import { siteData, userData } from "~/data";

export const meta: MetaFunction = () => {
  return {
    description: "John's welcome page.",
    title: "JRB | About",
  };
};

export default function Index() {
  return (
    <div>
      <About data={siteData.about.content} />
      <Contact data={userData} />
    </div>
  );
}
