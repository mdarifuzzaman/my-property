
import FeaturedHouse from "./components/FeaturedHouse";
import FeaturedHouseList from "./components/FeaturedHouseList";
import FilterSection from "./components/FilterSection";
import HeroBanner from "./components/HeroBanner";
import HouseList from "./components/HouseList";
import NewsLetter from "./components/NewsLetter";
import Service from "./components/Service";

export default async function Home({children}: any) {
  return (
    <>     
        {/* <HeroBanner></HeroBanner>
        <FilterSection></FilterSection>
        <HouseList></HouseList>
        <FeaturedHouseList></FeaturedHouseList>
        <FeaturedHouse></FeaturedHouse>
        <NewsLetter></NewsLetter>
        <Service></Service> */}
        {children}    
    </>
  );
}
