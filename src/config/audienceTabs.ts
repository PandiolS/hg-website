export type AudienceTab = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const audienceTabs: AudienceTab[] = [
  {
    id: "managers",
    title: "Project Managers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/tabs/managers.svg",
    imageAlt: "Project managers reviewing plans on site",
  },
  {
    id: "finance",
    title: "CFOs & Finance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/tabs/finance.svg",
    imageAlt: "Finance leaders analysing project budgets",
  },
  {
    id: "hr",
    title: "HR Leaders",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/tabs/hr.svg",
    imageAlt: "HR team collaborating in an office",
  },
  {
    id: "teams",
    title: "Field Teams",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/tabs/teams.svg",
    imageAlt: "Construction team working together on site",
  },
];
