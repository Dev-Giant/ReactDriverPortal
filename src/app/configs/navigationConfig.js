import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "apps",
    type: "group",
    children: [
      {
        id: "trips",
        title: "Trips",
        type: "item",
        icon: "heroicons-outline:truck",
        url: "/trips",
        translate: "Trips",
      },
      {
        id: "unit",
        title: "Unit",
        type: "item",
        icon: "heroicons-outline:collection",
        url: "/unit",
        translate: "Unit",
      },
      {
        id: "paperwork",
        title: "PaperWork",
        type: "item",
        icon: "heroicons-outline:document-text",
        url: "/paper-work",
        translate: "PaperWork",
      },
      {
        id: "History",
        title: "History",
        type: "item",
        icon: "heroicons-outline:presentation-chart-line",
        url: "/history",
        translate: "History",
      },
      {
        id: "homerequest",
        title: "HomeRequest",
        type: "item",
        icon: "heroicons-outline:pencil-alt",
        url: "/home-request",
        translate: "HomeRequest",
      },
      {
        id: "chat",
        title: "Chat",
        type: "item",
        icon: "heroicons-outline:chat-alt",
        url: "/chat",
        translate: "Chat",
      },
      {
        id: "contacts",
        title: "Contacts",
        type: "item",
        icon: "heroicons-outline:users",
        url: "/contacts",
        translate: "Contacts",
      },
    ],
  },
];

export default navigationConfig;
