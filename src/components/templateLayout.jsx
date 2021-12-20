import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import ToMenuIcon from "../assets/svg/inputIcons/toMenu";
import useDataContext from "../lib/useDataContext";
import clsx from "clsx";

const TemplateLayout = ({ children }) => {
  const {
    state: { templateScale },
  } = useDataContext();

  return (
    <Layout>
      <div
        style={{
          minHeight: typeof window !== "undefined" ? window.innerHeight : 0,
        }}
      >
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
      </div>
    </Layout>
  );
};

export default TemplateLayout;
