import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import Leftsec from "./Leftsec";
import Rightsec from "./rightsec";
import Universe from "./Universe";
import React from 'react';
import { Link } from 'react-router-dom';



function ProductPage() {
    return (
        <>


            <Hero />
            <div className=" container border-top">
                <Leftsec
                    heading={"Floww"}
                    text={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Floww experience seamlessly on your Android and iOS devices."}
                    img={"images/imgi_8_products-kite.png"}
                    linkOne={"Try demo"}
                    linkTwo={"Learn more"}
                />
            </div>

            <Rightsec
                heading={"Console"}
                text={"The central dashboard for your TradeFloww account. Gain insights into your trades and investments with in-depth reports and visualisations."}
                img={"images/abf.jpg"}
                linkOne={"Learn more "} />

            <Leftsec
                heading={"Coin"}
                text={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
                img={"images/imgi_12_products-coin.png"}
                linkOne={"Coin"}
            />
            <Rightsec 
             heading={"Floww Connect API"}
                text={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
                img={"images/imgi_13_landing.svg"}
                linkOne={"Floww Connect"}/>
            <Leftsec
                heading={"Varsity mobile"}
                text={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
                img={"images/imgi_14_varsity-products.svg"}
            />
            <p className="my-md-5 px-2 py-5 fs-5 text-center">Want to know more about our technology stack? Check out the <a href="">TradeFloww.tech</a> blog.</p>

            <Universe />



        </>
    );
}

export default ProductPage;