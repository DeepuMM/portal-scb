import type { ZudokuConfig } from "zudoku";
import { loadRegistry, portalConfig, type Section } from "./portal/portal";

// This repo publishes only its own section of the portal: <portalUrl>/scb/
const SECTION: Section = { id: "scb", label: "SCB", path: "/scb/" };

// Other sections come from the hub's sections.json, fetched at build time.
const registry = await loadRegistry({
  portalUrl: "https://stzudokudocs20683.z23.web.core.windows.net",
  sections: [SECTION],
});
if (!registry.sections.some((s) => s.id === SECTION.id)) {
  registry.sections.push(SECTION);
}

const config: ZudokuConfig = {
  ...portalConfig(registry, SECTION.id),
  site: { title: "SCB" },
  navigation: [
    {
      type: "category",
      label: "SCB",
      items: ["/welcome", "/onboarding"],
    },
  ],
  redirects: [{ from: "/", to: "/welcome" }],
};

export default config;
