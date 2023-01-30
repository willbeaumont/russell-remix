import RelevantExperience from "~/components/layout/relevant-experience";
import ImageNav from "~/components/UI/image-nav";

import { siteData } from "~/data";

export default function Index() {
  return (
    <>
      <ImageNav data={siteData.architecture.content.images} />
      <RelevantExperience
        data={siteData.architecture.content}
        sectionName="architecture"
      />
    </>
  );
}
