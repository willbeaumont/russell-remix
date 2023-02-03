import { useCatch, useLoaderData } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/node";

import BuildingPlaceholder from "~/components/layout/building";
import NoPage from "~/components/layout/noPage";
import RelevantExperience from "~/components/layout/relevant-experience";
import ImageNav from "~/components/UI/image-nav";

import { getExperienceData } from "~/utils/mock.server";

export function loader({ params }: LoaderArgs) {
  const sectionKey = params.section;
  if (sectionKey) {
    const response = getExperienceData(sectionKey);
    if (response) {
      return response;
    } else {
      throw new Response(`Bad section route: ${params.section}`, {
        status: 404,
      });
    }
  } else {
    throw new Response(`Route undefined`, { status: 404 });
  }
}

export default function Index() {
  const section = useLoaderData<typeof loader>();

  return (
    <>
      <ImageNav data={section.content.images} />
      <RelevantExperience data={section.content} sectionName="architecture" />
    </>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <NoPage />;
  } else if (caught.status === 503) {
    return <BuildingPlaceholder />;
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
