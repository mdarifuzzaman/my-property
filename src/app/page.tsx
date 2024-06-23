
import FeaturedHouse from "./components/FeaturedHouse";
import FeaturedHouseList from "./components/FeaturedHouseList";
import FilterSection from "./components/FilterSection";
import HeroBanner from "./components/HeroBanner";
import HouseList from "./components/HouseList";

export default async function Home({children}: any) {
  return (
    <>     
        <HeroBanner></HeroBanner>
        <FilterSection></FilterSection>
        <HouseList></HouseList>
        <FeaturedHouseList></FeaturedHouseList>
        <FeaturedHouse></FeaturedHouse>
        {children}    
    </>
  );
}
