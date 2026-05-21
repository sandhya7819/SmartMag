import NationalPressHeader from "@/components/NationalPressHeader";
import NationalPressHero from "@/components/NationalPressHero";
import NationalPressContent from "@/components/NationalPressContent";
import NationalPressBottom from "@/components/NationalPressBottom";
import NationalPressFooter from "@/components/NationalPressFooter";

export default function NationalPressPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <NationalPressHeader />
      <NationalPressHero />
      <NationalPressContent />
      <NationalPressBottom />
      <NationalPressFooter />
    </main>
  );
}
