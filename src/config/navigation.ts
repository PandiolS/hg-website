import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  ChartLine,
  ChevronRight,
  Compass,
  FileText,
  Headset,
  Lightbulb,
  PlayCircle,
  Rocket,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

/** A single clickable link inside a mega menu column. */
export type NavLink = {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

/** A titled group of links rendered as one column of the mega menu. */
export type NavColumn = {
  id: string;
  title: string;
  links: NavLink[];
};

/** The optional promoted panel shown on the right side of a mega menu. */
export type NavHighlight = {
  id: string;
  title: string;
  items: NavLink[];
};

/** A card shown in the card-style mega menu (image/icon + title). */
export type NavCard = {
  id: string;
  title: string;
  href: string;
  image?: string;
  icon?: LucideIcon;
};

/**
 * A top-level navbar entry.
 * - Provide `href` for a plain link (e.g. "Pricing").
 * - Provide `columns` (and optionally `highlight`) for a standard mega menu.
 * - Provide `cards` for a card-style mega menu (e.g. "The Higherd Way").
 */
export type NavItem = {
  id: string;
  label: string;
  href?: string;
  columns?: NavColumn[];
  cards?: NavCard[];
  highlight?: NavHighlight;
};

export const navItems: NavItem[] = [
  {
    id: "8d5cd893-f5fe-469d-872b-f6b2e7b27b04",
    label: "The Higherd Way",
    cards: [
      {
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        title: "App 1",
        href: "/higherd-way/philosophy",
        icon: Lightbulb,
      },
      {
        id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        title: "App 2",
        href: "/higherd-way/how-we-work",
        icon: Workflow,
      },
      {
        id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
        title: "App 3",
        href: "/higherd-way/built-for-construction",
        icon: Building2,
      },
      {
        id: "d4e5f6a7-b8c9-0123-def0-234567890123",
        title: "App 4",
        href: "/higherd-way/difference",
        icon: Compass,
      },
    ],
  },
  {
    id: "ed8e1a76-30bc-4975-9dfa-e0378136be19",
    label: "Solutions",
    columns: [
      {
        id: "4ca25151-47e7-4b99-a3a1-9ebe5483bedc",
        title: "Decision Intelligence",
        links: [
          {
            id: "be77ab27-a307-4237-bd91-5cc86e75b24e",
            label: "Project Decision",
            href: "/solutions/project-decision",
            icon: ChevronRight,
          },
          {
            id: "4c5f2a5b-f7a0-4150-a328-f2152b5e2783",
            label: "Investment & Business Cases",
            href: "/solutions/investment-and-business-cases",
            icon: ChevronRight,
          },
          {
            id: "b5ed0317-5c0d-4031-8cee-c81df44b40e9",
            label: "Change and Claims Decisions",
            href: "/solutions/change-and-claims-decisions",
            icon: ChevronRight,
          },
          {
            id: "b5ed0317-5c0d-4031-8cee-c81df44b40e9",
            label: "Workforce Decisions",
            href: "/solutions/workforce-decisions",
            icon: ChevronRight,
          },
          {
            id: "b5ed0317-5c0d-4031-8cee-c81df44b40e9",
            label: "Talent Selection",
            href: "/solutions/talent-selection",
            icon: ChevronRight,
          },
          {
            id: "b5ed0317-5c0d-4031-8cee-c81df44b40e9",
            label: "Decision Workflow",
            href: "/solutions/decision-workflow",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "bd078aa6-a5df-49e8-ab70-09385119f1c5",
        title: "System Intelligence",
        links: [
          {
            id: "18cd0b5c-27eb-486e-82cf-5c6bbe5bfeb8",
            label: "Digital Work System",
            href: "/solutions/digital-work-system",
            icon: ChevronRight,
          },
          {
            id: "7cc70410-8251-48fc-b4f5-5485d623d3c7",
            label: "Workflow Automation",
            href: "/solutions/workflow-automation",
            icon: ChevronRight,
          },
          {
            id: "3894c13f-cc4b-4375-a36f-7e3e493c0efd",
            label: "Software Integration",
            href: "/solutions/software-integration",
            icon: ChevronRight,
          },
          {
            id: "3894c13f-cc4b-4375-a36f-7e3e493c0efd",
            label: "AI Agents & Digital Roles",
            href: "/solutions/ai-agents-and-digital-roles",
            icon: ChevronRight,
          },
          {
            id: "3894c13f-cc4b-4375-a36f-7e3e493c0efd",
            label: "Project Operating Systems",
            href: "/solutions/project-operating-systems",
            icon: ChevronRight,
          },
          {
            id: "3894c13f-cc4b-4375-a36f-7e3e493c0efd",
            label: "Data and Reporting Systems",
            href: "/solutions/data-and-reporting-systems",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "f23f8b45-619a-420c-a25a-264895f5556f",
        title: "People, Culture & Skills",
        links: [
          {
            id: "88309590-3006-494a-967f-86476453d080",
            label: "Skills Intelligence",
            href: "/solutions/skills-intelligence",
            icon: ChevronRight,
          },
          {
            id: "62714110-1026-461b-a36c-172469926001",
            label: "Culture and Team Fit",
            href: "/solutions/culture-and-team-fit",
            icon: ChevronRight,
          },
          {
            id: "b4906f8e-d590-427a-a617-0234a7a8300f",
            label: "Talent Intelligence",
            href: "/solutions/talent-intelligence",
            icon: ChevronRight,
          },
          {
            id: "7306903e-8020-4c3f-8857-305b5691461c",
            label: "Workforce Planning",
            href: "/solutions/workforce-planning",
            icon: ChevronRight,
          },
          {
            id: "4b869d0a-847f-41a2-800e-b30901b02d41",
            label: "Role Intelligence",
            href: "/solutions/role-intelligence",
            icon: ChevronRight,
          },
          {
            id: "78558342-5950-4356-a297-03373578919b",
            label: "AI Matching",
            href: "/solutions/ai-matching",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "f23f8b45-619a-420c-a25a-264895f5556f",
        title: "Integrated Solutions",
        links: [
          {
            id: "88309590-3006-494a-967f-86476453d080",
            label: "Digital Project",
            href: "/solutions/digital-project",
            icon: ChevronRight,
          },
          {
            id: "b4906f8e-d590-427a-a617-0234a7a8300f",
            label: "Transformation",
            href: "/solutions/transformation",
            icon: ChevronRight,
          },
          {
            id: "b4906f8e-d590-427a-a617-0234a7a8300f",
            label: "Intelligent Project Delivery",
            href: "/solutions/intelligent-project-delivery",
            icon: ChevronRight,
          },
        ],
      },
    ],
    highlight: {
      id: "e2e3965b-79ab-4b97-a7c8-e679417a4d2e",
      title: "Highlights",
      items: [
        {
          id: "906373a4-4ce2-4e3d-b3a1-01c1d8b23af1",
          label: "Take a 2-minute tour",
          href: "/tour",
          icon: PlayCircle,
        },
        {
          id: "30646983-6e70-405a-a6a4-e305d3bf017b",
          label: "What's new",
          href: "/changelog",
          icon: Sparkles,
        },
        {
          id: "b4c0fef8-b761-4d7f-a55e-2c6ce625d32f",
          label: "Book a demo",
          href: "/contact",
          icon: Rocket,
        },
      ],
    },
  },
  {
    id: "6a312627-ed5f-4e5a-8f9e-08b49f67363f",
    label: "Our Work",
    columns: [
      {
        id: "6446e8ca-76cd-477d-a410-80adbf5c8676",
        title: "Project Management",
        links: [
          {
            id: "bbe6471d-0209-4f94-aae5-2e74878fe7ab",
            label: "Marketing",
            href: "/solutions/marketing",
            icon: ChevronRight,
          },
          {
            id: "70137efe-b7fe-4659-aaa5-3db204381044",
            label: "Operations",
            href: "/solutions/operations",
            icon: ChevronRight,
          },
          {
            id: "2a46ce17-fdba-45e4-be54-492fa0c39350",
            label: "Sales",
            href: "/solutions/sales",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "b5380950-ced4-499e-95be-7d9ec2b4aabd",
        title: "Project Intelligence",
        links: [
          {
            id: "aede469e-5b67-4203-b75c-7285671ef3f7",
            label: "Startups",
            href: "/solutions/startups",
            icon: ChevronRight,
          },
          {
            id: "ecc2b502-b189-42bc-b819-fd8717b5708c",
            label: "Enterprise",
            href: "/solutions/enterprise",
            icon: ChevronRight,
          },
          {
            id: "221ecac7-229a-465f-8748-5e1d9912bd08",
            label: "Agencies",
            href: "/solutions/agencies",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "48568940-960f-44e2-884c-0c485316954e",
        title: "Workforce Management",
        links: [
          {
            id: "aede469e-5b67-4203-b75c-7285671ef3f7",
            label: "Workforce Planning",
            href: "/solutions/workforce-planning",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "48568940-960f-44e2-884c-0c485316954e",
        title: "Workforce Intelligence",
        links: [
          {
            id: "aede469e-5b67-4203-b75c-7285671ef3f7",
            label: "Workforce Planning",
            href: "/solutions/workforce-planning",
            icon: ChevronRight,
          },
        ],
      },
    ],
    highlight: {
      id: "e2e3965b-79ab-4b97-a7c8-e679417a4d2e",
      title: "Highlights",
      items: [
        {
          id: "906373a4-4ce2-4e3d-b3a1-01c1d8b23af1",
          label: "Take a 2-minute tour",
          href: "/tour",
          icon: PlayCircle,
        },
        {
          id: "30646983-6e70-405a-a6a4-e305d3bf017b",
          label: "What's new",
          href: "/changelog",
          icon: Sparkles,
        },
        {
          id: "b4c0fef8-b761-4d7f-a55e-2c6ce625d32f",
          label: "Book a demo",
          href: "/contact",
          icon: Rocket,
        },
      ],
    },
  },
  {
    id: "61fd3fef-d372-455a-b6e5-c86d4d811fc3",
    label: "Business Impact",
    columns: [
      {
        id: "1687ae4d-9997-4e0b-8a58-a513be9da4f8",
        title: "Project Impact",
        links: [
          {
            id: "b4f3b58d-7ce1-4d28-8249-d2c192d93b0d",
            label: "Blog",
            href: "/blog",
            description: "Guides, tips and news.",
            icon: ChevronRight,
          },
          {
            id: "a683d260-6ad3-422e-94fd-814ae5b8b549",
            label: "Documentation",
            href: "/docs",
            description: "Set up and go deeper.",
            icon: ChevronRight,
          },
          {
            id: "77c54b66-97a4-4223-ab00-a0e506465847",
            label: "Support",
            href: "/support",
            description: "We're here to help.",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "d55fbe16-26e6-4fa1-b2b0-aa12c1cdfffa",
        title: "Workflow Impact",
        links: [
          {
            id: "12ef5978-dc4a-454c-a017-751caf8d1fda",
            label: "Blog",
            href: "/blog",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "607eb569-8a5d-4bd7-876e-3cd0201f1cb8",
        title: "Workforce Impact",
        links: [
          {
            id: "1093426b-7497-4036-bc4b-79a4c65b389e",
            label: "Workforce Planning",
            href: "/solutions/workforce-planning",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "26c8cfba-8a42-4a39-b990-089417f5beb6",
        title: "Matching Impact",
        links: [
          {
            id: "fcdeb385-4eac-4d94-937e-bccba731f994",
            label: "AI Matching",
            href: "/solutions/ai-matching",
            icon: ChevronRight,
          },
        ],
      },
    ],
    highlight: {
      id: "e2e3965b-79ab-4b97-a7c8-e679417a4d2e",
      title: "Highlights",
      items: [
        {
          id: "906373a4-4ce2-4e3d-b3a1-01c1d8b23af1",
          label: "Take a 2-minute tour",
          href: "/tour",
          icon: PlayCircle,
        },
        {
          id: "30646983-6e70-405a-a6a4-e305d3bf017b",
          label: "What's new",
          href: "/changelog",
          icon: Sparkles,
        },
        {
          id: "b4c0fef8-b761-4d7f-a55e-2c6ce625d32f",
          label: "Book a demo",
          href: "/contact",
          icon: Rocket,
        },
      ],
    },
  },
  {
    id: "aa215b02-c8c8-4f24-a601-8b1c27ad6d53",
    label: "Insights Resources (SEO)",
    columns: [
      {
        id: "b0e8b151-3d48-4461-844c-d104e005c418",
        title: "Project Management Knowledge",
        links: [
          {
            id: "5fdfe24d-9a33-4150-86ce-88d8a3ef1e28",
            label: "Blog",
            href: "/blog",
            description: "Guides, tips and news.",
            icon: ChevronRight,
          },
          {
            id: "9b20b2df-29e5-4cdf-863f-b2120fe6a585",
            label: "Documentation",
            href: "/docs",
            description: "Set up and go deeper.",
            icon: ChevronRight,
          },
          {
            id: "273edfcd-d683-47c7-9e66-ae790caabe35",
            label: "Support",
            href: "/support",
            description: "We're here to help.",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "1c18cbd9-135b-4ebe-b68c-e70bd8d02492",
        title: "AI in Construction & Project",
        links: [
          {
            id: "9bd8f25e-ea62-416a-b8ed-d36ed204d668",
            label: "Blog",
            href: "/blog",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "05701f43-36ac-47db-aca7-2f43dc383f93",
        title: "Workflow & Automation",
        links: [
          {
            id: "8fefea09-d97f-4573-8351-4e2a55380647",
            label: "Workforce Planning",
            href: "/solutions/workforce-planning",
            icon: ChevronRight,
          },
        ],
      },
      {
        id: "9552138b-1f42-49ce-8c6e-7dd8883d9611",
        title: "Talent Trends",
        links: [
          {
            id: "bbac6db8-741d-4ef2-a6ff-89bd8b008ff8",
            label: "AI Matching",
            href: "/solutions/ai-matching",
            icon: ChevronRight,
          },
        ],
      },
    ],
  },
  {
    id: "7531cb0c-3f1e-4055-903f-7f9142934f90",
    label: "Contact",
    href: "/contact",
  },
];
