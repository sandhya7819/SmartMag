import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartMag DigitalHub — Premium Theme Demo",
  description: "Dark tech magazine demo — gadgets, phones, gaming, and technology news.",
};

export default function DigitalHubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
