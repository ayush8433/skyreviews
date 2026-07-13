import type { Metadata } from "next";
import RoiCalculatorClient from "./RoiCalculatorClient";

export const metadata: Metadata = {
  title: "Tech Bootcamp ROI Calculator & Payback Estimator | SkyReviews",
  description: "Calculate your potential salary lift, payback timeframe, and first-year return on investment before joining a software academy.",
};

export default function RoiCalculatorPage() {
  return <RoiCalculatorClient />;
}
