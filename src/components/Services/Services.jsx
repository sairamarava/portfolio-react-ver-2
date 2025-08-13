import React from "react";
import ServiceCard from "./ServiceCard";
import { services as servicesData } from "../../data/services";

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="spline-background">
        <spline-viewer url="https://prod.spline.design/JKYKVf-OhoPq9uop/scene.splinecode"></spline-viewer>
      </div>

      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">
          Specialized solutions tailored to your needs with expertise in
          multiple domains
        </p>

        <div className="services-grid" style={{ padding: "30px" }}>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
