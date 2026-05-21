import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Voice Daily — SmartMag News Demo",
  description: "Premium news magazine template demo — politics, technology, sports, health and more.",
};

export default function TheVoiceDailyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Faustina:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
