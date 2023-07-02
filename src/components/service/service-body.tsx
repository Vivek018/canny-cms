"use client";

import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ServiceInfo } from "@/types";
import { cn } from "@/utils/cn";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { Icons } from "../icons";

type Props = {
  body: ServiceInfo["body"];
};

export function ServiceBody({ body }: Props) {
  const [activeKey, setActiveKey] = useState(body[0]._key);
  const [activeTitle, setActiveTitle] = useState(body[0].title);

  const onTitleClick = (key: string) => {
    const myElement = document.getElementById(key)!;
    const topPos = myElement.offsetTop;
    const scrollElement = document.getElementById("scrolling_div")!;
    scrollElement.scrollTop = topPos - 550;
  };

  return (
    <section className='h-[400px] text-xs md:text-lg px-2 md:text-left my-16 flex flex-col lg:mx-10 md:mx-0'>
      <article className='h-full flex flex-col sm:flex-row'>
        <div className='flex sm:hidden'>
          <Select key={activeKey}>
            <SelectTrigger>
              <SelectValue
                className='placeholder:text-xs important'
                placeholder={activeTitle}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {body.map(({ _key, title }) => (
                  <div
                    key={_key}
                    className={cn(
                      "flex max-w-full justify-between items-center cursor-pointer my-2",
                      _key === activeKey && "bg-neutral-shadow rounded-md"
                    )}
                  >
                    <h2
                      className='relative rounded-sm p-2 text-xs outline-none focus:bg-neutral-shadow data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
                      onClick={() => {
                        onTitleClick(_key);
                      }}
                    >
                      {title}
                    </h2>
                    {_key === activeKey ? (
                      <span className='mr-3'>
                        <Icons.check className='h-4 w-4' />
                      </span>
                    ) : null}
                  </div>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='hidden sm:w-[40%] md:w-1/3 h-full justify-around sm:flex flex-col sm:order-1'>
          {body.map(({ _key, title }) => {
            return (
              <h2
                key={_key}
                className={cn(
                  "sm:text-sm md:text-[16px] md:leading-6 lg:text-xl font-extrabold sm:hover:text-gray/50 sm:cursor-pointer sm:text-neutral-secondary transition duration-200",
                  activeKey === _key &&
                    "sm:text-black sm:cursor-auto sm:hover:text-black"
                )}
                onClick={() => {
                  onTitleClick(_key);
                }}
              >
                {title}
              </h2>
            );
          })}
        </div>
        <span
          className={cn(
            "hidden sm:flex h-0.5 w-full sm:w-0.5 sm:min-h-full lg:mx-20 sm:mx-10 bg-neutral-secondary order-3 sm:order-2 my-10 sm:my-0 ml-auto"
          )}
        ></span>
        <div
          id='scrolling_div'
          className={cn(
            "sm:w-[60%] md:w-2/3 overflow-scroll flex flex-col snap-y snap-mandatory scroll scroll-smooth hide-scrollbar gap-6 sm:order-3"
          )}
        >
          {body.map(({ _key, title, content }) => {
            return (
              <VisibilitySensor
                key={_key}
                onChange={(isVisible: boolean) => {
                  isVisible
                    ? (setActiveKey(_key), setActiveTitle(title))
                    : null;
                }}
              >
                <p
                  id={_key}
                  className={cn(
                    "sm:text-[10px] md:text-sm text-xs min-h-full my-auto lg:text-[16px] md:leading-6 snap-start snap-always"
                  )}
                >
                  {content}
                </p>
              </VisibilitySensor>
            );
          })}
        </div>
      </article>
    </section>
  );
}
