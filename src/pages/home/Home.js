import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import "./home.css";
import Header from "../../components/header/Header";
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
        <div className="razmak"> {/* doda kodradi izgleda*/}
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        </div>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
      </div>
    </div>
  )
}

export default Home;