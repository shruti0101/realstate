import HeroCarousel from "@/components/Hero";
import About from "@/components/About";
import OfficesSection from "@/components/Office";
import PopupForm from "@/components/Popup";



export default function Home() {
  return (
 <>
 <PopupForm></PopupForm>
 <HeroCarousel></HeroCarousel>
 <About></About>

 <OfficesSection></OfficesSection>

 </>
  );
}
