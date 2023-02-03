import { Experience, experienceObject, futureSections } from "~/data";

//TODO - decide on how to store/serve data
export function getExperienceData(section: string) {
  try {
    return experienceObject[section as keyof Experience];
  } catch {
    return null;
  }
}

export function getSubSection(subsection: string) {
  if (futureSections.includes(subsection)) {
    return "building";
  } else {
    return null;
  }
}
