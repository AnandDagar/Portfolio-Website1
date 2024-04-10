import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousal from "../Components/Carousal";
export default function Home() {
return (
<>
<div>
   <Navbar />
   <div><Carousal/></div>

<div className="" style={{"width":"100%", "margin":"auto"}}></div>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>



   <Footer />
</div>
</>
);
}