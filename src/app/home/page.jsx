"use client";

import ExamCategory from "../component/ExamCategory";
import ExcellanceStats from "../component/ExcellanceStats";
import Footer from "../component/Footer";
import FreeTrialBanner from "../component/FreeTrailBanner";
import Header from "../component/Header";
import HeaderSection from "../component/HeaderSection";
import HomepageStats from "../component/HomepageStats";
import Testimonial from "../component/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderSection />
      <HomepageStats />
      <ExamCategory />
      <FreeTrialBanner />
      <ExcellanceStats />
      <Testimonial />
      <Footer />
    </>
  );
}
