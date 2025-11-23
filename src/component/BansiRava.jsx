import React, { useState } from "react";
import { motion } from "framer-motion";
import "./BansiRava.css";
import moongImg from "../assets/Moong.png"; 
import bannerImg from "../assets/banner.jpg";
import Footer from "../component/Footer.jsx";
import { Helmet } from "react-helmet-async";   // ⭐ SEO IMPORT

const MoongDal = () => {
  const [packSize, setPackSize] = useState("500gm");
  const [showNutrition, setShowNutrition] = useState(false);

  const nutritionData = [
    { label: "Energy (kcal)", value: "330" },
    { label: "Protein (g)", value: "24" },
    { label: "Carbohydrates (g)", value: "58" },
    { label: "Dietary Fibre (g)", value: "8" },
    { label: "Total Fat (g)", value: "1" },
    { label: "Iron (mg)", value: "4" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* ⭐ PRODUCT SEO META TAGS */}
      <Helmet>
        <title>Moong Dal | High Protein Premium Quality Pulses | Nutrofill</title>

        <meta
          name="description"
          content="Buy Nutrofill Moong Dal – high in protein, easy to digest, rich in vitamins, perfect for daily meals. Available in 500gm, 1kg & 5kg pack sizes."
        />
        <meta
          name="keywords"
          content="Moong Dal, Nutrofill Moong Dal, High Protein Dal, Healthy pulses, Buy Dal Online, Best Moong Dal"
        />

        <link rel="canonical" href="https://www.nutrofill.com/products/moong-dal" />

        {/* Open Graph Social Preview */}
        <meta property="og:title" content="Nutrofill Moong Dal – Premium Quality Protein-Rich Dal" />
        <meta
          property="og:description"
          content="Rich in Protein & Nutrients. Available in 500gm / 1kg / 5kg. Order now!"
        />
        <meta property="og:image" content={moongImg} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.nutrofill.com/products/moong-dal" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutrofill Moong Dal – Pure & High Protein" />
        <meta name="twitter:image" content={moongImg} />

        {/* ⭐ Product Rich Result Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Nutrofill Moong Dal",
            "image": "${moongImg}",
            "description": "High protein Moong Dal, easy to digest, nutritious and ideal for daily healthy meals.",
            "brand": { "@type": "Brand", "name": "Nutrofill" },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "60",
              "highPrice": "350",
              "availability": "https://schema.org/InStock",
              "url": "https://www.nutrofill.com/products/moong-dal"
            }
          }
        `}
        </script>
      </Helmet>

      <motion.div className="bansi-page" initial="hidden" animate="visible" variants={fadeUp}>
        <motion.div className="bansi-container" variants={fadeUp}>

          {/* Product Image */}
          <motion.div className="bansi-image" variants={zoomIn}>
            <img src={moongImg} alt="Nutrofill Moong Dal High Protein Pulses" />
          </motion.div>

          {/* Product Info */}
          <motion.div className="bansi-info" variants={fadeUp}>
            <motion.h1 className="bansi-title" variants={fadeUp}>
              Moong Dal
            </motion.h1>

            <motion.p className="bansi-desc" variants={fadeUp}>
              Moong Dal is known for its light texture, easy digestion, and high nutritional value.
              Rich in protein and essential vitamins, it supports muscle health and provides steady energy.
              Naturally low in fat and gentle on the stomach, making it perfect for daily meals.
            </motion.p>

            {/* Pack Sizes */}
            <div className="bansi-pack">
              <h3>Available Pack Sizes:</h3>
              <div className="pack-buttons">
                {["500gm", "1kg", "5kg"].map((size) => (
                  <motion.button
                    key={size}
                    className={`pack-btn ${packSize === size ? "active" : ""}`}
                    onClick={() => setPackSize(size)}
                    whileTap={{ scale: 0.9 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Nutrition */}
            <div className="bansi-nutrition">
              <motion.h3
                className="nutrition-toggle"
                onClick={() => setShowNutrition(!showNutrition)}
                whileHover={{ scale: 1.02 }}
              >
                🍽️ Nutritional Information per 100gm (Click to {showNutrition ? "Hide" : "View"})
              </motion.h3>

              <motion.div
                className={`nutrition-grid-wrapper ${showNutrition ? "show" : ""}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: showNutrition ? "auto" : 0,
                  opacity: showNutrition ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="nutrition-grid">
                  {nutritionData.map((item) => (
                    <motion.div
                      key={item.label}
                      className="nutrition-box"
                      variants={fadeUp}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="nutrition-value">{item.value}</p>
                      <p className="nutrition-label">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Banner */}
        <motion.div className="banner" variants={zoomIn} initial="hidden" whileInView="visible">
          <img src={bannerImg} alt="Nutrofill Banner" />
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default MoongDal;
