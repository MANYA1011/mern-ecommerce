import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%"}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            This App is an effort to provide best products just at the doorstep of our clients.
            We prioritize the comfort and quality of purchase of our customers. Our goal is to 
            fulfill your needs. Provide us with your orders for anything and everything and we'll 
            be right at your place with your product!
            Happy Shopping!!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;