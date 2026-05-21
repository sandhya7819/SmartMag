import DigitalHubHeader from "@/components/DigitalHubHeader";
import DigitalHubContent from "@/components/DigitalHubContent";
import DigitalHubFooter from "@/components/DigitalHubFooter";

export default function DigitalHubPage() {
  return (
    <main className="min-h-screen bg-[#151516] selection:bg-[#00cf92] selection:text-[#111]">
      <DigitalHubHeader />
      <DigitalHubContent />
      <DigitalHubFooter />
    </main>
  );
}
