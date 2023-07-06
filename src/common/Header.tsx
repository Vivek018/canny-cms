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
        "flex my-auto h-[400px] md:h-[550px] md:py-6 relative justify-center md:justify-normal items-start md:items-center",
        className
      )}
    >
      <div
        className={
          "text-center mt-8 sm:mt-12 md:text-left sm:w-2/3 md:w-1/2 px-2 md:px-0 md:mx-0 backdrop-invert-0"
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
      <div className='flex justify-center items-center absolute -z-10 md:z-0 left-0 right-0 mx-auto md:justify-end md:items-end md:left-auto -bottom-[100px] md:bottom-20 lg:bottom-2 md:-right-4 lg:-right-10'>
        {rightComponent}
      </div>
    </header>
  );
}
