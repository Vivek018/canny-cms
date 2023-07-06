import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export function HeaderRightImage({ src, alt }: Props) {
  return (
    <Image
      className='object-contain w-80 md:w-96 lg:w-[500px]'
      src={src}
      alt={alt}
      width={500}
      height={500}
    />
  );
}
