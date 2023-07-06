"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

export function GlobeComponent({}) {
  const globeEl = useRef<any>();
  const onlyWidth = useWindowWidth();
  const [width, setWidth] = useState(550);

  const labelData = [
    {
      labelLat: 23.022505,
      labelLng: 72.571365,
      color: "#E6007E",
    },
    {
      labelLat: 22.307159,
      labelLng: 73.181221,
    },
    {
      labelLat: 22.470701,
      labelLng: 70.057732,
    },
    {
      labelLat: 23.064739,
      labelLng: 70.12986,
    },
    {
      labelLat: 21.642795447075954,
      labelLng: 69.62959811328356,
    },
    {
      labelLat: 28.701519568596,
      labelLng: 77.21951313718287,
    },
    {
      labelLat: 22.725218330650357,
      labelLng: 75.857322820099,
    },
    {
      labelLat: 19.22068157219752,
      labelLng: 72.98085690649822,
    },
    {
      labelLat: 21.150820042940854,
      labelLng: 79.08383581569043,
    },
    {
      labelLat: 22.08076727796986,
      labelLng: 82.14215968337449,
    },
    {
      labelLat: 13.087605206139811,
      labelLng: 80.27285315619875,
    },
    {
      labelLat: 17.698050864120443,
      labelLng: 83.20558335800136,
    },
    {
      labelLat: 23.797021090713503,
      labelLng: 86.43150224006371,
    },
    {
      labelLat: 20.299964117381073,
      labelLng: 85.83133214188446,
    },
    {
      labelLat: 19.086070988332345,
      labelLng: 72.87224355485895,
    },
  ];

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.pointOfView({
      lat: 23.022505,
      lng: 77.571365,
      altitude: 1.75,
    });
  }, []);

  useEffect(() => {
    if (onlyWidth > 1000 && onlyWidth < 1300) {
      setWidth(500);
    } else if (onlyWidth > 850 && onlyWidth <= 1000) {
      setWidth(400);
    } else if (onlyWidth > 720 && onlyWidth <= 850) {
      setWidth(320);
    } else if (onlyWidth <= 720) {
      setWidth(600);
      if (globeEl.current) {
        globeEl.current.pointOfView({ altitude: 2.3 });
        globeEl.current.camera().position.y = -150;
        globeEl.current.scene().position.y = -150;
      }
    } else {
      setWidth(550);
    }
  }, [onlyWidth, globeEl]);

  return (
    <div>
      <Globe
        // @ts-expect-error
        width={width}
        height={width}
        ref={globeEl}
        backgroundColor={"rgba(0,0,0,0)"}
        labelsData={labelData}
        globeImageUrl={"earth.jpeg"}
        labelLat={(d: any) => d.labelLat}
        labelLng={(d: any) => d.labelLng}
        labelText={() => ""}
        labelDotRadius={() => 0.3}
        labelColor={(d: any) => (d.color ? d.color : "white")}
        labelResolution={2}
      />
    </div>
  );
}
