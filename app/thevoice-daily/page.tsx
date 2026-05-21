import VoiceDailyHeader from "@/components/VoiceDailyHeader";
import VoiceDailyContent from "@/components/VoiceDailyContent";
import VoiceDailyFooter from "@/components/VoiceDailyFooter";

export default function VoiceDailyPage() {
  return (
    <main className="min-h-screen bg-[#eceff1] antialiased">
      <VoiceDailyHeader />
      <VoiceDailyContent />
      <VoiceDailyFooter />
    </main>
  );
}
