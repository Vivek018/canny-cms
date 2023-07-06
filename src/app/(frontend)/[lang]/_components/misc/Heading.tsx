import React from 'react'

type Props = {
  title: string
}

export function Heading({title}: Props) {
  return (
    <h2 className='text-2xl md:text-4xl font-extrabold uppercase'>{title}</h2>
  );
}