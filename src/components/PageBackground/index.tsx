import React from "react";
import { Base, DecorativeBox } from "../../shared/components";

function BasePage({ children }: { children?: any }) {
  return (
    <Base>
      <DecorativeBox
        transforms={{ dx: "-20rem", dy: "-10rem" }}
      ></DecorativeBox>
      <DecorativeBox
        transforms={{ dx: "-2rem", dy: "-30rem", scale: "1.5" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ top: "-6rem", left: "20rem" }}
        transforms={{ scale: "0.3" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ top: "-10rem", left: "30rem" }}
        transforms={{ scale: "0.2" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ top: "-15rem", right: "-10rem" }}
        transforms={{ scale: "0.45" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ top: "40%" }}
        transforms={{ dx: "-65%", dy: "-50%", scale: "0.45" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ top: "20%", left: "20%" }}
        transforms={{ scale: "0.12" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ top: "30%", left: "55%" }}
        transforms={{ scale: "0.09" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ top: "32%", left: "58%" }}
        transforms={{ scale: "0.15" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ bottom: "22%", left: "15%" }}
        transforms={{ scale: "0.15" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ bottom: "0", right: "0" }}
        transforms={{ dx: "30%", dy: "70%", scale: "2" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ bottom: "0", right: "0" }}
        transforms={{ dx: "-60%", dy: "35%", scale: "0.4" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ bottom: "0", right: "0" }}
        transforms={{ dx: "-60%", dy: "140%", scale: "2" }}
      ></DecorativeBox>
      <DecorativeBox
        position={{ bottom: "0", right: "0" }}
        transforms={{ dx: "110%", dy: "20%", scale: "1.6" }}
      ></DecorativeBox>
      {children}
    </Base>
  );
}

export default BasePage;
