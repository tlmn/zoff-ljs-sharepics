import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import { templates } from "../config/vars";

const PageIndex = () => (
  <Layout>
    <div className="font-headline container grid grid-cols-12 gap-2 px-2">
      <div className="text-center col-span-full">
        <h1 className="text-md md:text-xl text-green uppercase leading-tight italic py-3">
          Sharepic Generator <br /> linksjugend ['solid]
        </h1>
      </div>
      {templates.map(({ link, name, thumbnailSrc }) => (
        <div className="text-center col-span-6 sm:col-span-4" key={name}>
          <Link
            to={link}
            className="no-underline hover:text-green max-w-full flex flex-col md:flex-col-reverse "
          >
            <img
              src={thumbnailSrc}
              alt={name}
              className="w-full hover:opacity-75 transition-all ease-in-out duration-200"
            />
            <span
              className="text-base text-white uppercase block leading-tight pb-1 mt-1"
              dangerouslySetInnerHTML={{ __html: name }}
            />
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

export default PageIndex;
