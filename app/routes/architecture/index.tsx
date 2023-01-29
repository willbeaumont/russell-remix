import RelevantExperience from "~/components/layout/relevant-experience";

import { siteData } from "~/data";

export default function Index() {
  return (
    <>
      <RelevantExperience
        data={siteData.architecture.content}
        sectionName="architecture"
      />
    </>
  );
}
