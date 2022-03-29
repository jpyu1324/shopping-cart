import React from "react";
import Layout from "@src/components/Layout";

const About = () => {
  return (
    <Layout title="About" description="This is the About page">
      <div className="text-center mt-5">
        <h1>About</h1>
        <p>This project was built for practice purposes by React.</p>
      </div>
    </Layout>
  );
};

export default About;
