import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type Props = {
  text: string;
  title: string;
  reverse?: boolean;
  description: string;
  className?: string;
  rightComponentClassName?: string;
  rightComponent?: ReactNode;
};

export function Header({
  className,
  text,
  title,
  description,
  reverse = false,
  rightComponent,
  rightComponentClassName,
}: Props) {
  return (
    <header
      className={cn(
        "flex flex-col h-[280px] md:h-[450px] md:flex-row my-auto md:py-6 relative justify-start items-center",
        className
      )}
    >
      <div
        className={
          "text-center mt-8 sm:mt-12 md:text-left sm:w-2/3 md:w-[46%] px-2 md:px-0 md:mx-0 backdrop-invert-0"
        }
      >
        <h1 className='text-[15px] sm:text-lg md:text-xl lg:text-3xl font-extrabold uppercase'>
          {!reverse ? (
            <>
              {text}{" "}
              <span className='bg-title-gradient bg-clip-text text-transparent'>
                {title}
              </span>
            </>
          ) : (
            <>
              <span className='bg-title-gradient bg-clip-text text-transparent'>
                {text}{" "}
              </span>
              {title}
            </>
          )}
        </h1>
        <p className='text-gray/80 text-[10px] xs:text-xs md:text-sm lg:text-[16px] lg:leading-6 mt-2 md:mt-6 mb-6'>
          {description}
        </p>
      </div>
      <div
        className={cn(
          "md:w-1/2 flex md:ml-auto justify-center items-center absolute md:static opacity-20 md:opacity-100 -z-10 md:z-0",
          rightComponentClassName
        )}
      >
        {rightComponent}
      </div>
    </header>
  );
}
