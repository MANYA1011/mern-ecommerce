import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policies"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Information Collected: Description of the types of information collected from users, such as personal information (name, address, email), payment details, and browsing behavior.</p>
          <p>How Information is Used: Explanation of how the collected information is used, whether it's for order processing, customer service, marketing, or other purposes.</p>
          <p>Third-Party Sharing: Disclosure of whether and how the website shares user information with third parties, such as payment processors or advertising partners.</p>
          <p>Security Measures: Information about the security measures in place to protect user data, including encryption and secure data storage.</p>
          </div>
      </div>
    </Layout>
  );
};

export default Policy;