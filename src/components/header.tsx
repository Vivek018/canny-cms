type Props = {
  text: string;
  title: string;
  reverse?: boolean;
  description: string;
};

export function Header({ text, title, description, reverse = false }: Props) {
  return (
    <header className='flex mt-12 md:h-80 py-6 border-b-[1px]'>
      <section
        className={
          "text-center mb-12 md:text-left sm:w-2/3 lg:w-[40%] mx-auto px-2 md:px-0  md:mx-0"
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
                {title}
              </span>{" "}
              {text}
            </>
          )}
        </h1>
        <p className='text-gray/80 text-xs sm:text-sm md:text-lg mt-4 md:mt-8'>
          {description}
        </p>
      </section>
    </header>
  );
}
