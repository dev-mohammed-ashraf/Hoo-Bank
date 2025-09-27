"use client"

import Advantages from "@/components/advantages/Advantages";
import CardDetails from "@/components/card_details/CardDetails";
import Comments from "@/components/comments/Comments";
import Description from "@/components/description/Description";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PartenerShip from "@/components/partenership/PartenerShip";
import Statistics from "@/components/statistics/Statistics";
import Try from "@/components/try/Try";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, [])
  return (
    <div>
      <Header />
      <Statistics />
      <Description />
      <Advantages />
      <CardDetails />
      <Comments />
      <PartenerShip />
      <Try />
      <Footer />
    </div>
  );
}

export default Home;
