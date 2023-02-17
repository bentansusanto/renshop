import { useState, useEffect} from 'react';
import HeroSection from "./components/HeroSection";
import ProductSection from './components/ProductSection';
import SubscribeSection from './components/SubscribeSection';


const hero = {
  title: "TRENDY FASHION AND GADGET",
  content:"UP TO 50% OFF ON TOP BRANDS",
};


const Home = () => {
  const [Mobile, setMobile] = useState(false);

  // Responsive mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width : 600px)");

      const handleMediaQuery = (event: MediaQueryListEvent) => {
        setMobile(event.matches);
      };

      mediaQuery.addListener(handleMediaQuery);

      return () => {
        mediaQuery.removeListener(handleMediaQuery);
      };
    }
  }, []);
  
  return (
    <div>
      <HeroSection hero={hero} mobile={Mobile}/>
      <ProductSection mobile={Mobile}/>
      <SubscribeSection mobile={Mobile}/>
    </div>
  );
};

export default Home;
