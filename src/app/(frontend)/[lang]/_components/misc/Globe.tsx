"use client";
import GlobeImage from "@/assets/images/earth.jpeg"

import Globe from "react-globe.gl";
type Props = {
};

export function MyGlobe({}: Props) {
  return (
    <Globe
      width={400}
      height={600}
      globeImageUrl={GlobeImage as unknown as string}
      backgroundColor='#0093D0'
    />
  );
}
