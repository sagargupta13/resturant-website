import React from "react";
import Layout from "../components/Layout/Layout";

import { Link } from "react-router-dom";
import Banner_img from '../images/banner_img.jpg'
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner_img})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur 
      
          </p>
          <Link to={"/menu"} >
           
            <button>
              Order Now
            </button>
            
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
