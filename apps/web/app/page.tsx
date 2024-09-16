import AwardBox from "@/components/award-box";
import IntroBox from "@/components/intro-box";
import ProfileBox from "@/components/profile-box";

export default function Home() {
  return (
    <main className="md:px-20">
      <section className="relative">
        <div className="flex justify-between items-center mt-20 z-20">
          <IntroBox className="" />
          <ProfileBox />
        </div>
        <AwardBox />
        <div className="eclipse-one z-0"></div>
      </section>
      <section className="h-screen">
        hello
      </section>
    </main>
  );
}
