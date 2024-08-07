import Image from "next/image";
import Herosection from "./components/Herosection";
import FeatureCourse from "./components/FeatureCourse";
import WhyChooseUs from "./components/WhyChooseUs";
import footer from './components/footer'
export default function Home() {
  return (
    <>
      <Herosection/>
      <FeatureCourse/>
      <WhyChooseUs/>
      <footer/>
    </>
  );
}
