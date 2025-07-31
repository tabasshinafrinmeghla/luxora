import { HomeCarousel } from "@/components/shared/home/home-carousel";
import { HomeBanner } from "@/lib/bannar";



export default function Home() {
  return (
    <div>
      <HomeCarousel items={HomeBanner} />
    </div>
  );
}
