import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import { templates } from "../config/vars";

export default () => {
  console.log(templates);
  return (
    <Layout>
      <div className="bg-darkGray font-headline leading-normal">
        <div className="container py-2">
          <div className="mx-auto grid grid-cols-12 col-gap-4 row-gap-2 py-5">
            <div className="col-span-12 text-center">
              <h1 className="text-lg text-turquoise uppercase leading-tight">
                Sharepic Generator <br /> linksjugend ['solid]
              </h1>
            </div>
            {templates.map((template) => (
              <div className="col-span-12 sm:col-span-4 text-center">
                <Link
                  to={template.link}
                  className="no-underline hover:underline"
                >
                  <span className="block text-base text-white uppercase pb-1">
                    {template.name}
                  </span>
                  <img
                    src={template.thumbnailSrc}
                    alt={template.name}
                    className="hover:opacity-75 transition-all ease-in-out duration-200"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
