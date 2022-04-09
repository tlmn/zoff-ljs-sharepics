import React from "react";
import DraggableBG from "../../components/inputs/draggableBg";
import TemplateWrapper from "../../components/templateWrapper";
import {
  formatEmojis,
  getPositionClassName,
  getPrimaryColor,
} from "../../lib/lib";
import clsx from "clsx";
import useDataContext from "../../lib/useDataContext";

const Template = () => {
  const { state } = useDataContext();
  const {
    data: { category, body, author, image },
  } = state.slides[0];

  return (
    <TemplateWrapper bgColor="#fff">
      <div className="p-4 flex flex-col h-full">
        <span
          className="mb-3 text-center text-xl font-bold font-headline uppercase"
          dangerouslySetInnerHTML={{
            __html: category.content === "" ? "\u00a0" : category.content,
          }}
        />
        <div className="flex-1 flex pb-4">
          <span
            className={clsx(
              "block w-full text-left text-black font-bold italic font-headline leading-none z-20",
              getPositionClassName(body.textPosition)
            )}
            style={{
              fontSize: `${body.scale.value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                body.content
                  .replace(
                    /\{/gi,
                    `<div class="stripeContainer"><div class="stripeText">`
                  )
                  .replace(
                    /\}/gi,
                    () =>
                      `</div><div class="stripeElement" style="background-color: ${getPrimaryColor(
                        state,
                        1
                      )}; transform:rotate(${
                        Math.random() * 8 - 1.5
                      }deg);"></div></div>`
                  )
                  .replace(/\n/gi, `<br/>`)
              ),
            }}
          />
        </div>
        <div className="absolute w-full right-3 bottom-3 flex flex-col items-end">
          <div className="w-[55%] aspect-square right-0 mr-0 ml-auto">
            <DraggableBG propertyPath="slides[0].data.image.position" />
            <div
              className="w-full h-full self-end"
              style={{
                backgroundImage: `url(${
                  image.url !== null
                    ? image.url
                    : "/assets/images/defaultImages/pass-the-mic-v2.jpg"
                })`,
                height: "100%",
                filter: "grayscale(100%)",
                backgroundPositionX: `${image.position.x}px`,
                backgroundPositionY: `${image.position.y}px`,
                backgroundSize: `${image.scale * 10 + 100}%`,
              }}
            />
          </div>
          <span
            dangerouslySetInnerHTML={{ __html: author.content }}
            className="w-full block z-20 bottom-0 py-2 font-headline text-lg text-right leading-none text-darkGray uppercase italic"
          />
        </div>
      </div>
    </TemplateWrapper>
  );
};

export default Template;
