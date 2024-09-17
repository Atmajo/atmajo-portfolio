import AwardBox from "@/components/award-box";
import IntroBox from "@/components/intro-box";
import ProfileBox from "@/components/profile-box";

export default function Home() {
  return (
    <main className="overflow-">
      <section className="relative">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-y-10 md:gap-y-0 items-center mt-20">
          <IntroBox className="z-20" />
          <ProfileBox />
        </div>
        <AwardBox />
        <div className="eclipse-one w-72 h-72 md:w-96 md:h-96 z-0"></div>
      </section>
      <section className="h-screen">
        hello
      </section>
    </main>
  );
}
