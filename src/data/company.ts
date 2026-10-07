import { SITE } from "@/lib/site";

export type Member = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  photo?: string;
  linkedin?: string;
};

export const TEAM: Member[] = [
  {
    name: "Jermaine J.",
    role: "Chief Executive Officer",
    initials: "JJ",
    linkedin: "https://www.linkedin.com/in/jermaine-johnson-093894b9/",
  },
  {
    name: "Sidnei A.",
    role: "Chief Technology Officer",
    initials: "SA",
    linkedin: "https://www.linkedin.com/in/sidnei-andr%C3%A9-720956171/",
  },
  {
    name: "Bogdan K.",
    role: "Tech Lead",
    initials: "BK",
    linkedin: "https://www.linkedin.com/in/bogdan-kaminskyi-69b5623b8/",
  },
];

export const COMPANY_LOCATION = {
  name: "Yooventure HQ",
  address: SITE.location,
  // ZIP 91602 (North Hollywood, Los Angeles) marker lat/lon
  lat: 34.151,
  lon: -118.3663,
};
