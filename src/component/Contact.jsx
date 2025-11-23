import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";  // ⭐ SEO Import

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_j9knhcv",
      "template_4upy8bf",
      e.target,
      "He6_S6S0xik3uL-ZH"
    )
    .then(
      () => toast.success("Message sent successfully! 🎉"),
      (error) => toast.error("Failed to send message ❌: " + error.text)
    );

  e.target.reset();
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <>
      {/* ⭐ SEO For Contact Page */}
      <Helmet>
        <title>Contact Nutrofill | Customer Support & Bulk Order Enquiries</title>
        <meta
          name="description"
          content="Contact Nutrofill for any queries related to orders, bulk booking, business inquiries or product information. We're here to help you."
        />
        <meta
          name="keywords"
          content="Nutrofill Contact, Nutrofill Support, Bulk Order Atta, Customer Care, Nutrofill Email, Nutrofill Phone"
        />

        <link rel="canonical" href="https://www.nutrofill.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Nutrofill | Support & Business Enquiries" />
        <meta
          property="og:description"
          content="Reach out to Nutrofill for customer support, partnership and wholesale bulk order enquiries."
        />
        <meta property="og:url" content="https://www.nutrofill.com/contact" />
        <meta property="og:type" content="website" />

        {/* Local Business Schema (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nutrofill",
            "url": "https://www.nutrofill.com/contact",
            "telephone": "+91 9451205866",
            "email": "nutrofill@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "21st Main Road, R.K Colony, JP Nagar",
              "addressLocality": "Bengaluru",
              "postalCode": "560078",
              "addressCountry": "IN"
            }
          }
        `}
        </script>
      </Helmet>

      <section className="contact-section" id="contact">
        <a
          href="https://wa.me/919451205866"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>

        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether you have a question about our products,
            services, or bulk orders — we’re here to assist you.
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            {[
              { icon: <FaPhoneAlt />, title: "Phone", value: "+91 9451 20 5866" },
              { icon: <FaEnvelope />, title: "Email", value: "nutrofill@gmail.com" },
              {
                icon: <FaMapMarkerAlt />,
                title: "Head Office",
                value: "21st Main Road, R.K Colony, JP Nagar, Bengaluru - 560078",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="info-box"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={sendEmail}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            <h2>Send Us a Message</h2>

            <motion.input name="user_name" type="text" placeholder="Your Name" required whileFocus={{ scale: 1.02 }} />
            <motion.input name="user_email" type="email" placeholder="Your Email" required whileFocus={{ scale: 1.02 }} />
            <motion.input name="subject" type="text" placeholder="Subject" whileFocus={{ scale: 1.02 }} />
            <motion.textarea name="message" placeholder="Your Message" rows="5" required whileFocus={{ scale: 1.02 }} />

            <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Send Message
            </motion.button>
          </motion.form>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </>
  );
};

export default Contact;
