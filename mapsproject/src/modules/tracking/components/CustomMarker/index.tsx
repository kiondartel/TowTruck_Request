import React from "react";

import { Marker } from "@react-google-maps/api";
import { Position } from "../../../../interfaces/Position";

interface CustomMarkerProps {
  position: Position;
  iconSettings: google.maps.Icon;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  position,
  iconSettings,
}) => {
  return <Marker position={position} icon={iconSettings} />;
};

export default CustomMarker;
