import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import "./Header.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMenu />
      <Breadcrumbs />
    </header>
  );
}
