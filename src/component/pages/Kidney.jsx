import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Kidney.css";
import kidneyImg from "../../assets/Kidney beans Packet.png";
import bannerImg from "../../assets/banner.jpg";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";   // ⭐ SEO Import

const Kidney = () => {
  const [packSize, setPackSize] = useState("500g");
  const [showNutrition, setShowNutrition] = useState(false);

  const nutritionData = [
    { label: "Energy (kcal)", value: "333" },
    { label: "Protein (g)", value: "24" },
    { label: "Carbohydrates (g)", value: "60" },
    { label: "Dietary Fibre (g)", value: "15" },
    { label: "Total Fat (g)", value: "1.5" },
    { label: "Iron (mg)", value: "5" }
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
      {/* ⭐ PRODUCT PAGE SEO */}
      <Helmet>
        <title>Red Kidney Beans (Rajma) | High Protein Premium Beans | Nutrofill</title>

        <meta
          name="description"
          content="Nutrofill Red Kidney Beans (Rajma) are rich in protein, fiber, and essential minerals. Ideal for healthy curries and Indian meals. Available in 500g, 1kg & 5kg packs."
        />
        <meta
          name="keywords"
          content="Rajma, Red Kidney Beans, Buy Rajma Online, Nutrofill Rajma, High Protein Beans, Healthy Vegetarian Protein, Premium Pulses"
        />

        <link rel="canonical" href="https://www.nutrofill.com/products/red-kidney-beans" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="Nutrofill Red Kidney Beans – Premium Rajma" />
        <meta
          property="og:description"
          content="Rich in Protein & Fiber. Perfect for Rajma Curry & healthy meals."
        />
        <meta property="og:image" content={kidneyImg} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.nutrofill.com/products/red-kidney-beans" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Red Kidney Beans | Nutrofill" />
        <meta name="twitter:image" content={kidneyImg} />

        {/* ⭐ Product Structured Data Rich Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Nutrofill Red Kidney Beans (Rajma)",
              "image": "${kidneyImg}",
              "description": "High quality Red Kidney Beans rich in protein and fiber. Ideal for nutritious Indian meals.",
              "brand": { "@type": "Brand", "name": "Nutrofill" },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "80",
                "highPrice": "450",
                "availability": "https://schema.org/InStock",
                "url": "https://www.nutrofill.com/products/red-kidney-beans"
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div className="bansi-page" initial="hidden" animate="visible" variants={fadeUp}>
        <motion.div className="bansi-container" variants={fadeUp}>

          {/* Product Image */}
          <motion.div className="bansi-image" variants={zoomIn}>
            <img src={kidneyImg} alt="Nutrofill Red Kidney Beans Rajma Premium Quality" />
          </motion.div>

          {/* Product Info */}
          <motion.div className="bansi-info" variants={fadeUp}>
            <motion.h1 className="bansi-title" variants={fadeUp}>
              Red Kidney Beans (Rajma)
            </motion.h1>

            <motion.p className="bansi-desc" variants={fadeUp}>
              Our premium Red Kidney Beans (Rajma) are rich in protein, fiber, and essential minerals. 
              Carefully sourced and hygienically packed, they are ideal for preparing delicious curries, salads,
              and wholesome meals. Rajma is a great plant-based protein source for a balanced diet.
            </motion.p>

            {/* Pack Sizes */}
            <div className="bansi-pack">
              <h3>Available Pack Sizes:</h3>
              <div className="pack-buttons">
                {["500g", "1kg", "5kg"].map((size) => (
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

export default Kidney;
