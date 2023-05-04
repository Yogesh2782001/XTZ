import React from "react";
import "./Service.css"
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
    <div className="service-container">
      <h1 className='gapi'>SERVICES WE PROVIDE </h1>
    <h5 > We are a logistics company that offers a variety of services to its clients. Some of the services provided by our company include Transportation, warehousing, order processing, inventory management, customs brokerage, packagaing, freight forwarding and supply chain management solutions. </h5>    

    <div className="wrapper">
      <Card
        img="https://dadelift.com/wp-content/uploads/2016/03/warehouse.jpg"
        title="WAREHOUSING"
        description="Our state of the art Centralized warehouses in 6 major metro cities provide Nationwide services"
      />

      <Card
        img="https://www.devprojournal.com/wp-content/uploads/2020/07/Transportation-and-distribution.jpg"
        title="TRANSPORTATION"
        description="Our delivery partners provide last mile delivery services across thousands of locations across India"
      />

      <Card
        img="https://th.bing.com/th/id/R.04e86cd2e21b6ecf03743785bc9253a3?rik=zEZkRXENbAaWnw&riu=http%3a%2f%2faikya.net%2fwp-content%2fuploads%2f2019%2f04%2fGPStracking.jpg&ehk=lWa9b%2bj5YNVSJ2RCablgqFp8bruwuHj7QVCLUdjNS70%3d&risl=&pid=ImgRaw&r=0" className="image"
        title="24 X 7 ASSISTANCE"
        description="We provide live tracking of your goods with continous support via Call and Email support"
      />
    </div>
    </div>
    </>
  )
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <Link className="link1" to="/Contact">
          <button className="card__btn">Contact Us</button>
      </Link>
    </div>
  );
}

export default Service;