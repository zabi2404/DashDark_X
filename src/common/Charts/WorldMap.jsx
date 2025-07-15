import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

export default function WorldMap() {
  return (
    <ComposableMap
      projectionConfig={{
        scale: 200,
        center: [-80, 20], // Shift up to focus on upper hemisphere
      }}
      className="inline-block align-middle"
      style={{ width: 700, height: 500 }} // reduce height to trim bottom
    >
      <defs>
        {/* Dotted fill pattern for countries */}
        <pattern
          id="country-dots"
          patternUnits="userSpaceOnUse"
          width={6}
          height={6}
        >
          <circle cx="2" cy="2" r="2" fill="#AEB9E180" />
        </pattern>
      </defs>

      {/* Render geographies with dot fill */}
      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              stroke="none"
              fill="url(#country-dots)"
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
