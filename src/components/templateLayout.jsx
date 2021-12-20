import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import ToMenuIcon from "../assets/svg/inputIcons/toMenu";
import useDataContext from "../lib/useDataContext";
import clsx from "clsx";
import Div100vh from "react-div-100vh";

const TemplateLayout = ({ children }) => {
  const {
    state: { templateScale },
  } = useDataContext();
  return (
    <Layout>
      <Div100vh>
        <div
          className={clsx(
            !templateScale
              ? "bg-white w-screen h-screen fixed z-50 transition-all ease-in-out duration-75"
              : "hidden bg-transparent"
          )}
        ></div>
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
      </Div100vh>
    </Layout>
  );
};

export default TemplateLayout;
