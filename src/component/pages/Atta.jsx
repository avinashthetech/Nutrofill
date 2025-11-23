import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Atta.css";
import attaImg from "../../assets/attap.png";
import bannerImg from "../../assets/banner.jpg";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";  // ⭐ SEO IMPORT

const Atta = () => {
  const [packSize, setPackSize] = useState("1kg");
  const [showNutrition, setShowNutrition] = useState(false);

  const nutritionData = [
    { label: "Energy (kcal)", value: "364" },
    { label: "Protein (g)", value: "12" },
    { label: "Carbohydrates (g)", value: "76" },
    { label: "Dietary Fibre (g)", value: "10" },
    { label: "Total Fat (g)", value: "2" },
    { label: "Iron (mg)", value: "3" }
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
      {/* ⭐ SEO For Atta Product Page */}
      <Helmet>
        <title>Whole Wheat Atta | Premium MP Sharbati Stone-Ground Atta | Nutrofill</title>

        <meta
          name="description"
          content="Nutrofill Whole Wheat Atta is made from premium MP Sharbati wheat grains, stone-ground to retain nutrients. Rich in fiber, protein & minerals for soft, healthy rotis."
        />
        <meta
          name="keywords"
          content="Whole Wheat Atta, MP Sharbati Atta, Stone Ground Atta, Nutrofill Atta, Buy Atta Online, Healthy Flour, Soft Rotis"
        />

        <link rel="canonical" href="https://www.nutrofill.com/products/whole-wheat-atta" />

        {/* Open Graph */}
        <meta property="og:title" content="Nutrofill Whole Wheat Atta – Premium MP Sharbati Stone Ground" />
        <meta
          property="og:description"
          content="Rich in fibre & nutrients. Perfect for soft rotis & healthy meals."
        />
        <meta property="og:image" content={attaImg} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.nutrofill.com/products/whole-wheat-atta" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutrofill Whole Wheat Atta — Premium MP Sharbati Wheat" />
        <meta name="twitter:image" content={attaImg} />

        {/* ⭐ Product Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Nutrofill Whole Wheat Atta",
              "image": "${attaImg}",
              "description": "Premium Whole Wheat Flour stone-ground for maximum nutrition and superior softness. Made from MP Sharbati wheat.",
              "brand": { "@type": "Brand", "name": "Nutrofill" },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "55",
                "highPrice": "480",
                "availability": "https://schema.org/InStock",
                "url": "https://www.nutrofill.com/products/whole-wheat-atta"
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div className="bansi-page" initial="hidden" animate="visible" variants={fadeUp}>
        <motion.div className="bansi-container" variants={fadeUp}>

          {/* Product Image */}
          <motion.div className="bansi-image" variants={zoomIn}>
            <img src={attaImg} alt="Nutrofill Whole Wheat Atta MP Sharbati" />
          </motion.div>

          {/* Product Info */}
          <motion.div className="bansi-info" variants={fadeUp}>
            <motion.h1 className="bansi-title" variants={fadeUp}>
              Whole Wheat Atta
            </motion.h1>

            <motion.p className="bansi-desc" variants={fadeUp}>
              Our Whole Wheat Atta is made from 100% premium quality wheat grains, 
              stone-ground to preserve natural nutrients and flavor. It is rich in fiber, 
              protein, and essential minerals, providing wholesome nutrition.
              Perfect for soft rotis, fluffy parathas, and a healthy lifestyle.
            </motion.p>

            {/* Pack Sizes */}
            <div className="bansi-pack">
              <h3>Available Pack Sizes:</h3>
              <div className="pack-buttons">
                {["1kg", "5kg", "10kg"].map((size) => (
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

export default Atta;
