import HeroSection from "./herosection";
import LatestBlogSection from "./latestblogsection";
import CarouselSection from "@/app/views/HomePage/CarouselSection";
import CategoriesSection from "./CategoriesSection";
import Testiomnolgy from "./testiomnolgy";
export default function Home() {
    return(
        <>
      <HeroSection />

      <LatestBlogSection />
            <CarouselSection />
            <CategoriesSection />
            <Testiomnolgy />
    </>
    )
}