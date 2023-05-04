import React from 'react';
import "../App.css";
import "./FrontPage.css";

function FrontPage() {
  return (
    <>
    <div className='home-container'>
      <video src = "\video\video3.mp4" autoPlay loop muted />
      <h1>CONNECTING YOUR BUSINESS</h1>
      <h1>ALL OVER INDIA</h1>
    </div>
    <div className="about">
          <h3>One of India's Leading Integrated Express Logistic Provider</h3>
          <p>Bharath Xpress is a well-established logistics company based in India.</p>
          <p> With a strong focus on customer satisfaction, they offer a wide range of logistics services including transportation, warehousing, and distribution.</p>
          <p>Bharath Xpress uses the latest technology and equipment to ensure that all shipments are delivered on time and in perfect condition.</p>
    </div>
    <div className='milestone-container'>
      <h2>OUR MILESTONE</h2>
       <ul className="milestone">
        <li className="milestone-items">
          <h2>6</h2>
          <p>Operating Warehouses</p>
          </li>
        <li className="milestone-items">
          <h2>10000+</h2>
          <p>Deliveries</p>
          </li>
        <li className="milestone-items">
          <h2>1500+</h2>
          <p>Vehicles</p>
          </li>
      </ul>

      <ul className="milestone2">
        <li className="milestone-items2" id='population'>
          <h2>96%</h2>
          <p>Indian Population Covered</p>
          </li>
        <li className="milestone-items2">
          <h2>2.2 M sq.ft</h2>
          <p>Area under management</p>
          </li>
  </ul>
    </div>
    </>
  );
}

export default FrontPage;