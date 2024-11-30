import React from "react";
import FooterMain from "./FooterMain/FooterMain";
import FooterBottom from "./FooterBottom/FooterBottom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <FooterMain />
      <FooterBottom />
    </footer>
  );
}
