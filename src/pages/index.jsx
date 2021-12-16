import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import { templates } from "../config/vars";

const PageIndex = () => (
  <Layout>
    <div className="container px-2 grid grid-cols-12 gap-2  font-headline">
      <div className="col-span-full text-center">
        <h1 className="text-xl text-green uppercase leading-tight italic py-3">
          Sharepic Generator <br /> linksjugend ['solid]
        </h1>
      </div>
      {templates.map(({ link, name, thumbnailSrc }) => (
        <div className="col-span-6 sm:col-span-4 text-center">
          <Link
            to={link}
            className="no-underline hover:text-green max-w-full flex flex-col md:flex-col-reverse "
          >
            <img
              src={thumbnailSrc}
              alt={name}
              className="hover:opacity-75 transition-all ease-in-out duration-200 w-full"
            />
            <span
              className="block text-base text-white uppercase pb-1 leading-tight mt-1"
              dangerouslySetInnerHTML={{ __html: name }}
            />
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

export default PageIndex;
