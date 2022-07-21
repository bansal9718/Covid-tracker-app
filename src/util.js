import { Circle, Popup } from "leaflet";
import React from "react";

//import numeral from "numeral";

export const sortData = (data) => {
    const sortedData = [...data];

    return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1)
}

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        // rgb: "rgb(204,16,52)",
        // half_op: "rgba(204,16,52,0.5)",
        mulitiplier: 800,
    },

    recovered: {
        hex: "#7DD71D",
        // rgb: "rgb(125,215,29)",
        // half_op: "rgba(125,215,29,0.5)",
        mulitiplier: 1200,
    },

    deaths: {
        hex: "#C0C0C0",
        // rgb: "rgb(251,68,67)",
        // half_op: "rgba(251,68,67,0.5)",
        mulitiplier: 2000,
    },
};

// export const showDataOnMap = (data, casesType = 'cases') =>
//     data.map((country) => (
//         <Circle
//             center={[country.countryInfo.lat, country.countryInfo.long]}
//             fillOpacity={0.4}
//             color={casesTypeColors[casesType].hex}
//             fillColor={casesTypeColors[casesType].hex}

//             radius={
//                 Math.sqrt(country[casesType]) *
//                 casesTypeColors[casesType].mulitiplier
//             }
//         >

//             <Popup>
//                 <h1>IAM A POPUP</h1>
//             </Popup>
//         </Circle>




//     ));
