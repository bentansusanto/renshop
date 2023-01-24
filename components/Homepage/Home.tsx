import { useState, useEffect} from 'react';
import HeroSection from "./components/HeroSection";
import ProductSection from './components/ProductSection';
import SubscribeSection from './components/SubscribeSection';


const hero = {
  title: "TRENDY FASHION AND GADGET",
  content:"UP TO 50% OFF ON TOP BRANDS",
};

const Category = [
  {
    image : require('../../public/assets/corey-watson-6uW0PTXaOd8-unsplash.jpg'),
    category : 'Men Clothes',
    link : '/men'
  },
  {
    image : require('../../public/assets/ian-dooley-TT-ROxWj9nA-unsplash.jpg'),
    category : 'Women Clothes',
    link : '/men'
  },
  {
    image : require('../../public/assets/simran-sood-JyTJjaWW9zE-unsplash.jpg'),
    category : 'Jewerly',
    link : '/men'
  },
  {
    image : require('../../public/assets/c-d-x-PDX_a_82obo-unsplash.jpg'),
    category : 'Electronic',
    link : '/men'
  }
]

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
      <ProductSection mobile={Mobile} category={Category}/>
      <SubscribeSection/>
    </div>
  );
};

export default Home;
