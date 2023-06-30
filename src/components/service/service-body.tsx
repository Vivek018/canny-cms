import { ServiceInfo } from "@/types";
import { cn } from "@/utils/cn";

type Props = {
  body: ServiceInfo["body"];
};

export function ServiceBody({ body }: Props) {
  return (
    <section className='h-[450px] overflow-scroll text-xs md:text-lg px-2 md:text-left mt-16 flex flex-col snap-y snap-mandatory scroll hide-scrollbar my-10 bg-neutral-primary'>
      {body.map(({ _key, content, title }, index) => {
        return (
          <article
            key={_key}
            className={cn(
              "snap-start snap-always flex flex-col lg:flex-row",
              index === 0 && "pt-3"
            )}
          >
            <h2 className='lg:w-[40%] text-lg md:text-2xl lg:text-3xl font-extrabold lg:mx-5 mb-3 lg:mb-0 lg:order-1'>
              {index + 1}. {title}
            </h2>
            <span
              className={cn(
                "h-0.5 w-full lg:w-1 lg:min-h-full lg:mx-20 bg-neutral-secondary order-3 lg:order-2 my-10 lg:my-0",
                index === body.length - 1 && "hidden lg:flex"
              )}
            ></span>
            <p
              className={cn(
                "lg:w-[60%] text-xs md:text-lg lg:pb-32 lg:mx-5 lg:order-3",
                index === body.length - 1 && "pb-2"
              )}
            >
              {content}
            </p>
          </article>
        );
      })}
    </section>
  );
}
