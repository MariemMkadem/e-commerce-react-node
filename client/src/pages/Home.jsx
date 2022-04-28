import React from "react";
import Announcement from "../components/announcement";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Products from "../components/product/Products";
import Slider from "../components/slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
