import FeatureProducts from "./components/FeatureProducts";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Bhatt store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
