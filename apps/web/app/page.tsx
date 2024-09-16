import IntroBox from "@/components/intro-box";
import ProfileBox from "@/components/profile-box";

export default function Home() {
  return (
    <main className="md:px-20">
      <div className="relative">
        <div className="flex justify-between items-center mt-20">
          <IntroBox className="" />
          <ProfileBox />
        </div>
        <div className="eclipse-one"></div>
      </div>
    </main>
  );
}
