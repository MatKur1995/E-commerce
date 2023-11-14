import "./ShopBanners.css"

import banner1 from "./93szg5mxr9o81.jpg"
import banner2 from "./pj-manalo-small-space-desk-setup-07.jpg"


export const ShopBanners = () => {


    return (
        <div className="banners-wrapper">
            <div className="banner-img-first">
                <img src={banner1} alt="" className="img-first"/>
                <div className="banner-first-info">
                    <p className="banner-first-p">PS5/XBOX GAMES</p>
                    <button className="banner-first-button">SHOW MORE</button>
                </div>
            </div>
            <div className="banner-img-second">
                <img src={banner2} alt="" className="img-second"/>
                <div className="banner-second-info">
                    <p className="banner-second-p">BEST PC GAMES</p>
                    <button className="banner-second-button">SHOW MORE</button>
                </div>
            </div>
        </div>
    );
};