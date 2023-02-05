import { useCatch, useLoaderData, useParams } from "@remix-run/react";
import { json, LoaderArgs, MetaFunction } from "@remix-run/node";

import BuildingPlaceholder from "~/components/layout/building";
import NoPage from "~/components/layout/noPage";

import { getSubSection } from "~/utils/mock.server";

export function loader({ params }: LoaderArgs) {
  if (params.subSection) {
    const response = getSubSection(params.subSection);
    console.log(params.subSection, response);
    if (response === "building") {
      throw new Response(`Route under construction: ${params.section}`, {
        status: 503,
      });
    } else if (response) {
      return json(response);
    } else {
      throw new Response(`Bad section route: ${params.section}`, {
        status: 404,
      });
    }
  } else {
    throw new Response(`Route undefined`, { status: 404 });
  }
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  const metaTags = {
    description: "Sub section page of John's experience.",
    title: "JRB | Under Construction",
  };

  return metaTags;
};

export default function Index() {
  const subSection = useLoaderData<typeof loader>();

  return <>{subSection}</>;
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
