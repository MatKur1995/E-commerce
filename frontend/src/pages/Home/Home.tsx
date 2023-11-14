import "./Home.css"
import {ShopCards} from "./ShopCards/ShopCards";
import {ShopItems} from "./ShopItems/ShopItems";
import {ShopCategories} from "./ShopCategories/ShopCategories";
import {ShopBanners} from "./ShopBanners/ShopBanners";
import {ShopBigCarousel} from "./ShopBigCarousel/ShopBigCarousel";


export const Home = () => {



    return (
        <main>
            <ShopBigCarousel/>
            <ShopCards/>
            <ShopItems/>
            <ShopBanners/>
            <ShopCategories/>
        </main>
    );
};