

import React, {useState} from "react";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";
import WomenCollections from "../components/WomenCollections";

import {Gents} from "../data";
import { Ladies } from "../data";


const MainPage = () => {

    const [gentsFashion, setGentsFashion] = useState(Gents);
    const [ladiesFashion, setLadiesFashion] = useState(Ladies);

    return (
        <div>
            <Header />
            <Banner />
            <Collections gentsFashion = {gentsFashion}/>
            <WomenCollections ladiesFashion = {ladiesFashion}/>
            <Footer />
        </div>
      );
}
 
export default MainPage;