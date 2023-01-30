import RelevantExperience from "~/components/layout/relevant-experience";
import ImageNav from "~/components/UI/image-nav";

import { siteData } from "~/data";

export default function Index() {
  return (
    <>
      <ImageNav data={siteData["interactive-design"].content.images} />
      <RelevantExperience
        data={siteData["interactive-design"].content}
        sectionName="interactive-design"
      />
    </>
  );
}
