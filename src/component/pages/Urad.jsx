import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Urad.css";
import uradImg from "../../assets/UradPacket.png";
import bannerImg from "../../assets/banner.jpg";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";  // ⭐ SEO Import

const Urad = () => {
  const [packSize, setPackSize] = useState("500g");
  const [showNutrition, setShowNutrition] = useState(false);

  const nutritionData = [
    { label: "Energy (kcal)", value: "347" },
    { label: "Protein (g)", value: "25" },
    { label: "Carbohydrates (g)", value: "59" },
    { label: "Dietary Fibre (g)", value: "18" },
    { label: "Total Fat (g)", value: "1.5" },
    { label: "Iron (mg)", value: "4.4" },
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
        <title>Urad Dal | Premium Protein-Rich Black Gram | Nutrofill</title>

        <meta
          name="description"
          content="Nutrofill Urad Dal is premium quality black gram, rich in protein, fiber, and minerals—perfect for Dal Makhani, Idli, Vada, Dosa & traditional Indian dishes."
        />
        <meta
          name="keywords"
          content="Urad Dal, Black Gram Dal, Nutrofill Urad Dal, Protein Rich Pulses, Buy Urad Online, Best Dal Brand, Dal Makhani Dal"
        />

        <link rel="canonical" href="https://www.nutrofill.com/products/urad-dal" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="Nutrofill Urad Dal – Premium Protein-Rich Black Gram" />
        <meta
          property="og:description"
          content="Ideal for Dal Makhani, Idli, Dosa & Vada. High protein & fibre. Fresh & pure."
        />
        <meta property="og:image" content={uradImg} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.nutrofill.com/products/urad-dal" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutrofill Urad Dal – Pure & High Protein Pulses" />
        <meta name="twitter:image" content={uradImg} />

        {/* ⭐ Product Rich Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Nutrofill Urad Dal",
            "image": "${uradImg}",
            "description": "Premium quality Urad Dal, rich in protein and fiber. Ideal for Dal Makhani, Idli, Dosa & traditional dishes.",
            "brand": { "@type": "Brand", "name": "Nutrofill" },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "65",
              "highPrice": "380",
              "availability": "https://schema.org/InStock",
              "url": "https://www.nutrofill.com/products/urad-dal"
            }
          }
        `}
        </script>
      </Helmet>

      <motion.div className="bansi-page" initial="hidden" animate="visible" variants={fadeUp}>
        <motion.div className="bansi-container" variants={fadeUp}>

          {/* Product Image */}
          <motion.div className="bansi-image" variants={zoomIn}>
            <img src={uradImg} alt="Nutrofill Premium Urad Dal" />
          </motion.div>

          {/* Product Info */}
          <motion.div className="bansi-info" variants={fadeUp}>
            <motion.h1 className="bansi-title" variants={fadeUp}>
              Urad Dal
            </motion.h1>

            <motion.p className="bansi-desc" variants={fadeUp}>
              Nutrofill Urad Dal is made from 100% premium quality black gram lentils. 
              Rich in protein, dietary fiber, and essential minerals, it is perfect 
              for making Dal Makhani, Idli, Dosa, Vada, and many traditional Indian dishes. 
              A healthy choice that brings authentic flavor and nutrition to your meals.
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

            {/* Nutrition Section */}
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

export default Urad;
