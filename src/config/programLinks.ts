export type ProgramKey = "titan" | "venus";

export interface ProgramConfig {
  title: string;
  audience: "Homme" | "Femme";
  stripeUrl: string;
  downloadKey: string;
  filePath: string;
}

export const PROGRAMS: Record<ProgramKey, ProgramConfig> = {
  titan: {
    title: "Titan",
    audience: "Homme",
    stripeUrl: "https://buy.stripe.com/5kQ00j9J8cNd8j387F5sA00",
    downloadKey: "TITAN_9xA2_7mP4_2026",
    filePath: "/files/x9k2m_titan_2026_v4.pdf",
  },
  venus: {
    title: "Vénus",
    audience: "Femme",
    stripeUrl: "https://buy.stripe.com/8x24gzcVkeVldDngEb5sA01",
    downloadKey: "VENUS_4kL8_2nR1_2026",
    filePath: "/files/q7p4z_venus_2026_v4.pdf",
  },
};