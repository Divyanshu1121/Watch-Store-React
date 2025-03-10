import React from "react";
import "./Home.css";
import homeImage from "/images/home-banner.webp";

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero">
                <img src={homeImage} alt="Luxury Watches" />
                <div className="hero-content">
                    <h1>Welcome to Our Watch Store</h1>
                    <p>Discover an exclusive collection of premium watches.</p>
                </div>
            </div>

            <section className="about-us">
                <h2>About Us</h2>
                <p>
                    We offer a curated selection of luxury and designer watches, blending
                    elegance with precision. Every piece tells a story of craftsmanship.
                </p>
            </section>

            <section className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <div className="features">
                    <div className="feature">
                        <h3>🌟 Premium Quality</h3>
                        <p>Only the finest craftsmanship and materials.</p>
                    </div>
                    <div className="feature">
                        <h3>🚀 Fast Delivery</h3>
                        <p>Quick and secure shipping to your doorstep.</p>
                    </div>
                    <div className="feature">
                        <h3>🔒 Secure Payments</h3>
                        <p>Safe transactions with multiple payment options.</p>
                    </div>
                </div>
            </section>

            <section className="customer-reviews">
                <h2>What Our Customers Say</h2>
                <div className="review">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>"Absolutely love my new watch! The quality is amazing."</p>
                    <h4>- Sarah J.</h4>
                </div>
                <div className="review">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>"Excellent service and super-fast delivery!"</p>
                    <h4>- Mark W.</h4>
                </div>
            </section>

            <section className="newsletter">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for exclusive offers.</p>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </section>
        </div>
    );
};

export default Home;
