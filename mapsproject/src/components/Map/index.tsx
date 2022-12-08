import React from "react";
import * as Styled from "./styles";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = {
  lat: -23.551032,
  lng: -46.68843,
};

const Map = () => {
  return (
    <Styled.Container>
      <LoadScript googleMapsApiKey="AIzaSyDqdDpwqMa3_psd_DvvOdkNdVuXAe8tzVQ">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        />
      </LoadScript>
    </Styled.Container>
  );
};

export default Map;
