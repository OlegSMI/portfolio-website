import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
// import LazyLoadSection from "@/components/LazyLoadSection";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";

const sections = [
  { name: "hero", component: <Hero /> },
  { name: "about", component: <About /> },
  { name: "services", component: <Services /> },
  { name: "work", component: <Work /> },
  { name: "reviews", component: <Reviews /> },
  { name: "cta", component: <Cta /> },
];

export default function Home() {
  return (
    <main>
      {sections.map((section, index) => {
        return (
          // <LazyLoadSection sectionName={section.name} key={index}>
          <>{section.component}</>
          // </LazyLoadSection>
        );
      })}
    </main>
  );
}
