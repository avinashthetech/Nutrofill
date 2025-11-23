import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";   // ⭐ SEO import

const Footer = () => {
  return (
    <>
      {/* ⭐ SEO For Footer / Business Data */}
      <Helmet>
        <title>Nutrofill | Healthy Atta, Dal & Whole Grains – Shop Quality Food Products</title>

        <meta
          name="description"
          content="Nutrofill provides premium quality atta, dal, pulses, and grains processed with safety & purity standards. Order bulk or retail with fast delivery."
        />
        <meta
          name="keywords"
          content="Nutrofill, Atta, Dal, Healthy Grains, FSSAI certified products, bulk grocery supplier, Nutrofill Bengaluru"
        />
        <link rel="canonical" href="https://www.nutrofill.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Nutrofill – Premium Atta & Dal Products" />
        <meta
          property="og:description"
          content="Buy certified high-quality atta & dal with bulk and wholesale availability."
        />
        <meta property="og:type" content="organization" />
        <meta property="og:url" content="https://www.nutrofill.com/" />

        {/* ⭐ Organization Schema + Social Profiles */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nutrofill",
            "url": "https://www.nutrofill.com/",
            "logo": "https://www.nutrofill.com/logo.webp",
            "sameAs": [
              "https://www.instagram.com/nutrofill/",
              "https://www.facebook.com/nutrofill/",
              "https://twitter.com/nutrofill",
              "https://www.youtube.com/nutrofill"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "telephone": "+91 9451205866",
              "email": "nutrofill@gmail.com"
            }
          }
          `}
        </script>
      </Helmet>

      <footer className="nutro-footer">
        <div className="footer-main">

          {/* Left Section */}
          <div className="footer-left">
            <img
              src="/src/assets/logo.webp"
              alt="Nutrofill Logo"
              className="footer-logo"
            />
            <p className="fssai">Lic. No. 12723030000084</p>
          </div>

          {/* Center Section */}
          <div className="footer-center">
            <h3>Nutrofill in Your Inbox</h3>
            <div className="email-box">
              <input type="email" placeholder="Enter your Email ID" />
              <button>Register Now</button>
            </div>
            <p className="privacy-text">
              By clicking <b>“Register Now”</b>, you agree to our{" "}
              <a href="#privacy">Privacy Policy</a> and to receive marketing emails
              from the Nutrofill community.
            </p>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <div className="link-column">
              <a href="/terms">Terms of Use</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/sitemap">Sitemap</a>
            </div>
            <div className="link-column">
              <a href="/products">Our Products</a>
              <a href="/contact">Contact Us</a>
              <a href="/about">About Us</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="bottom-left">© 2025 Nutrofill. All Rights Reserved.</div>
          <div className="bottom-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
