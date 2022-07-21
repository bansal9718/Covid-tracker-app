// import React from 'react'
// import { MapContainer, TileLayer, useMap } from "react-leaflet";
// import "./Map.css";
// import { showDataOnMap } from './util';


// function Map({ countries, casesType, center, zoom }) {
//   function ChangeView({ center, zoom }) {
//     const map = useMap();
//     map.setView(center, zoom);
//     return null;
//   }
//   return (
//     <div className="map">
//       <MapContainer center={center} zoom={zoom} casesType={casesType}>
//         <ChangeView center={center} zoom={zoom} />
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {/* loop through all coountries and draw circles */}

//         {showDataOnMap(countries, casesType)}
//       </MapContainer>
//     </div>
//   );
// }

import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
// import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
  <div className ="map">
    <MapContainer
      casesType={casesType}
      className="map"
      center={center}
      zoom={zoom}

    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* //{showDataOnMap(countries, casesType)} */}
    </MapContainer>
    </div>
  );
}

export default Map;

// import React from "react";
// import { Map as LeafletMap, TileLayer } from "react-leaflet";
// import "./Map.css";
// import { showDataOnMap } from "./util";

// function Map({ countries, casesType, center, zoom }) {
//   // function ChangeView({ center, zoom }) {
//   //   const map = useMap();
//   //   map.setView(center, zoom);
//   //   return null;
//   // }

//   return (
//     <div className="map">
//       <LeafletMap
//         casesType={casesType}
//         className="map"
//         center={center}
//         zoom={zoom}
//         scrollWheelZoom={false}
//       >
//         {/* <ChangeView center={center} zoom={zoom} /> */}
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {showDataOnMap(countries, casesType)}
//       </LeafletMap>
//     </div>
//   );
// }

// export default Map;

  
// import React from "react";
// import { Map as LeafletMap, TileLayer } from "react-leaflet";
// import "./Map.css";
// import { showDataOnMap } from "./util";

// function Map({ countries, casesType, center, zoom }) {
//   return (
//     <div className="map">
//       <LeafletMap center={center} zoom={zoom}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {showDataOnMap(countries, casesType)}
//       </LeafletMap>
//     </div>
//   );
// }

// export default Map;