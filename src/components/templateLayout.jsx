import Layout from "../components/layout";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import ToMenuIcon from "../assets/svg/inputIcons/toMenu";
import useDataContext from "../lib/useDataContext";
import clsx from "clsx";
import LogoArrow from "../assets/svg/logo-text";

const TemplateLayout = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    typeof window !== "undefined" && setWindowHeight(window?.innerHeight);
  }, []);

  const {
    state: { templateScale },
  } = useDataContext();

  return (
    <Layout>
      <div
        style={{
          minHeight: windowHeight,
        }}
      >
        <div
          className={clsx(
            !templateScale
              ? "bg-white w-screen h-screen fixed z-50 transition-all ease-in-out duration-75 flex flex-col items-center justify-center"
              : "hidden bg-transparent"
          )}
        >
          <div className="pulse">
            <LogoArrow fillColor="#C9CEFF" />
          </div>
          <h2 className="font-headline italic text-xl">Lade Sharepic</h2>
        </div>
        <div className="container grid-12">
          <div className="col-span-12">
            <Link
              to="/"
              className="hover:text-green hover:fill-green uppercase text-white font-headline italic flex items-center gap-1 m-1"
            >
              <ToMenuIcon /> zurück zur Übersicht
            </Link>
          </div>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default TemplateLayout;
