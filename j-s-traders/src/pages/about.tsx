import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About J.S Traders | Luxury Chair Specialists</title>
        <meta
          name="description"
          content="Learn about J.S Traders Chair Factory, our craftsmanship standards, and our luxury ergonomic seating mission in Nepal."
        />
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our chair company, where luxury meets comfort. Our mission is to create high-quality, stylish chairs that enhance your living spaces and provide unparalleled comfort.
      </p>
      <p className="text-lg mb-4">
        With a commitment to craftsmanship and sustainability, we source the finest materials and employ skilled artisans to bring our designs to life. Our chairs are not just furniture; they are a statement of elegance and sophistication.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Values</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Quality: We prioritize the highest standards in our products.</li>
        <li>Innovation: We embrace creativity and new ideas in design.</li>
        <li>Sustainability: We are dedicated to environmentally friendly practices.</li>
        <li>Customer Satisfaction: We strive to exceed our customers' expectations.</li>
      </ul>
      <p className="text-lg">
        Thank you for choosing us to be a part of your home. We look forward to helping you find the perfect chair that fits your style and needs.
      </p>
      </div>
    </>
  );
};

export default About;