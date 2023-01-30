import BuildingPlaceholder from "~/components/layout/building";
import RelevantExperience from "~/components/layout/relevant-experience";

import { siteData } from "~/data";

export default function Index() {
  return (
    <>
      <BuildingPlaceholder />
      <RelevantExperience
        data={siteData["interactive-design"].content}
        sectionName="interactive-design"
      />
    </>
  );
}
