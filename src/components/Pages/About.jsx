import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <h1>About this Project</h1>
      <p>A react app to leave feedback for a product or a service.</p>
      <p>Version: 3.0.0</p>
      <br></br>
      <Link to="/">Back to home</Link>
    </Card>
  );
}

export default About;
