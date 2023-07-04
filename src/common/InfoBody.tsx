"use client";

import { RefObject, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Info } from "@/types";
import { cn } from "@/utils/cn";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import { Icons } from "./Icons";
import { Button } from "./ui/Button";

type Props = {
  body: Info["body"];
};

export function InfoBody({ body }: Props) {
  const [activeKey, setActiveKey] = useState(body[0]._key);
  const [activeTitle, setActiveTitle] = useState(body[0].title);
  const scrollRef = useRef<HTMLDivElement>();

  const onTitleClick = (key: string) => {
    const scrollRefElement = scrollRef.current!;
    const myElement = document.getElementById(key)!;
    const topPos = myElement.offsetTop;
    scrollRefElement.scrollTop = topPos - scrollRefElement.offsetTop;
  };

  return (
    <section className='h-[650px] sm:h-[550px] md:h-[450px] px-2 md:text-left my-16 flex flex-col lg:mx-5 md:mx-0'>
      <article className='h-full flex flex-col md:flex-row'>
        <aside className='flex md:hidden'>
          <Select key={activeKey}>
            <SelectTrigger>
              <SelectValue
                className='placeholder:text-sm important'
                placeholder={activeTitle}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {body.map(({ _key, title }) => (
                  <Button
                    variant='icon'
                    size='full'
                    key={_key}
                    className={cn(
                      "flex justify-between items-center cursor-pointer my-2",
                      _key === activeKey && "bg-neutral-shadow rounded-md"
                    )}
                    onClick={() => {
                      onTitleClick(_key);
                    }}
                  >
                    <h2 className='rounded-sm p-2 text-sm focus:bg-neutral-shadow'>
                      {title}
                    </h2>
                    {_key === activeKey ? (
                      <Icons.check className='h-4 w-4 mr-2' />
                    ) : null}
                  </Button>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </aside>
        <aside className='hidden lg:w-[40%] h-full justify-around md:flex flex-col md:order-1'>
          {body.map(({ _key, title }) => {
            return (
              <Button
                key={_key}
                variant='ghost'
                size='full'
                className={cn(
                  "text-sm md:text-[16px] md:leading-6 lg:text-xl font-extrabold justify-start uppercase text-left",
                  activeKey === _key &&
                    "text-black cursor-auto hover:text-black"
                )}
                onClick={() => {
                  onTitleClick(_key);
                }}
              >
                {title}
              </Button>
            );
          })}
        </aside>
        <span
          className={cn(
            "hidden md:flex h-0.5 w-full md:w-0.5 md:min-h-full  md:mx-16 bg-neutral-secondary order-3 md:order-2 my-10 md:my-0 ml-auto"
          )}
        ></span>
        <div
          id='scrolling_div'
          ref={scrollRef as RefObject<HTMLDivElement>}
          className={cn(
            "md:w-[60%] lg:w-2/3 overflow-scroll flex flex-col snap-y snap-mandatory scroll scroll-smooth hide-scrollbar gap-6 md:order-3"
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
                    "xs:text-xs sm:text-[16px] min-h-full my-auto lg:text-[16px] sm:leading-6 snap-start snap-always"
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
