import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type Props = {
  text: string;
  title: string;
  reverse?: boolean;
  description: string;
  className?: string;
  rightComponent?: ReactNode;
};

export function Header({
  className,
  text,
  title,
  description,
  reverse = false,
  rightComponent,
}: Props) {
  return (
    <header
      className={cn(
        "flex my-auto md:h-full py-6 items-center",
        className
      )}
    >
      <div
        className={
          "text-center mb-12 md:text-left sm:w-2/3 md:w-1/2 lg:w-[40%] mx-auto px-2 md:px-0  md:mx-0"
        }
      >
        <h1 className='text-2xl md:text-4xl font-extrabold uppercase'>
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
        <p className='text-gray/80 text-[15px] md:text-[17px] md:leading-6 mt-4 md:mt-6 mb-6'>
          {description}
        </p>
      </div>
      <div className="ml-auto">{rightComponent}</div>
    </header>
  );
}
