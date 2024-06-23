
import React from "react";
import HeroBanner from "./components/HeroBanner";
import FilterSection from "./components/FilterSection";
import HouseList from "./components/HouseList";
import FeaturedHouseList from "./components/FeaturedHouseList";

const Components: any = {
    HeroBanner: HeroBanner,
    FilterSection: FilterSection,
    HouseList: HouseList,
    FeaturedHouseList: FeaturedHouseList
}

export default function ComponentFactory(block: any){
    if(typeof Components[block.component] !== "undefined"){
        return React.createElement(Components[block.component], {
            key: block.name,
            props: block.value
        });
    }

    return React.createElement(
        () => <div className="h-4 bg-color-yellow">The component {block.component} has not been created yet.</div>,
        { key: block.name}
    )
}