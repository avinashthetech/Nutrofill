import React from "react";
import "./Products.css";

import atta from "../assets/atta-removebg-preview.png";
import mixed from "../assets/mixed-removebg-preview.png";
import channa from "../assets/channa-removebg-preview.png";
import kidney from "../assets/kidney-removebg-preview.png"; 
import moong from "../assets/moongdal-removebg-preview.png";
import urad from "../assets/urad-removebg-preview.png";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// ⭐ Product Data
const products = [
  { id: 1, name: "Atta", img: atta, link: "/atta" },
  { id: 2, name: "Mixed Dal", img: mixed, link: "/mixed" },
  { id: 3, name: "Channa Dal", img: channa, link: "/channa" },
  { id: 4, name: "Kidney Beans", img: kidney, link: "/kidney" },
  { id: 5, name: "Moong Dal", img: moong, link: "/moong" },  // add route in App.js
  { id: 6, name: "Urad Dal", img: urad, link: "/urad" },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ⭐ SEO Helmet */}
      <Helmet>
        <title>Nutrofill Products – Atta, Dal, Pulses & Grains</title>
        <meta
          name="description"
          content="Explore the premium Nutrofill food selection including Atta, Channa Dal, Moong Dal, Urad Dal, Mixed Dal, and Kidney Beans. 100% fresh, pure and healthy products."
        />
        <meta
          name="keywords"
          content="Nutrofill products, Atta, Dal, Moong Dal, Urad Dal, Channa Dal, Pulses, Grocery items, Healthy food"
        />
        <link rel="canonical" href="https://nutrofill.com/products" />
      </Helmet>

      <section className="products-section">

        {/* Heading */}
        <motion.h2
          className="products-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Product Range
        </motion.h2>

        <motion.p
          className="products-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Choose from our finest healthy food category
        </motion.p>

        {/* Product Cards */}
        <div className="products-container">
          {products.map((item) => (
            <motion.div
              key={item.id}
              className="product-card"
              onClick={() => navigate(item.link)}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <motion.div className="product-image" whileHover={{ rotate: 3 }}>
                <img src={item.img} alt={item.name} />
              </motion.div>

              <motion.h3 whileHover={{ color: "#d88a07" }}>
                {item.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
