import About from "~/components/layout/about";
import Contact from "~/components/UI/contact";

import { siteData, userData } from "~/data";

export default function Index() {
  return (
    <div>
      <About data={siteData.about.content} />
      <Contact data={userData} />
    </div>
  );
}
